import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";

export default function AboutUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const leaders = [
    {
      name: "Milind Chitgupakar",
      role: "FOUNDER & CEO",
      img: "https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/67f396c50e2282214845dc01_2%20copy.svg",
      linkedin: "https://www.linkedin.com/in/milind-chitgupakar/",
      bio: "Milind has over 23 years of experience transforming enterprise data strategies, shaped by an early encounter with a costly Fortune 500 data failure. He helped build some of the era’s largest data warehouses at Microsoft and IBM, witnessing the gap between data investment and business value. He has also led the delivery of massive, efficient data platforms across healthcare and life sciences.\n\nTo address rising data computing costs, Milind launched Yeedu - a SaaS platform that cuts data processing expenses by 60% and boosts performance without migration or lock-in. Holding six patents, he now focuses on scaling Yeedu and mentoring the next wave of data innovators."
    },
    {
      name: "Daniel Mantovani",
      role: "CHIEF TECHNOLOGY OFFICER",
      img: "https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/67f396c2233c0e3325063de2_1%20copy.svg",
      linkedin: "https://www.linkedin.com/in/danielmantovani/",
      bio: "Daniel has over 16 years of experience leading, designing, architecting, and implementing software solutions for enterprise customers. He is passionate about building innovative products in data engineering. He has worked with teams and clients across South America, North America, Europe, and Asia.\n\nHe met Milind at IBM and decided to join him. He strategized, formulated, and transformed general ideas into innovative solutions for its clients.\n\nOne such innovation resulted in the creation of the Yeedu product. As the CTO of Yeedu, Daniel drives the technology vision and roadmap of the product."
    },
    {
      name: "Mayank Mehra",
      role: "CHIEF PRODUCT OFFICER",
      img: "https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/67f39726db8e566fa51cc7da_Untitled%20design%20(1).svg",
      linkedin: "https://www.linkedin.com/in/mayank-mehra/",
      bio: "Mayank’s extensive experience in product management has equipped him with a deep understanding of customer-centricity and the critical role of technology in addressing business challenges. He has a proven track record of designing and executing tailored product strategies that enhance operational efficiency, reduce costs, and increase revenue for enterprises.\n\nHe has developed and managed products for diverse industries, such as utilities, medical devices, automotive, and consumer electronics, serving clients in the US, Europe, and APAC regions.\n\nAs the CPO of Yeedu, Mayank engages with customers to discover product features and drive the product development roadmap."
    }
  ];

  return (
    <Layout>
      <Head>
        <title>About Yeedu | Innovating Data Efficiency &amp; Spark Performance</title>
        <meta name="description" content="Discover Yeedu’s mission to simplify data operations through innovation in Spark performance, automation, and scalable cloud efficiency for modern enterprises." />
      </Head>

      {/* Team Bios Header */}
      <section className="hero-section-about" style={{ padding: "80px 20px" }}>
        <div className="container-2 w-container" style={{ textAlign: "center" }}>
          <div className="w-layout-blockcontainer container-41 w-container">
            <h1 className="blog-post-h1" style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>Meet Our Team</h1>
            <p className="section-header-desc" style={{ color: "#ccc", fontSize: "1.10rem", lineHeight: "1.6", maxWidth: "800px", margin: "0 auto 60px auto" }}>
              Our team is the convergence point where human ingenuity and machine intelligence work in concert, building products and architecting for a more brilliant, data-driven future.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px", marginTop: "40px" }}>
            {leaders.map((leader, idx) => (
              <div key={idx} className="meet-out-team-card" style={{ backgroundColor: "#111217", border: "1px solid #22252a", borderRadius: "20px", padding: "40px", textAlign: "center" }}>
                <img src={leader.img} alt={leader.name} width="140" style={{ borderRadius: "50%", marginBottom: "20px" }} />
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0 0 5px 0" }}>{leader.name}</h2>
                <p style={{ color: "#ff5b1a", fontWeight: "bold", fontSize: "0.85rem", letterSpacing: "1px", marginBottom: "15px" }}>{leader.role}</p>
                <a href={leader.linkedin} target="_blank" rel="noreferrer" style={{ display: "inline-block" }}>
                  <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/69f47e247a3c61e6ff1af7ef_Linkedin-orange-icon.svg" alt="LinkedIn" width="24" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Mission Statement */}
      <section className="section-7" style={{ backgroundColor: "#111217", padding: "60px 20px", borderTop: "1px solid #22252a", borderBottom: "1px solid #22252a" }}>
        <div className="w-container" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ color: "#ccc", fontSize: "1.2rem", lineHeight: "1.7" }}>
            Yeedu was developed by ex-IBM leaders and architects with decades of experience building high-performance, multi-million-dollar data platforms for the world's demanding enterprises. Led by our leadership team, it’s helping today’s AI-hungry data users dramatically lower their compute costs and budget their cloud usage with fixed pricing.
          </p>
        </div>
      </section>

      {/* Biographies Details list */}
      <section style={{ padding: "80px 20px" }}>
        <div className="w-container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {leaders.map((leader, idx) => (
            <div key={idx} style={{ display: "grid", gridTemplateColumns: idx % 2 === 0 ? "2fr 1fr" : "1fr 2fr", gap: "60px", alignItems: "center", marginBottom: "80px" }}>
              {idx % 2 === 0 ? (
                <>
                  <div>
                    <h3 style={{ fontSize: "2rem", fontWeight: "bold", margin: "0 0 5px 0" }}>{leader.name}</h3>
                    <p style={{ color: "#ff5b1a", fontWeight: "bold", fontSize: "0.9rem", marginBottom: "20px" }}>{leader.role}</p>
                    <p style={{ color: "#ccc", lineHeight: "1.7", whiteSpace: "pre-line" }}>{leader.bio}</p>
                  </div>
                  <div>
                    <img src={leader.img} alt={leader.name} style={{ width: "100%", borderRadius: "20px", border: "1px solid #222" }} />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <img src={leader.img} alt={leader.name} style={{ width: "100%", borderRadius: "20px", border: "1px solid #222" }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "2rem", fontWeight: "bold", margin: "0 0 5px 0" }}>{leader.name}</h3>
                    <p style={{ color: "#ff5b1a", fontWeight: "bold", fontSize: "0.9rem", marginBottom: "20px" }}>{leader.role}</p>
                    <p style={{ color: "#ccc", lineHeight: "1.7", whiteSpace: "pre-line" }}>{leader.bio}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Math is simple intake Form */}
      <section className="primary-form" style={{ backgroundColor: "#111217", padding: "80px 20px" }}>
        <div className="w-container" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "15px" }}>The Math is Simple</h2>
          <p style={{ color: "#ccc", marginBottom: "30px" }}>Don't wait for your next bill shock - Act now!<br />Save on cloud compute costs today with Yeedu.</p>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", textAlign: "left" }}>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", fontSize: "0.9rem" }}>Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  style={{ width: "100%", padding: "12px 18px", backgroundColor: "#0b0c10", border: "1px solid #333", borderRadius: "8px", color: "#fff" }}
                  required
                />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", fontSize: "0.9rem" }}>Company Email</label>
                <input
                  type="email"
                  placeholder="Enter company email"
                  style={{ width: "100%", padding: "12px 18px", backgroundColor: "#0b0c10", border: "1px solid #333", borderRadius: "8px", color: "#fff" }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{ width: "100%", padding: "14px", backgroundColor: "#ff5b1a", border: "none", borderRadius: "8px", color: "#fff", fontWeight: "bold", cursor: "pointer", marginTop: "10px" }}
              >
                Show Me
              </button>
            </form>
          ) : (
            <div style={{ padding: "40px 0" }}>
              <h3 style={{ color: "#ff5b1a", fontWeight: "bold", fontSize: "1.5rem" }}>Thank you!</h3>
              <p style={{ color: "#ccc" }}>Your submission has been received!</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
