import Head from "next/head";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="root-layout">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#0b0c10" />
        
        {/* Load Webflow CSS */}
        <link
          href="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/css/lp-yeedu.webflow.shared.65aef62f9.min.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* Load Webflow Fonts */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript" defer></script>
      </Head>
      
      <Navigation />
      
      <main className="main-content">{children}</main>
      
      {/* Webflow Dark Footer */}
      <section className="footer-dark-2">
        <div className="footer-divider-2"></div>
        <div className="container-15">
          <div className="footer-wrapper-2">
            <div>
              <img
                src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/6981dadecd6daca2815a9b09_Yeedu%20Logo_640%20x%20363.webp"
                alt="Yeedu Logo"
                width="50"
                className="image-24"
              />
              <p className="footer-paragraph">
                Yeedu is a re-architected, high-performance Spark engine that runs the same workloads at a fraction of the cost. Run existing code with zero changes - just get faster results and smaller bills.
              </p>
              <div className="w-layout-hflex flex-block-2">
                <p className="mail">Email Us: &nbsp;</p>
                <a href="mailto:sales@yeedu.io" className="footer-link-2-copy">
                  sales@yeedu.io
                </a>
              </div>
              <div className="w-layout-hflex flex-block-12">
                <a href="https://www.linkedin.com/company/yeedu/" target="_blank" rel="noreferrer" className="w-inline-block">
                  <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/69f47e247a3c61e6ff1af7ef_Linkedin-orange-icon.svg" alt="LinkedIn" />
                </a>
                <a href="https://www.reddit.com/r/Yeedu/" target="_blank" rel="noreferrer" className="w-inline-block">
                  <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/69f47e24283b1ad8ea7541e9_Reddit-orange-icon.svg" alt="Reddit" />
                </a>
                <a href="https://yeedu.medium.com/" target="_blank" rel="noreferrer" className="w-inline-block">
                  <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/69f47e244fd1335a4b224dff_Medium-orange-icon.svg" alt="Medium" />
                </a>
                <a href="https://www.youtube.com/@Yeedu_video_library" target="_blank" rel="noreferrer" className="w-inline-block">
                  <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/69f47e233df736e2af41fb1d_Youtube-orange-icon.svg" alt="YouTube" />
                </a>
                <a href="https://x.com/Yeedu139467" target="_blank" rel="noreferrer" className="w-inline-block">
                  <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/69f47e24cc6e51606301de7d_Twitter-orange-icon.svg" alt="Twitter" />
                </a>
                <a href="https://www.instagram.com/yeedu.data?igsh=MTlpZW5wNTRwdWZqbA%3D%3D" target="_blank" rel="noreferrer" className="w-inline-block">
                  <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/69f47e243e175b2522c21a22_Instagram-orange-icon.svg" alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61564705530312" target="_blank" rel="noreferrer" className="w-inline-block">
                  <img src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/69f47e24865057cd7f35c94e_Facebook-orange-icon.svg" alt="Facebook" />
                </a>
              </div>
            </div>
            <div className="footer-content-2">
              <div className="footer-block-2">
                <h4 className="heading-23">Company</h4>
                <a href="/pricing" className="footer-link-2">Pricing</a>
                <a href="/about-us" className="footer-link-2">About us</a>
                <a href="/posts" className="footer-link-2">Blogs</a>
                <a href="/case-studies" className="footer-link-2">Case Studies</a>
                <a href="/benchmarks" className="footer-link-2">Benchmarks</a>
              </div>
            </div>
          </div>
          <div className="w-layout-layout quick-stack-3 wf-layout-layout">
            <div className="w-layout-cell cell-29">
              <div className="footer-copyright-center-2">Yeedu. All rights reserved. Copyright 2026.</div>
            </div>
            <div className="w-layout-cell cell-9">
              <a href="#" className="link-2">Terms of Service</a>
            </div>
            <div className="w-layout-cell cell-10">
              <a href="#" className="link-3">Privacy Policy</a>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>
        {`
          .root-layout {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: #0b0c10;
            color: #fff;
          }
          .main-content {
            flex: 1 0 auto;
            display: block;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}
