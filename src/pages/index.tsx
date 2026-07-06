import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";

export default function Index() {
  const [activeTab, setActiveTab] = useState("Turbo Engine + Smart Scheduling");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tabs = [
    {
      name: "Turbo Engine + Smart Scheduling",
      sub: "High-performance execution for CPU and I/O workloads",
      desc: "Yeedu’s C++ Turbo Engine accelerates CPU pipelines by 4–10× with SIMD optimization, while Smart Scheduling boosts I/O efficiency by 2–4×, reducing cloud costs.",
      video: "https://s3.amazonaws.com/webflow-prod-assets/67724ebcc1aad14c5b2a2be4/698daec72c260afd69a6177c_Turbo%20Engine%20%2B%20Smart%20Scheduling.mp4"
    },
    {
      name: "Yeedu AI Assistant",
      sub: "AI-powered development, debugging & optimization",
      desc: "Receive inline suggestions, optimization tips, performance insights, and troubleshooting help directly in your IDE. Powered by Spark context and execution data, the assistant provides actionable guidance from authoring to debugging.",
      video: "https://s3.amazonaws.com/webflow-prod-assets/67724ebcc1aad14c5b2a2be4/698dafcc6167c6c3206e0b8b_Yeedu%20AI%20Assistant.mp4"
    },
    {
      name: "Job Multiplexing",
      sub: "Run more workloads with fewer resources",
      desc: "Yeedu optimizes I/O workloads by stacking compatible tasks on the same compute resources, maximizing throughput, reducing CPU wastage, and preventing over-provisioning to avoid unexpected cloud costs.",
      video: "https://s3.amazonaws.com/webflow-prod-assets/67724ebcc1aad14c5b2a2be4/698db038ce569a6f72386d39_Job%20Multiplexing.mp4"
    },
    {
      name: "No-Code Migration Utility",
      sub: "Migrate from Databricks, Dataproc, EMR, or Cloudera with zero rewrite",
      desc: "Yeedu’s migration utility seamlessly ingests jobs, notebooks, and configs from your current Spark platform, converting them into Yeedu-ready pipelines with minimal effort, ensuring a smooth transition without vendor lock-in.",
      video: "https://s3.amazonaws.com/webflow-prod-assets/67724ebcc1aad14c5b2a2be4/698db06a857895b90b3ddca1_No-Code%20Migration%20Utility.mp4"
    },
    {
      name: "Multi-Cloud & Multi-Catalog Support",
      sub: "Run anywhere. Connect to anything. Zero lock-in.",
      desc: "Yeedu is built on open standards and open-source technologies, ensuring full portability across AWS, GCP, Azure, or on-prem. It integrates natively with Hive Metastore, Unity Catalog, Iceberg, Delta Lake, Glue, and custom catalogs, keeping your data and workloads portable.",
      video: "https://s3.amazonaws.com/webflow-prod-assets/67724ebcc1aad14c5b2a2be4/698db0d6bf75894d4a427a20_Multi-Cloud%20%26%20Multi-Catalog%20Support.mp4"
    }
  ];

  const faqs = [
    {
      q: "What is Yeedu’s licensing model?",
      a: "Yeedu offers a tiered licensing model, with monthly fees starting at $2,000. Pricing increases with higher usage tiers, ensuring scalability and cost efficiency."
    },
    {
      q: "Do my jobs need rewriting to run on Yeedu?",
      a: "Yeedu supports open-source Apache Spark, and your PySpark and Scala jobs can be migrated 'As-Is' to Yeedu. It also supports Python 3+."
    },
    {
      q: "Does Yeedu create Vendor lock-in?",
      a: "No, Yeedu supports open-source Apache Spark. Jobs can be written in PySpark or Scala and migrated to other platforms as needed, ensuring flexibility."
    },
    {
      q: "How do I assess Yeedu’s cost-saving potential?",
      a: "Yeedu has helped enterprises cut costs by an average of 60%. To evaluate potential savings, you can start by onboarding a sample workload."
    },
    {
      q: "Does Yeedu support Python jobs that don’t use Spark?",
      a: "Yes, Yeedu can run any Python job written in Python 3+, including those using popular modules like pandas."
    },
    {
      q: "Does Yeedu replace platforms like Databricks or Cloudera?",
      a: "Yeedu is a data platform that creates and runs data processing workloads like Databricks and Cloudera. However, Yeedu works well with Databricks and Cloudera's governance setup, so rather than a full workload migration, customers can start migrating high-cost workloads to Yeedu to maximize their cost savings."
    }
  ];

  return (
    <Layout>
      <Head>
        <title>High-Performance Spark Engine for Cost-Efficient Data Workloads | Yeedu</title>
        <meta name="description" content="Get a high-performance Spark engine to deliver 4–10× faster workloads, reduce cloud compute costs up to 60–80%, with no vendor lock-in and zero code changes." />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
            `,
          }}
        />
      </Head>

      {/* Hero Section */}
      <section className="section-18">
        <div className="w-layout-blockcontainer container-36 w-container">
          <div className="feature-top-content-wrapper">
            <h1 className="hero-section-h1">
              High-Performance <span className="text-span-88">Spark Engine</span> for<br />Modern Data Teams
            </h1>
            <div className="hero-section-description">
              Run critical pipelines <span className="text-span-87">4–10× faster</span>, reduce cloud spend by <span className="text-span-86"><strong>60–80%</strong></span> <br />with no code refactoring or vendor lock-in
            </div>
            <div className="w-layout-layout quick-stack-15 wf-layout-layout">
              <div className="w-layout-cell cell-26">
                <div className="div-block-35">
                  <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/693a638420b9fdbdb57d268d_48296b8ee3dde103eb863abb323ff412_Asset%201.svg" alt="lock icon" width="15" height="auto" />
                  <div className="text-block-22-1"> No vendor lock-in</div>
                </div>
              </div>
              <div className="w-layout-cell cell-26">
                <div className="div-block-35">
                  <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/693a6384c5ac510a66c95a65_e294ce54c53262260ffc6f428da3c6e3_Asset%202.svg" alt="eco icon" width="15" height="auto" />
                  <div className="text-block-22-1"> Runs parallel with current ecosystem</div>
                </div>
              </div>
              <div className="w-layout-cell cell-26">
                <div className="div-block-35">
                  <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/693a63849031a6275b22a5d3_79e37672ec95925802ff734c4b76cd5e_Asset%203.svg" alt="cloud icon" width="15" height="auto" />
                  <div className="text-block-22-1"> Battle-tested architecture</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Workspace Section */}
      <section className="yeedu-section">
        <div className="w-layout-blockcontainer container-38 w-container">
          <div className="div-block-43 youtube-5">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              style={{ width: "100%", borderRadius: "20px", border: "1px solid #222" }}
            >
              <source src="https://s3.amazonaws.com/webflow-prod-assets/67724ebcc1aad14c5b2a2be4/698da6b1e97d7307c49b1431_Yeedu-Homepage%20Workspace.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Traditional Spark Engines Pitfalls */}
      <section className="section-8">
        <div className="container-2">
          <h2 className="section-header-h2">
            Traditional <span className="text-span-96">Spark engines</span> <br />weren’t built for today’s scale
          </h2>
          <div className="w-layout-layout quick-stack-21 wf-layout-layout">
            <div className="w-layout-cell spark-engine-card-1">
              <div className="div-block-58">
                <div className="spark-engine-heading">Bill shocks drain budgets</div>
                <div className="spark-engine-desc">Spark workloads and pipelines running on oversized clusters waste compute and escalate costs.</div>
              </div>
            </div>
            <div className="w-layout-cell spark-engine-card-2">
              <div className="div-block-58">
                <div className="spark-engine-heading">Heavy Developer Overhead</div>
                <div className="spark-engine-desc">Complex interfaces and slow debugging drag developer productivity and delay deployments.</div>
              </div>
            </div>
            <div className="w-layout-cell spark-engine-card-3">
              <div className="div-block-58">
                <div className="spark-engine-heading">Locked-In Data Platforms</div>
                <div className="spark-engine-desc">Proprietary platforms enforce usage pricing and create painful, restrictive migrations.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features & Interactive Video Tabs */}
      <section className="section-23">
        <div className="w-layout-blockcontainer container-44 w-container">
          <h2 className="section-header-h2">
            <strong>Key Features: What Makes Yeedu <br />a </strong><span className="text-span-97"><strong>High-Performance</strong></span><strong> Spark Platform</strong>
          </h2>
          
          <div className="tabs-content-layout">
            <div className="tabs-menu-column">
              {tabs.map((tab, idx) => (
                <div
                  key={idx}
                  className={`tab-class-item ${activeTab === tab.name ? "tab-active" : ""}`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  <div className="text-main-heading">{tab.name}</div>
                  <div className="tab-setup-sub-heading-copy">{tab.sub}</div>
                  {activeTab === tab.name && (
                    <div className="tab-desc-text-mobile">{tab.desc}</div>
                  )}
                </div>
              ))}
            </div>

            <div className="tabs-video-preview">
              {tabs.map((tab, idx) => {
                if (activeTab !== tab.name) return null;
                return (
                  <div key={idx} className="video-wrap">
                    <p className="tab-desc-paragraph">{tab.desc}</p>
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      key={tab.video}
                      style={{ width: "100%", borderRadius: "20px", border: "1px solid #333" }}
                    >
                      <source src={tab.video} type="video/mp4" />
                    </video>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Run Parallel Stack Section */}
      <section className="team-circles-2">
        <div className="container-27">
          <div className="w-layout-blockcontainer container-41 w-container">
            <h2 className="section-header-h2">Built to <span className="text-span-98">run parallel</span> with every <br />Spark platform, cloud, and catalog</h2>
            <p className="section-header-desc">Native integrations for orchestration, monitoring, cataloging, and AI services.</p>
          </div>
          
          <div className="team-grid-new-4-layout" style={{ marginTop: "40px" }}>
            <div className="team-card-2-new">
              <img alt="aws-emr" src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/692ecaaf950378038cf11fb2_949bb47a73fd87d611d6e9f6991f296a_aws-emr.svg" className="team-member-image-2-new" />
              <div className="team-name-card-new">AWS EMR</div>
              <div className="team-member-position-2-new">Move high cost EMR workloads to Yeedu with no code rewrite.</div>
              <div className="card-desc-orange">Fully supported</div>
            </div>
            <div className="team-card-2-new">
              <img alt="databricks" src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/692ecaaf0a1c8cb2375e1c5e_be626fe34d77031f4bd9b6451af55c97_databricks.svg" className="team-member-image-2-new" />
              <div className="team-name-card-new">Databricks</div>
              <div className="team-member-position-2-new">Shift off usage-based licensing, run pipelines 4–10× faster, and avoid proprietary constructs.</div>
              <div className="card-desc-orange">Fully supported</div>
            </div>
            <div className="team-card-2-new">
              <img alt="google-dataproc" src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/692ecf6a0c54e8b9bce51544_7b6567b65aa1edc7f45b60a431004abb_google-dataproc.svg" className="team-member-image-2-new" />
              <div className="team-name-card-new">Dataproc</div>
              <div className="team-member-position-2-new">Lower compute costs significantly by running Dataproc pipelines on Yeedu’s efficient engine.</div>
              <div className="card-desc-orange">Fully supported</div>
            </div>
            <div className="team-card-2-new">
              <img alt="Cloudera" src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/692ecfd95eb327586d0065c5_c6554d4762fb83dbc6a5380d23340704_Cloudera.svg" className="team-member-image-2-new" />
              <div className="team-name-card-new">Cloudera</div>
              <div className="team-member-position-2-new">Migrate from legacy clusters/CDP cloud to a modern, high-performance Spark engine.</div>
              <div className="card-desc-orange">Fully supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="a-testimonial-section">
        <div className="container-2">
          <h2 className="section-header-h2">What Our Customers Are Saying</h2>
          <div className="testimonial-cards-grid" style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            <div className="a-testimonial-card">
              <p className="a-paragraph-regular">"Rising data platform costs are among the biggest challenges enterprises face today. Yeedu provides a transformative solution that drastically reduces expenses and eliminates this critical barrier."</p>
              <div className="a-testimonial-author-small">
                <h3 className="a-h6-heading">Dr. Mark Ramsey</h3>
                <div className="a-paragraph-small">Ex-Chief Data Officer, CDO, GSK &amp; Samsung</div>
              </div>
            </div>
            <div className="a-testimonial-card">
              <p className="a-paragraph-regular">"Traditional data platforms charge based on cloud resource consumption, such as the number of cores and hours used. The more you consume, the more they profit. Using Yeedu turns their inertia into your benefit."</p>
              <div className="a-testimonial-author-small">
                <h3 className="a-h6-heading">Milind Chitgupakar</h3>
                <div className="a-paragraph-small">Founder &amp; CEO, Yeedu</div>
              </div>
            </div>
            <div className="a-testimonial-card">
              <p className="a-paragraph-regular">"Based on what we see in production, we anticipate up to 65% annual cost savings with Yeedu, while consistently maintaining high performance standards."</p>
              <div className="a-testimonial-author-small">
                <h3 className="a-h6-heading">Senior Director</h3>
                <div className="a-paragraph-small">Top 5 Healthcare Insurer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-8">
        <div className="container-2">
          <h2 className="section-header-h2" style={{ textAlign: "center", marginBottom: "30px" }}>Frequently Asked Questions</h2>
          <div className="faq-list-wrap">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item" style={{ borderBottom: "1px solid #222", padding: "20px 0" }}>
                <div
                  className="faq-question"
                  style={{ display: "flex", justifyContent: "space-between", cursor: "pointer", fontWeight: "bold", fontSize: "1.1rem" }}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div>{faq.q}</div>
                  <div>{openFaq === idx ? "−" : "+"}</div>
                </div>
                {openFaq === idx && (
                  <div className="faq-answer" style={{ marginTop: "10px", color: "#ccc", lineHeight: "1.6" }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .tabs-content-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-top: 40px;
        }
        .tab-class-item {
          padding: 20px;
          border-left: 3px solid #222;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .tab-class-item:hover {
          background-color: #111217;
        }
        .tab-active {
          border-left-color: #ff5b1a;
          background-color: #111217;
        }
        .tab-desc-paragraph {
          margin-bottom: 20px;
          line-height: 1.6;
          color: #ccc;
          font-size: 1.05rem;
        }
        .tab-desc-text-mobile {
          display: none;
        }
        @media (max-width: 768px) {
          .tabs-content-layout {
            grid-template-columns: 1fr;
          }
          .tabs-video-preview {
            display: none;
          }
          .tab-desc-text-mobile {
            display: block;
            margin-top: 10px;
            color: #aaa;
          }
        }
      `}</style>
    </Layout>
  );
}
