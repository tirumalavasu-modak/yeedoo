import Head from "next/head";
import Layout from "../../components/Layout";

export default function ProductOverview() {
  const integrationCategories = [
    { name: "Orchestration", desc: "Airflow, Prefect", img: "https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/6912e6a293d0a16733e0fb43_Orchestration.avif" },
    { name: "Catalogs", desc: "Hive metastore, Unity Catalog, Glue Catalog", img: "https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/6912e6a251a6bcc8e6febb75_Catalogs.avif" },
    { name: "Monitoring and Observability", desc: "Grafana, CloudWatch, Splunk", img: "https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/6912e6a2aead61e1e9e9149d_Monitoring%20and%20observability.avif" },
    { name: "Open Table Formats", desc: "Delta, Iceberg", img: "https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/6912e6a295ad7baf920a6f21_Open%20Table%20Formats.avif" },
    { name: "AI Services", desc: "Anthropic, Windsurf, OpenAI", img: "https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/691d5a196e6ff4d94025315b_AI%20Services-03.avif" },
    { name: "Existing Platforms", desc: "Databricks, Cloudera, Amazon EMR", img: "https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/6912e6a299bdfbb45433387a_Existing%20Platforms.avif" }
  ];

  return (
    <Layout>
      <Head>
        <title>Spark Cost Optimization &amp; Job Execution | Yeedu Data Platform</title>
        <meta name="description" content="Achieve spark cost optimization through efficient Spark job execution, running data workloads faster while reducing cloud costs across data platforms." />
      </Head>

      {/* Hero */}
      <section className="hero-without-image-4" style={{ padding: "100px 20px 60px 20px", textAlign: "center" }}>
        <div className="container-14 w-container">
          <div className="hero-wrapper-two-4">
            <p className="event-sub-header" style={{ color: "#ff5b1a", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>
              Accelerate data workloads at a fraction of the cost.
            </p>
            <h1 className="hero-section-heading-centre-h1" style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "20px" }}>
              Yeedu <span className="text-span-125" style={{ color: "#ff5b1a" }}>Data Platform</span>
            </h1>
            <p className="paragraph-centre" style={{ color: "#ccc", fontSize: "1.15rem", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto 40px auto" }}>
              Re-engineering Apache Spark execution for <strong>unmatched speed</strong>, spark cost optimization, and simplicity. Run faster, pay less, scale anywhere.
            </p>
            <a href="/pricing" className="new-button w-button" style={{ display: "inline-block", padding: "14px 28px", backgroundColor: "#ff5b1a", border: "none", borderRadius: "8px", color: "#fff", fontWeight: "bold", textDecoration: "none" }}>
              Discover Now
            </a>
          </div>
        </div>
      </section>

      {/* reimagine features */}
      <section className="team-circles-2-copy" style={{ padding: "80px 20px", backgroundColor: "#111217", borderTop: "1px solid #22252a", borderBottom: "1px solid #22252a" }}>
        <div className="container-27 w-container">
          <div className="w-layout-blockcontainer container-41 w-container" style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 className="section-header-h2">Reimagine Apache Spark Infrastructure</h2>
            <p className="section-header-desc" style={{ color: "#aaa" }}>Enable spark job execution, better developer experience, and cloud cost optimization all with zero vendor lock-in.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            <div className="team-card-limage-title-desc-left" style={{ backgroundColor: "#0b0c10", padding: "40px", borderRadius: "20px", border: "1px solid #22252a" }}>
              <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/6915b8c3d1e329d9599f817f_Lower%20Cloud%20Costs%20of%20Execution.svg" width="60" alt="Costs" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.4rem", fontWeight: "bold", marginBottom: "15px" }}>Lower Cloud Costs of Execution</h3>
              <ul style={{ color: "#ccc", paddingLeft: "20px", lineHeight: "1.6" }}>
                <li>Speed up Spark job execution 4-10x and reduce cloud costs by 60% with Yeedu’s rearchitected Spark engine.</li>
                <li>Optimize compute cluster utilisation by packing more jobs per CPU cycle via Smart Scheduling.</li>
                <li>Optimize cloud costs and minimize compute waste with ephemeral clusters and Spot instance optimization.</li>
              </ul>
            </div>
            <div className="team-card-limage-title-desc-left" style={{ backgroundColor: "#0b0c10", padding: "40px", borderRadius: "20px", border: "1px solid #22252a" }}>
              <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/6915b8c3316b634748685161_Exceptional%20Developer%20Experience.svg" width="60" alt="DX" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.4rem", fontWeight: "bold", marginBottom: "15px" }}>Exceptional Developer Experience</h3>
              <ul style={{ color: "#ccc", paddingLeft: "20px", lineHeight: "1.6" }}>
                <li>Supports all Python and Spark workloads, like Pandas, PySpark, and DuckDB.</li>
                <li>Leverage AI-enabled notebooks for code generation and troubleshooting.</li>
                <li>Identify bottlenecks, debug failures, and optimize Spark performance with AI-powered observability.</li>
              </ul>
            </div>
            <div className="team-card-limage-title-desc-left" style={{ backgroundColor: "#0b0c10", padding: "40px", borderRadius: "20px", border: "1px solid #22252a" }}>
              <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/6915bad192d089d367e4eedf_dadd613769483a5abd2ec4916a1749d4_open-and-vendor-neutral-by-design.svg" width="60" alt="Neutral" style={{ marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.4rem", fontWeight: "bold", marginBottom: "15px" }}>Open and Vendor-Neutral</h3>
              <ul style={{ color: "#ccc", paddingLeft: "20px", lineHeight: "1.6" }}>
                <li>Integrate easily with your existing tools, catalogs, and data lakes.</li>
                <li>Zero proprietary formats, SDKs, or Platform dependencies.</li>
                <li>Built for multi-cloud optimization, working seamlessly across AWS, Azure, and GCP.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Three Tier Architecture Section */}
      <section className="hero-stack" style={{ padding: "80px 20px" }}>
        <div className="container-27 w-container" style={{ textAlign: "center" }}>
          <h2 className="section-header-h2" style={{ marginBottom: "15px" }}>Engineered for Scale. Designed for Performance.</h2>
          <p className="section-header-desc" style={{ color: "#aaa", marginBottom: "40px", maxWidth: "800px", margin: "0 auto 40px auto" }}>
            A modern, three-tier architecture engineered for scalable, fault-tolerant, and secure data operations from compute to control, all in your cloud environment.
          </p>
          <div className="div-block-43 youtube-5" style={{ borderRadius: "20px", border: "1px solid #222", overflow: "hidden", maxWidth: "900px", margin: "0 auto" }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              style={{ width: "100%", display: "block" }}
            >
              <source src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4%2F6969ea8d9e8ed96307a4f3bd_Yeedu%20flow%20%282%29_mp4.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Connectivity integrations */}
      <section className="team-circles-2" style={{ padding: "80px 20px", backgroundColor: "#111217", borderTop: "1px solid #22252a" }}>
        <div className="container-27 w-container">
          <div className="w-layout-blockcontainer container-41 w-container" style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 className="section-header-h2">Seamless Connectivity with Your Enterprise Stack</h2>
            <p className="section-header-desc" style={{ color: "#aaa" }}>Native integrations for orchestration, monitoring, cataloging, and AI services.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px" }}>
            {integrationCategories.map((item, idx) => (
              <div key={idx} className="team-card-2-new" style={{ backgroundColor: "#0b0c10", border: "1px solid #22252a", borderRadius: "15px", padding: "30px", textAlign: "center" }}>
                <img loading="lazy" src={item.img} alt={item.name} style={{ width: "100%", borderRadius: "10px", marginBottom: "20px", border: "1px solid #222" }} />
                <div className="team-name-card-new" style={{ fontWeight: "bold", fontSize: "1.15rem", marginBottom: "10px" }}>{item.name}</div>
                <div className="team-member-position-2-new" style={{ color: "#888", fontSize: "0.95rem" }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Take Challenge Footer CTA */}
      <section className="team-circles" style={{ padding: "80px 20px", textAlign: "center" }}>
        <div className="container-26 w-container">
          <h2 className="section-header-h2" style={{ marginBottom: "15px" }}>Transform Your Spark Infrastructure. Permanently.</h2>
          <p className="section-header-desc" style={{ color: "#aaa", marginBottom: "40px" }}>
            Achieve faster execution, predictable cloud costs, and end-to-end spark optimization with Yeedu’s intelligent platform foundation.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <a href="/pricing" style={{ padding: "14px 28px", backgroundColor: "#ff5b1a", borderRadius: "8px", color: "#fff", fontWeight: "bold", textDecoration: "none" }}>Schedule A Demo</a>
            <a href="https://docs.yeedu.io/" target="_blank" rel="noreferrer" style={{ padding: "14px 28px", backgroundColor: "#111217", border: "1px solid #333", borderRadius: "8px", color: "#fff", fontWeight: "bold", textDecoration: "none" }}>Explore Docs</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
