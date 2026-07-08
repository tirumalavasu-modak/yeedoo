import React from 'react';

export default function TestimonialsSection() {
  return (
    <section className="a-testimonial-section">
      <div className="div-block-41">
        <img src="/images/Scroll-Down-Arrow.gif" alt="Orange down arrows gif" width={100} height="auto" className="image-50" />
      </div>
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
  );
}
