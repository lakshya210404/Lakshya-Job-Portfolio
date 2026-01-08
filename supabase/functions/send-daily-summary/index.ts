import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get visits from the last 24 hours
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const { data: visits, error } = await supabase
      .from("visits")
      .select("*")
      .gte("created_at", yesterday.toISOString())
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching visits:", error);
      throw error;
    }

    const visitCount = visits?.length || 0;
    console.log(`Found ${visitCount} visits in the last 24 hours`);

    // Only send email if there were visits
    if (visitCount > 0) {
      // Group visits by page
      const pageStats: Record<string, number> = {};
      const uniqueIPs = new Set<string>();
      
      visits?.forEach((visit) => {
        pageStats[visit.page] = (pageStats[visit.page] || 0) + 1;
        if (visit.ip_address) uniqueIPs.add(visit.ip_address);
      });

      const pageStatsHtml = Object.entries(pageStats)
        .map(([page, count]) => `<li><strong>${page}</strong>: ${count} visits</li>`)
        .join("");

      const recentVisitsHtml = visits
        ?.slice(0, 10)
        .map((v) => {
          const time = new Date(v.created_at).toLocaleString();
          return `<li>${time} - ${v.page} ${v.referrer ? `(from ${v.referrer})` : ""}</li>`;
        })
        .join("");

      const emailHtml = `
        <h1>🎉 Daily Website Visit Summary</h1>
        <p>Here's your portfolio activity for the last 24 hours:</p>
        
        <h2>📊 Overview</h2>
        <ul>
          <li><strong>Total Visits:</strong> ${visitCount}</li>
          <li><strong>Unique Visitors:</strong> ${uniqueIPs.size}</li>
        </ul>
        
        <h2>📄 Page Breakdown</h2>
        <ul>${pageStatsHtml}</ul>
        
        <h2>🕐 Recent Visits (Last 10)</h2>
        <ul>${recentVisitsHtml}</ul>
        
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          This is an automated daily summary from your portfolio website.
        </p>
      `;

      const emailResponse = await resend.emails.send({
        from: "Portfolio Analytics <onboarding@resend.dev>",
        to: ["lakshyasprasad21@gmail.com"],
        subject: `📊 ${visitCount} people visited your portfolio today!`,
        html: emailHtml,
      });

      console.log("Daily summary email sent:", emailResponse);
    } else {
      console.log("No visits in the last 24 hours, skipping email");
    }

    return new Response(JSON.stringify({ success: true, visitCount }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-daily-summary function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
