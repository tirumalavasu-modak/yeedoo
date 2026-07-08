import React from 'react';

export default function FixedPriceTiersSection() {
  return (
    <section className="pricing-section-01" style={{ padding: "80px 20px", borderTop: "1px solid #111" }}>
      <div className="w-container" style={{ textAlign: "center" }}>
        <h2 className="section-header-h2" style={{ marginBottom: "15px" }}>Fixed Price. Unlimited Innovation.</h2>
        <p className="section-header-desc" style={{ color: "#aaa", marginBottom: "40px" }}>
          The industry’s first predictable Spark pricing enabling <strong>unlimited usage</strong> without surprise bills.
        </p>

        <div className="pricing-card-box" style={{ maxWidth: "500px", margin: "0 auto", backgroundColor: "#111217", border: "1px solid #ff5b1a", borderRadius: "20px", padding: "40px", textAlign: "left" }}>
          <h3 style={{ color: "#ff5b1a", fontWeight: "bold", fontSize: "1.8rem", margin: "0 0 10px 0" }}>Fixed Price Tiers</h3>
          <p style={{ color: "#ccc", fontSize: "0.95rem", lineHeight: "1.5", marginBottom: "30px" }}>
            Break free from per-core, per-hour, and per-job charges. Transparent annual licensing tiers for complete cost control.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 40px 0", display: "flex", flexDirection: "column", gap: "15px", color: "#ccc" }}>
            <li>✔ No per-core or hourly charges</li>
            <li>✔ Unlimited Spark processing per tier</li>
            <li>✔ Unlimited tier for unlimited usage</li>
            <li>✔ Predictable annual budgets</li>
            <li>✔ Scale without limits or surprise bills</li>
          </ul>
          <a
            href="mailto:sales@yeedu.io"
            style={{ display: "block", textAlign: "center", padding: "14px", backgroundColor: "#ff5b1a", borderRadius: "8px", color: "#fff", fontWeight: "bold", textDecoration: "none" }}
          >
            Get Your Cost Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
