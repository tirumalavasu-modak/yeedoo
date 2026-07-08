import React, { useState } from 'react';

export default function SimpleMathFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
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
  );
}
