import React, { useState } from 'react';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
  );
}
