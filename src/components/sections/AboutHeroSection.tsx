import React from 'react';
import { leaders } from '../../data/leaders';

export default function AboutHeroSection() {
  return (
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
  );
}
