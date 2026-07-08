import React, { useState } from 'react';

export default function KeyFeaturesSection() {
  const [activeTab, setActiveTab] = useState("Turbo Engine + Smart Scheduling");

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

  return (
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
    </section>
  );
}
