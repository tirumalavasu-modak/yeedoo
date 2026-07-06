import Head from "next/head";
import Layout from "../../components/Layout";

export default function Metastore() {
  const steps = [
    { num: "01", title: "Create Metastore", desc: "Configure connection details for your chosen metastore type" },
    { num: "02", title: "Attach Secrets", desc: "Link authentication tokens and storage credentials securely" },
    { num: "03", title: "Connect to Clusters", desc: "Attach metastore to new or existing Spark clusters in Yeedu" },
    { num: "04", title: "Query with Governance", desc: "Run SHOW CATALOGS and access your governed data immediately" }
  ];

  const benefits = [
    { title: "Governance Stays External", desc: "Yeedu connects to your metastore rather than forcing metadata migration. Your lineage, permissions, and compliance logs remain exactly where they are." },
    { title: "Zero Migration Overhead", desc: "Integrate Glue, Hive, or Unity metastore instantly with no schema recreation or manual migration—just point and connect." },
    { title: "Live External Metastores", desc: "Yeedu queries metadata on-demand using native APIs with no data copying, keeping your catalog definitions consistent across tools." },
    { title: "Unified Catalog Layer", desc: "Single control plane for data discovery and governance across Glue, Hive, and Unity with consistent access experience." },
    { title: "No Audit Gaps", desc: "No permission recertification or compliance disruption—your existing audit trails and governance frameworks continue unchanged." },
    { title: "Immediate Access", desc: "Browse external catalogs in Catalog Explorer and query tables directly from Yeedu notebooks using existing namespaces without changing SQL code." }
  ];

  return (
    <Layout>
      <Head>
        <title>Metastore Integration | Unity Catalog, Hive Metastore, AWS Glue | Yeedu</title>
        <meta name="description" content="Connect Your Governance to Yeedu's Spark Orchestration. Support for Unity Catalog, Hive Metastore, AWS Glue with zero data migration required." />
      </Head>

      {/* Hero */}
      <section style={{ padding: "100px 20px 60px 20px", textAlign: "center" }}>
        <div className="w-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ color: "#ff5b1a", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "15px" }}>Metastore</p>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "20px" }}>Metastore Integration</h1>
          <p style={{ color: "#ccc", fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "40px" }}>
            Connect Your Governance to Yeedu’s Spark Orchestration
          </p>
          
          <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/695b70fabf63ebabe5de6056_uc.avif" width="24" alt="Unity Catalog" />
              <span style={{ color: "#fff" }}>Unity Catalog</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/6969e4a2faa7e3096fa2b54b_Hive-fill.avif" width="24" alt="Hive Metastore" />
              <span style={{ color: "#fff" }}>Hive Metastore</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/695b70fa35ac3103831f0d3a_Gl.avif" width="24" alt="AWS Glue" />
              <span style={{ color: "#fff" }}>AWS Glue</span>
            </div>
          </div>
          
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <a href="/pricing" style={{ padding: "14px 28px", backgroundColor: "#ff5b1a", borderRadius: "8px", color: "#fff", fontWeight: "bold", textDecoration: "none" }}>Book a Demo</a>
            <a href="/30-days-csc" style={{ padding: "14px 28px", backgroundColor: "#111217", border: "1px solid #333", borderRadius: "8px", color: "#fff", fontWeight: "bold", textDecoration: "none" }}>Try 30-Day Challenge</a>
          </div>
        </div>
      </section>

      {/* Bring Your Own Catalog details */}
      <section style={{ padding: "80px 20px", backgroundColor: "#111217", borderTop: "1px solid #22252a", borderBottom: "1px solid #22252a" }}>
        <div className="w-container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "15px" }}>Bring Your Own Catalog, Zero Migration Required</h2>
            <p style={{ color: "#aaa", fontSize: "1.05rem", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto" }}>
              Yeedu acts as a federated metastore layer that reads from your existing systems directly. Instead of duplicating metadata, Yeedu connects to your Hive, AWS Glue, or Unity metastores instantly, preserving all lineage and compliance logs exactly where they are.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
            <div style={{ backgroundColor: "#0b0c10", padding: "30px", borderRadius: "15px", border: "1px solid #22252a" }}>
              <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/694a6ae4bb4d494079c63617_Databricks%20Unity%20Catalog.avif" alt="Unity" style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "10px" }}>Databricks Unity Catalog</h3>
              <p style={{ color: "#aaa", fontSize: "0.9rem", marginBottom: "20px" }}>Enable centralized governance using Databricks endpoint URL and access tokens.</p>
              <ul style={{ color: "#ccc", fontSize: "0.85rem", paddingLeft: "20px", lineHeight: "1.8" }}>
                <li>Databricks endpoint URL integration</li>
                <li>Personal Access Token authentication</li>
                <li>Storage path mapping (S3, ADLS, GCS)</li>
                <li>Instant catalog listing and validation</li>
              </ul>
            </div>
            <div style={{ backgroundColor: "#0b0c10", padding: "30px", borderRadius: "15px", border: "1px solid #22252a" }}>
              <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/694a6ae4a4430f1233a28e74_Hive%20Metastore.avif" alt="Hive" style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "10px" }}>Hive Metastore</h3>
              <p style={{ color: "#aaa", fontSize: "0.9rem", marginBottom: "20px" }}>Connect to on-premises or legacy Hadoop clusters with configuration file upload.</p>
              <ul style={{ color: "#ccc", fontSize: "0.85rem", paddingLeft: "20px", lineHeight: "1.8" }}>
                <li>hive-site.xml configuration upload</li>
                <li>krb5.conf file for Kerberos</li>
                <li>Hive Kerberos or Basic authentication</li>
                <li>Legacy Hadoop cluster support</li>
              </ul>
            </div>
            <div style={{ backgroundColor: "#0b0c10", padding: "30px", borderRadius: "15px", border: "1px solid #22252a" }}>
              <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/694a6ae4b10efa81d363c3c4_AWS%20Glue%20Data%20Catalog.avif" alt="Glue" style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }} />
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "10px" }}>AWS Glue Data Catalog</h3>
              <p style={{ color: "#aaa", fontSize: "0.9rem", marginBottom: "20px" }}>AWS-native architectures using Glue as the central catalog with IAM authentication.</p>
              <ul style={{ color: "#ccc", fontSize: "0.85rem", paddingLeft: "20px", lineHeight: "1.8" }}>
                <li>AWS IAM user credentials setup</li>
                <li>Access Key ID and Secret Key</li>
                <li>Default region configuration</li>
                <li>Instant catalog validation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Metastore Setup Workflow */}
      <section style={{ padding: "80px 20px" }}>
        <div className="w-container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "60px", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", lineHeight: "1.3" }}>
                Simple <span style={{ color: "#ff5b1a" }}>Metastore</span> Setup
              </h2>
              <p style={{ color: "#aaa", marginTop: "15px" }}>Connect your metastore to Yeedu in minutes, then attach it to any Spark cluster for immediate governance.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
              {steps.map((step, idx) => (
                <div key={idx} style={{ display: "flex", gap: "20px", borderBottom: idx !== 3 ? "1px solid #222" : "none", paddingBottom: "20px" }}>
                  <div style={{ fontSize: "1.8rem", color: "#ff5b1a", fontWeight: "bold" }}>{step.num}</div>
                  <div>
                    <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "0 0 5px 0" }}>{step.title}</h3>
                    <p style={{ color: "#ccc", margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Federated metastore benefits */}
      <section style={{ padding: "80px 20px", backgroundColor: "#111217", borderTop: "1px solid #22252a" }}>
        <div className="w-container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", textAlign: "center", marginBottom: "50px" }}>
            Federated <span style={{ color: "#ff5b1a" }}>Metastore</span> Benefits
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
            {benefits.map((item, idx) => (
              <div key={idx} style={{ backgroundColor: "#0b0c10", padding: "30px", borderRadius: "15px", border: "1px solid #22252a" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "15px", color: "#ff5b1a" }}>{item.title}</h3>
                <p style={{ color: "#ccc", lineHeight: "1.6", fontSize: "0.95rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <div className="w-container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "15px" }}>Bring Your Own Catalog to Yeedu</h2>
          <p style={{ color: "#aaa", marginBottom: "30px" }}>
            Connect your existing Hive, AWS Glue, or Unity metastore to Yeedu's federated layer with zero migration overhead and instant access to governed data.
          </p>
          <a href="/pricing" style={{ display: "inline-block", padding: "14px 28px", backgroundColor: "#ff5b1a", border: "none", borderRadius: "8px", color: "#fff", fontWeight: "bold", textDecoration: "none" }}>Book a Demo</a>
        </div>
      </section>
    </Layout>
  );
}
