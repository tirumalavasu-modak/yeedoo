import React from 'react';

export default function VideoWorkspaceSection() {
  return (
    <section className="yeedu-section">
      <div className="w-layout-blockcontainer container-38 w-container">
        <div className="div-block-43 youtube-5">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{ width: "100%", borderRadius: "20px", border: "1px solid #222" }}
          >
            <source src="https://s3.amazonaws.com/webflow-prod-assets/67724ebcc1aad14c5b2a2be4/698da6b1e97d7307c49b1431_Yeedu-Homepage%20Workspace.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="div-block-41">
          <img src="/images/Scroll-Down-Arrow.gif" alt="Orange down arrows gif" width={100} height="auto" className="image-50" />
        </div>
      </div>
    </section>
  );
}
