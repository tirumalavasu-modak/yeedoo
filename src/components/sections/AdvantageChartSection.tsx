import React from 'react';

export default function AdvantageChartSection() {
  return (
    <section className="hero-stack" style={{ backgroundColor: "#0b0c10", padding: "80px 20px" }}>
      <div className="container-27 w-container" style={{ textAlign: "center" }}>
        <h2 className="section-header-h2" style={{ marginBottom: "15px" }}>The Yeedu Advantage</h2>
        <p className="section-header-desc" style={{ color: "#aaa", marginBottom: "40px" }}>
          Learn how Yeedu's re-architected platform approach delivers superior value over traditional Spark platforms.
        </p>
        <img
          className="compare-table"
          src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/69147a9821871d289166e101_cmparasion.avif"
          alt="Comparison chart"
          style={{ width: "100%", maxWidth: "1000px", borderRadius: "10px", border: "1px solid #222" }}
        />
      </div>
    </section>
  );
}
