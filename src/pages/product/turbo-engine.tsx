import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/Layout";

export default function TurboEngine() {
  const [activeTab, setActiveTab] = useState("Vectorized Execution");

  const tabs = [
    {
      name: "Vectorized Execution",
      sub: "C++ SIMD Optimization",
      desc: "Turbo Engine replaces the standard JVM-based Spark query execution path with a highly optimized C++ engine. It utilizes Single Instruction Multiple Data (SIMD) instruction sets to process entire columns of data in parallel, maximizing the processing throughput of modern multi-core server processors.",
      video: "https://www.youtube.com/embed/fSDSrSyXumc"
    },
    {
      name: "Columnar Runtime",
      sub: "Predictable Memory Access",
      desc: "By storing and operating on records in a columnar format in memory, Turbo Engine avoids the JVM serialization overhead and garbage collection pauses. Columnar runtime ensures highly predictable memory access patterns, minimizing L1/L2/L3 cache misses.",
      video: "https://www.youtube.com/embed/fSDSrSyXumc"
    },
    {
      name: "CPU-Aware Caching",
      sub: "Optimized Cache Strategy",
      desc: "The engine matches intermediate datasets with the local cache configurations of the underlying compute hardware, preventing unnecessary disk or network roundtrips. Data remains cached in close proximity to the execution cores, ensuring blazing-fast execution speeds.",
      video: "https://www.youtube.com/embed/fSDSrSyXumc"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Turbo Engine | High-Performance Spark Vectorized Execution | Yeedu</title>
        <meta name="description" content="A high-performance C++ vectorized execution engine that accelerates CPU and memory workloads up to 10x with built-in Smart Scheduling for I/O efficiency." />
      </Head>

      {/* Hero */}
      <section style={{ padding: "100px 20px 60px 20px", textAlign: "center" }}>
        <div className="w-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ color: "#ff5b1a", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>Vectorized execution layer</p>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "20px" }}>Yeedu Turbo Engine</h1>
          <p style={{ color: "#ccc", fontSize: "1.15rem", lineHeight: "1.6", marginBottom: "40px" }}>
            A high-performance C++ vectorized execution engine that accelerates CPU and memory workloads up to 10× with built-in Smart Scheduling for I/O efficiency.
          </p>
        </div>
      </section>

      {/* Interactive Tabs */}
      <section style={{ padding: "80px 20px", backgroundColor: "#111217", borderTop: "1px solid #22252a", borderBottom: "1px solid #22252a" }}>
        <div className="w-container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "start" }}>
            <div>
              {tabs.map((tab, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "20px",
                    borderLeft: activeTab === tab.name ? "3px solid #ff5b1a" : "3px solid #333",
                    backgroundColor: activeTab === tab.name ? "#0b0c10" : "transparent",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    marginBottom: "15px"
                  }}
                  onClick={() => setActiveTab(tab.name)}
                >
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0 0 5px 0" }}>{tab.name}</h3>
                  <p style={{ color: "#888", fontSize: "0.9rem", margin: 0 }}>{tab.sub}</p>
                </div>
              ))}
            </div>

            <div>
              {tabs.map((tab, idx) => {
                if (activeTab !== tab.name) return null;
                return (
                  <div key={idx}>
                    <p style={{ color: "#ccc", lineHeight: "1.6", marginBottom: "20px" }}>{tab.desc}</p>
                    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: "10px", overflow: "hidden", border: "1px solid #333" }}>
                      <iframe
                        src={`${tab.video}?autoplay=1&mute=1&loop=1&playlist=fSDSrSyXumc&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
                        title={tab.name}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Scheduling Info Section */}
      <section className="section-26" style={{ padding: "80px 20px" }}>
        <div className="w-layout-blockcontainer container-51 w-container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
                <span style={{ color: "#ff5b1a" }}>Smart Scheduling:</span> Built-In Efficiency for I/O-Bound Workloads
              </h2>
              <p style={{ color: "#ccc", lineHeight: "1.7", fontSize: "1rem" }}>
                Turbo Engine includes a Smart Scheduling layer that makes I/O-bound workloads far more efficient. In most enterprise environments, these jobs are limited by storage throughput rather than compute, leaving CPU cores idle during read/write waits. Smart Scheduling detects these idle windows and packs additional tasks into them, keeping available CPU capacity fully utilized.
                <br /><br />
                This eliminates idle cycles and delivers <strong>2–4× higher cluster efficiency</strong> for ingestion, ELT, and streaming workloads without impacting CPU-bound tasks running on the same engine.
              </p>
            </div>
            <div>
              <img
                src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/6960d017e0c56cf3247dcc13_Yeedu%20Smart%20Scheduling.avif"
                alt="Smart Scheduling"
                style={{ width: "100%", borderRadius: "20px", border: "1px solid #222" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benchmark CTA Card */}
      <section className="section-25" style={{ padding: "80px 20px", backgroundColor: "#111217", borderTop: "1px solid #22252a" }}>
        <div className="w-container" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "15px" }}>Ready to benchmark Turbo Engine on your workloads?</h2>
          <p style={{ color: "#aaa", marginBottom: "30px" }}>
            Yeedu’s turbo engine with built-in Smart Scheduling maximizes both CPU-bound and I/O-bound performance. Bring your pipelines and quantify the speedups firsthand.
          </p>
          <a href="/pricing" style={{ display: "inline-block", padding: "14px 28px", backgroundColor: "#ff5b1a", border: "none", borderRadius: "8px", color: "#fff", fontWeight: "bold", textDecoration: "none" }}>Book a Demo</a>
        </div>
      </section>
    </Layout>
  );
}
