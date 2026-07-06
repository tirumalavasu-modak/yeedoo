import Head from "next/head";
import Layout from "../../components/Layout";

export default function YeeduAssistant() {
  const capabilities = [
    { title: "Conversational Error Analysis", desc: "Ask natural language questions about your Spark jobs and get intelligent answers:", bullets: ["\"Why did my job fail?\"", "\"What caused the out of memory error in run 12345?\"", "\"My job is running slow - what's wrong?\"", "\"Show me all failed jobs from last week\""] },
    { title: "Contextual Recommendations", desc: "Get workspace-specific recommendations tailored to your environment:", bullets: ["Optimal memory configurations for your cluster size", "Suggested parallelism levels based on data volume", "Package dependencies for compatibility issues", "Code optimizations for your job patterns"] },
    { title: "AI Code Assistance", desc: "Intelligent code completion and error diagnosis in notebooks:", bullets: ["Auto-complete Python, SQL, and Spark code", "Explain errors in human-readable language", "Suggest corrected code automatically", "Generate code from natural language descriptions"] },
    { title: "Screen-Aware Intelligence", desc: "Knows where you are in the Yeedu UI for context-aware help:", bullets: ["\"What's wrong with this job?\" (from job run page)", "\"Is this cluster healthy?\" (from cluster view)", "\"Can I run jobs here?\" (from workspace page)", "No need to provide IDs or URLs"] }
  ];

  const scenarios = [
    { num: "Scenario 1", title: "Memory Error Mystery", q: "\"My job 15847 keeps failing with OutOfMemoryError\"", bullets: ["Retrieves job configuration and runtime details", "Analyzes memory allocation vs. data volume", "Identifies undersized executor memory", "Provides specific memory configuration recommendations", "Suggests optimal cluster sizing for workload"] },
    { num: "Scenario 2", title: "Performance Degradation", q: "\"Why is my job suddenly 10x slower?\"", bullets: ["Compares current run with historical performance", "Identifies data skew in partitions", "Analyzes cluster resource utilization patterns", "Recommends repartitioning strategies", "Suggests broadcast join optimizations"] }
  ];

  return (
    <Layout>
      <Head>
        <title>Yeedu Assistant | AI-Powered Spark Debugging &amp; Development | Yeedu</title>
        <meta name="description" content="AI-powered Spark debugging companion. Transform complex debugging into simple natural language conversations using ChatGPT &amp; Claude." />
      </Head>

      {/* Hero */}
      <section style={{ padding: "100px 20px 60px 20px", textAlign: "center" }}>
        <div className="w-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ color: "#ff5b1a", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>Assistant</p>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "20px" }}>Yeedu Assistant</h1>
          <p style={{ color: "#ccc", fontSize: "1.25rem", lineHeight: "1.6", marginBottom: "40px" }}>
            AI-Powered Spark Debugging and Development Companion
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginBottom: "40px" }}>
            <div style={{ color: "#fff" }}>✔ Claude &amp; ChatGPT Powered</div>
            <div style={{ color: "#fff" }}>✔ Natural Language</div>
            <div style={{ color: "#fff" }}>✔ Screen-Aware</div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <a href="/pricing" style={{ padding: "14px 28px", backgroundColor: "#ff5b1a", borderRadius: "8px", color: "#fff", fontWeight: "bold", textDecoration: "none" }}>Book a Demo</a>
            <a href="/30-days-csc" style={{ padding: "14px 28px", backgroundColor: "#111217", border: "1px solid #333", borderRadius: "8px", color: "#fff", fontWeight: "bold", textDecoration: "none" }}>Try 30-Day Challenge</a>
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section style={{ padding: "80px 20px", backgroundColor: "#111217", borderTop: "1px solid #22252a", borderBottom: "1px solid #22252a" }}>
        <div className="w-container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "15px" }}>Transform Spark Debugging from Hours to Minutes</h2>
            <p style={{ color: "#aaa", fontSize: "1.05rem", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
              Assistant X revolutionizes Spark development by transforming complex debugging into intuitive conversations. Instead of parsing hundreds of lines of stack traces, simply ask "Why did my job fail?" and get actionable insights instantly.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            <div style={{ backgroundColor: "#0b0c10", padding: "40px", borderRadius: "20px", border: "1px solid #22252a" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "20px" }}>Without Assistant X</h3>
              <ul style={{ color: "#ccc", lineHeight: "2", paddingLeft: "20px" }}>
                <li>Job fails with cryptic error</li>
                <li>Download and parse lengthy log files</li>
                <li>Cross-reference with Spark documentation</li>
                <li>Trial-and-error configuration changes</li>
                <li>Repeat cycle until resolution</li>
              </ul>
              <div style={{ marginTop: "30px", padding: "15px", backgroundColor: "#1f1115", borderLeft: "4px solid #ff4444", borderRadius: "4px", color: "#ff4444" }}>
                Time to resolution: Hours to days
              </div>
            </div>
            <div style={{ backgroundColor: "#0b0c10", padding: "40px", borderRadius: "20px", border: "1px solid #22252a" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "20px", color: "#ff5b1a" }}>With Assistant X</h3>
              <ul style={{ color: "#ccc", lineHeight: "2", paddingLeft: "20px" }}>
                <li>Job fails</li>
                <li>Ask: "What went wrong?" or Click "Diagnose"</li>
                <li>Receive detailed analysis with specific solutions</li>
                <li>Apply recommended fixes</li>
                <li>Job runs successfully</li>
              </ul>
              <div style={{ marginTop: "30px", padding: "15px", backgroundColor: "#111b15", borderLeft: "4px solid #00c853", borderRadius: "4px", color: "#00c853" }}>
                Time to resolution: Minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core AI Capabilities */}
      <section style={{ padding: "80px 20px" }}>
        <div className="w-container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", textAlign: "center", marginBottom: "50px" }}>Core AI Capabilities</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
            {capabilities.map((item, idx) => (
              <div key={idx} style={{ backgroundColor: "#111217", padding: "30px", borderRadius: "15px", border: "1px solid #22252a" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "10px", color: "#ff5b1a" }}>{item.title}</h3>
                <p style={{ color: "#aaa", fontSize: "0.95rem", marginBottom: "15px" }}>{item.desc}</p>
                <ul style={{ color: "#ccc", paddingLeft: "20px", fontSize: "0.9rem", lineHeight: "1.7" }}>
                  {item.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenario Debugging */}
      <section style={{ padding: "80px 20px", backgroundColor: "#111217", borderTop: "1px solid #22252a" }}>
        <div className="w-container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", textAlign: "center", marginBottom: "50px" }}>Real-World Debugging Scenarios</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            {scenarios.map((sc, idx) => (
              <div key={idx} style={{ backgroundColor: "#0b0c10", padding: "30px", borderRadius: "15px", border: "1px solid #22252a" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "10px", color: "#ff5b1a" }}>{sc.num}: {sc.title}</h3>
                <div style={{ backgroundColor: "#1e1e24", padding: "12px 18px", borderRadius: "6px", color: "#00e676", fontFamily: "monospace", fontSize: "0.9rem", marginBottom: "20px" }}>
                  {sc.q}
                </div>
                <h4 style={{ fontSize: "0.95rem", fontWeight: "bold", marginBottom: "10px", color: "#fff" }}>Assistant X Analysis:</h4>
                <ul style={{ color: "#ccc", fontSize: "0.9rem", paddingLeft: "20px", lineHeight: "1.6" }}>
                  {sc.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <div className="w-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "15px" }}>Ready to Transform Your Spark Development?</h2>
          <p style={{ color: "#aaa", marginBottom: "30px" }}>
            Experience the power of AI-driven Spark debugging and development with Assistant X. From reactive debugging to proactive optimization, focus on building great data applications.
          </p>
          <a href="/pricing" style={{ display: "inline-block", padding: "14px 28px", backgroundColor: "#ff5b1a", border: "none", borderRadius: "8px", color: "#fff", fontWeight: "bold", textDecoration: "none" }}>Book a Demo</a>
        </div>
      </section>
    </Layout>
  );
}
