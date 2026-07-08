import React, { useState } from 'react';

export default function PricingFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="pricing-form section-30">
      <div className="w-layout-blockcontainer container-52 w-container" style={{ padding: "80px 20px" }}>
        <div className="hero-section-tag" style={{ display: "inline-block", backgroundColor: "#1c1d24", border: "1px solid #333", borderRadius: "20px", padding: "6px 16px", marginBottom: "30px" }}>
          <div className="text-block-21" style={{ color: "#ff5b1a", fontWeight: "bold", fontSize: "0.85rem", letterSpacing: "1px", textTransform: "uppercase" }}>Pricing</div>
        </div>

        <div className="form-section-03">
          <div className="content-wrap-left">
            <h1 className="pricing-heading" style={{ fontSize: "3rem", fontWeight: "bold", lineHeight: "1.2", marginBottom: "20px" }}>
              Predictable Pricing. <br />No Surprises.
            </h1>
            <p className="paragraph-32" style={{ color: "#ccc", fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "40px" }}>
              Yeedu’s tier-based pricing means you pay a fixed fee per usage tier—no shock bills, even during spikes. Contact us for a free quote.
            </p>

            <div className="contact-method-wrap" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <a href="mailto:sales@yeedu.io" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", color: "#fff" }}>
                <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/694539af7185e597001bb348_94871972ed71b7f1f592d73086241e27_email-icon.webp" alt="Email" width="24" />
                <span style={{ fontSize: "1.05rem" }}>sales@yeedu.io</span>
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#fff" }}>
                <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/69453fdfd45ae5a60ac65d76_pin-5-32.webp" alt="Location" width="24" />
                <span style={{ fontSize: "1.05rem" }}>Chicago, Illinois, United States</span>
              </div>
            </div>
          </div>

          <div className="form-block-03 w-form" style={{ backgroundColor: "#111217", border: "1px solid #22252a", borderRadius: "20px", padding: "40px" }}>
            {!submitted ? (
              <form name="wf-form-Pricing-Page-form" onSubmit={handleSubmit}>
                <div className="div-block-77" style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "30px" }}>
                  <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/695777742f89ef20c23fed02_Sales-white.svg" width="50" alt="Sales Icon" />
                  <div>
                    <h3 style={{ margin: 0, fontWeight: "bold", fontSize: "1.2rem", color: "#fff" }}>Talk to sales</h3>
                    <p style={{ margin: 0, fontSize: "0.9rem", color: "#888" }}>Let’s help your team build better.</p>
                  </div>
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <input
                    className="text-field-inform w-input"
                    style={{ width: "100%", padding: "12px 18px", backgroundColor: "#0b0c10", border: "1px solid #222", borderRadius: "8px", color: "#fff" }}
                    placeholder="First and last name"
                    type="text"
                    required
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <input
                    className="text-field-inform w-input"
                    style={{ width: "100%", padding: "12px 18px", backgroundColor: "#0b0c10", border: "1px solid #222", borderRadius: "8px", color: "#fff" }}
                    placeholder="Company Email*"
                    type="email"
                    required
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <input
                    className="text-field-inform w-input"
                    style={{ width: "100%", padding: "12px 18px", backgroundColor: "#0b0c10", border: "1px solid #222", borderRadius: "8px", color: "#fff" }}
                    placeholder="Phone Number"
                    type="tel"
                  />
                </div>

                <div style={{ marginBottom: "30px" }}>
                  <textarea
                    placeholder="Share your use case and the outcomes you’re aiming for"
                    className="text-field-inform bigger w-input"
                    style={{ width: "100%", height: "120px", padding: "12px 18px", backgroundColor: "#0b0c10", border: "1px solid #222", borderRadius: "8px", color: "#fff", resize: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  className="button-4 in-form w-button"
                  style={{ width: "100%", padding: "14px", backgroundColor: "#ff5b1a", border: "none", borderRadius: "8px", color: "#fff", fontWeight: "bold", cursor: "pointer" }}
                >
                  Get your estimate
                </button>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <h3 style={{ color: "#ff5b1a", fontWeight: "bold", fontSize: "1.5rem", marginBottom: "10px" }}>Thank you!</h3>
                <p style={{ color: "#ccc" }}>We will get back in touch with you within 48 hours.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .form-section-03 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .form-section-03 {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
