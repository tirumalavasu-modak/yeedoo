import React from 'react';
import { leaders } from '../../data/leaders';

export default function BiographyDetailsSection() {
  return (
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
  );
}
