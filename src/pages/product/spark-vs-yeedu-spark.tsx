import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/Layout";

export default function SparkVsYeeduSpark() {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const steps = [
    {
      title: "Step 1: Parking the Data",
      content: (
        <div>
          <p>A large-scale, publicly available dataset—New York City Yellow Cabs trips—was used to standardize results across systems.</p>
          <ul style={{ paddingLeft: "20px", color: "#ccc", lineHeight: "1.8" }}>
            <li><strong>Format:</strong> Native Parquet (no Delta or proprietary enhancements)</li>
            <li><strong>Volume:</strong> 1.57 billion rows</li>
            <li><strong>Size:</strong> ~53 GB</li>
            <li><strong>Storage:</strong> Placed in object stores (AWS S3)</li>
            <li><strong>Machine Configuration:</strong> r5d.xlarge - 4 Cores, Memory 32 GiB</li>
          </ul>
        </div>
      )
    },
    {
      title: "Step 2: Evaluating Startup Overhead",
      content: (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "30px" }}>
          <div>
            <h4 style={{ color: "#ff5b1a", fontWeight: "bold" }}>Yeedu Turbo Engine</h4>
            <p style={{ color: "#ccc" }}>Instantly compatible. Queries could be executed directly on the raw Parquet data with no schema registration, ingestion pipelines, or code rewrites required. Operating natively on standard APIs.</p>
          </div>
          <div>
            <h4 style={{ color: "#aaa", fontWeight: "bold" }}>Traditional Spark Engines</h4>
            <p style={{ color: "#ccc" }}>Required code-level modifications in several platforms to read the same Parquet data. Execution frequently failed until specific catalog integrations, schema hints, or cluster configs were manually adjusted.</p>
          </div>
        </div>
      )
    },
    {
      title: "Step 3: Running the Queries",
      content: (
        <div>
          <p>A suite of analytical queries was executed against the dataset under increasing levels of concurrency (up to 50 concurrent sessions) to test resource contention, thread scheduling, and scaling behaviors.</p>
        </div>
      )
    },
    {
      title: "Step 4: Analyzing the Results",
      content: (
        <div>
          <table style={{ width: "100%", borderCollapse: "collapse", color: "#fff", background: "#111217", border: "1px solid #222" }}>
            <thead>
              <tr style={{ background: "#ff5b1a" }}>
                <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #222" }}>Metric</th>
                <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #222" }}>Traditional Spark</th>
                <th style={{ padding: "12px", textAlign: "left", borderBottom: "2px solid #222" }}>Yeedu Turbo Engine</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "12px", borderBottom: "1px solid #222" }}>1.5B Ingestion &amp; Aggregate</td>
                <td style={{ padding: "12px", borderBottom: "1px solid #222" }}>12 mins 45s</td>
                <td style={{ padding: "12px", borderBottom: "1px solid #222", color: "#00e676" }}>1 min 38s (7.8x faster)</td>
              </tr>
              <tr>
                <td style={{ padding: "12px", borderBottom: "1px solid #222" }}>Spot Instance Reclamation Recovery</td>
                <td style={{ padding: "12px", borderBottom: "1px solid #222" }}>Failed (full job retry)</td>
                <td style={{ padding: "12px", borderBottom: "1px solid #222", color: "#00e676" }}>Recovered in 12s (stage retry)</td>
              </tr>
              <tr>
                <td style={{ padding: "12px", borderBottom: "1px solid #222" }}>Concurrency Overhead (50+ users)</td>
                <td style={{ padding: "12px", borderBottom: "1px solid #222" }}>Thread lock / high latency</td>
                <td style={{ padding: "12px", borderBottom: "1px solid #222", color: "#00e676" }}>Under 200ms queue delays</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Traditional Spark vs Turbo Rearchitectured Spark Engine | Yeedu</title>
        <meta name="description" content="Detailed performance and query benchmarks of Yeedu's C++ vectorized Turbo Engine vs traditional general-purpose Spark engines." />
      </Head>

      {/* Hero */}
      <section style={{ padding: "100px 20px 60px 20px", textAlign: "center" }}>
        <div className="w-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ color: "#ff5b1a", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>Turbo Spark Benchmarks</p>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px", lineHeight: "1.2" }}>
            Traditional Spark Engine vs <br /><span style={{ color: "#ff5b1a" }}>Turbo Rearchitectured</span> Spark Engine
          </h1>
          <p style={{ color: "#ccc", fontSize: "1.25rem", lineHeight: "1.6", marginBottom: "40px" }}>
            We put Yeedu’s rearchitected Spark Turbo Engine head-to-head against traditional Spark used in leading data platforms. The performance gap isn’t close.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <a href="/pricing" style={{ padding: "14px 28px", backgroundColor: "#ff5b1a", borderRadius: "8px", color: "#fff", fontWeight: "bold", textDecoration: "none" }}>Book a Demo</a>
            <a href="/30-days-csc" style={{ padding: "14px 28px", backgroundColor: "#111217", border: "1px solid #333", borderRadius: "8px", color: "#fff", fontWeight: "bold", textDecoration: "none" }}>Try Cost Challenge</a>
          </div>
        </div>
      </section>

      {/* System Descriptions */}
      <section style={{ padding: "80px 20px", backgroundColor: "#111217", borderTop: "1px solid #22252a", borderBottom: "1px solid #22252a" }}>
        <div className="w-container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "15px" }}>System Descriptions</h2>
            <p style={{ color: "#aaa" }}>
              In order to push the rearchitected Spark Turbo Engine to its extremes, we benchmarked it against native general-purpose engines.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            <div style={{ backgroundColor: "#0b0c10", padding: "40px", borderRadius: "20px", border: "1px solid #22252a" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px", color: "#ff5b1a" }}>Yeedu Turbo Engine</h3>
              <p style={{ color: "#ccc", marginBottom: "20px" }}>
                Rearchitected Spark execution engine engineered to improve performance, maximize speed, and avoid platform lock-in.
              </p>
              <ul style={{ color: "#ccc", fontSize: "0.9rem", lineHeight: "1.8", paddingLeft: "20px" }}>
                <li><strong>Zero Code Refactoring:</strong> No pipeline changes required</li>
                <li><strong>SIMD-Based Vector Execution:</strong> Parallel processing at the CPU register level</li>
                <li><strong>Columnar Data Access:</strong> Typed column vector operations</li>
                <li><strong>Smart Scheduling:</strong> Dynamic thread allocations across workloads</li>
              </ul>
            </div>
            <div style={{ backgroundColor: "#0b0c10", padding: "40px", borderRadius: "20px", border: "1px solid #22252a" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "20px" }}>Traditional Spark Engines</h3>
              <p style={{ color: "#ccc", marginBottom: "20px" }}>
                General-purpose runtime that runs Spark pipelines but is not optimized for cloud concurrency or modern CPU registers.
              </p>
              <ul style={{ color: "#ccc", fontSize: "0.9rem", lineHeight: "1.8", paddingLeft: "20px" }}>
                <li><strong>Row-Oriented Processing:</strong> Column conversions add JVM latency</li>
                <li><strong>Garbage Collection Overhead:</strong> JVM-managed pauses slow down steps</li>
                <li><strong>Manual Performance Tuning:</strong> Requires active developer parameter changes</li>
                <li><strong>Poor Idle Recovery:</strong> Compute remains underutilized during I/O waits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stress Test FAQ dropdown accordion style */}
      <section style={{ padding: "80px 20px" }}>
        <div className="w-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", textAlign: "center", marginBottom: "50px" }}>Rearchitected vs Traditional Spark Stress Test</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {steps.map((st, idx) => (
              <div key={idx} style={{ borderBottom: "1px solid #222", paddingBottom: "20px" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between", cursor: "pointer", fontWeight: "bold", fontSize: "1.2rem" }}
                  onClick={() => setOpenStep(openStep === idx ? null : idx)}
                >
                  <div>{st.title}</div>
                  <div>{openStep === idx ? "−" : "+"}</div>
                </div>
                {openStep === idx && (
                  <div style={{ marginTop: "20px", color: "#ccc", lineHeight: "1.6" }}>
                    {st.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
