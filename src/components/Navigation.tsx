import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Navigation() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="rt-style-three-header rt-home-two-header rt-nav-seven">
      {/* Top Banner */}
      <div className="w-layout-hflex rt-nav-top-wrap">
        <Link href="/benchmarks/your-big-data-infrastructure-costs-should-not-be-a-line-item-you-cant-explain">
          <a className="link-7">&nbsp;✦ Yeedu Hits $0.53/TB in a TPC-DS Benchmark</a>
        </Link>
      </div>

      <div className="w-layout-blockcontainer rt-container-one-2 rt-container-gap w-container">
        <div className="rt-navbar-wrapper-2">
          {/* Logo */}
          <Link href="/">
            <a className="rt-home-three-nav-menu-brand w-nav-brand">
              <img
                width="100"
                height="16"
                alt="Yeedu-logo"
                src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/678d0201944a45ce7bc7cc15_Yeedu-logo-orange.avif"
                className="rt-image-height-auto-4"
              />
            </a>
          </Link>

          {/* Navigation Links */}
          <div className={`rt-nav-menu-link-wrap ${mobileOpen ? "mobile-open" : ""}`}>
            {/* Products Dropdown */}
            <div
              className="rt-home-three-dropdaown rt-display-block dropdown-container"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <div className="rt-style-three-menu-dropdown-toggle" onClick={() => setProductsOpen(!productsOpen)}>
                <div className="rt-home-three-dropdown">
                  <div className="rt-home-three-dropdown-menu">Products</div>
                </div>
                <img
                  width="10"
                  height="5"
                  alt="Menu Arrow"
                  src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/693a602733eebd1f805cd359_acb510701b687c267eb5311cce6a2969_Menu-Arrow.svg"
                  className={`rt-home-three-dropdown-icon ${productsOpen ? "rotated" : ""}`}
                />
              </div>
              {productsOpen && (
                <div className="dropdown-menu-list">
                  <div className="rt-home-three-dropdown-block">
                    <Link href="/product/overview"><a className="rt-home-three-dropdown-link">Product Overview</a></Link>
                    <Link href="/product/turbo-engine"><a className="rt-home-three-dropdown-link">Turbo Engine</a></Link>
                    <Link href="/product/metastore"><a className="rt-home-three-dropdown-link">Metastore</a></Link>
                    <Link href="/product/yeedu-assistant"><a className="rt-home-three-dropdown-link">Yeedu Assistant</a></Link>
                    <Link href="/product/spark-vs-yeedu-spark"><a className="rt-home-three-dropdown-link">Yeedu Spark</a></Link>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="rt-home-three-dropdaown rt-display-block dropdown-container"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <div className="rt-style-three-menu-dropdown-toggle" onClick={() => setResourcesOpen(!resourcesOpen)}>
                <div className="rt-home-three-dropdown">
                  <div className="rt-home-three-dropdown-menu">Resources</div>
                </div>
                <img
                  width="10"
                  height="5"
                  alt="Menu Arrow"
                  src="https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/693a602733eebd1f805cd359_acb510701b687c267eb5311cce6a2969_Menu-Arrow.svg"
                  className={`rt-home-three-dropdown-icon ${resourcesOpen ? "rotated" : ""}`}
                />
              </div>
              {resourcesOpen && (
                <div className="dropdown-menu-list">
                  <div className="rt-home-three-dropdown-block">
                    <Link href="/posts"><a className="rt-home-three-dropdown-link">Blogs</a></Link>
                    <Link href="/case-studies"><a className="rt-home-three-dropdown-link">Case Studies</a></Link>
                    <Link href="/benchmarks"><a className="rt-home-three-dropdown-link">Benchmarks</a></Link>
                    <a href="https://docs.yeedu.io/" target="_blank" rel="noreferrer" className="rt-home-three-dropdown-link">Documentation</a>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing Link */}
            <Link href="/pricing">
              <a className="link-block-9 w-inline-block">
                <div className="rt-home-three-dropdown">
                  <div className={`rt-home-three-dropdown-menu ${router.pathname === "/pricing" ? "active-menu" : ""}`}>Pricing</div>
                </div>
              </a>
            </Link>

            {/* About Us Link */}
            <Link href="/about-us">
              <a className="link-block-8-copy w-inline-block">
                <div className="rt-home-three-dropdown-copy">
                  <div className={`rt-home-three-dropdown-menu ${router.pathname === "/about-us" ? "active-menu" : ""}`}>About Us</div>
                </div>
              </a>
            </Link>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="rt-hamburgar-wrap" onClick={() => setMobileOpen(!mobileOpen)}>
            <div className={`rt-hamburgar-line-one ${mobileOpen ? "open" : ""}`}></div>
            <div className={`rt-hamburgar-line-two ${mobileOpen ? "open" : ""}`}></div>
            <div className={`rt-hamburgar-line-three ${mobileOpen ? "open" : ""}`}></div>
          </div>

          {/* Get Estimate button */}
          <Link href="/pricing">
            <a className="rt-hero-button rt-nav-button w-inline-block">
              <div className="rt-button-mask">
                <div className="rt-link-text-wrp">
                  <div className="text-block-36">GET YOUR ESTIMATE</div>
                  <div className="rt-secondary-btn-text">GET YOUR ESTIMATE</div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>

      <style jsx global>
        {`
          .dropdown-container {
            position: relative;
          }
          .dropdown-menu-list {
            position: absolute;
            top: 100%;
            left: 0;
            background-color: #121318;
            border: 1px solid #22252a;
            border-radius: 8px;
            padding: 8px 0;
            z-index: 1000;
            min-width: 200px;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
          }
          .rt-home-three-dropdown-link {
            display: block;
            padding: 10px 20px;
            color: #ccc;
            text-decoration: none;
            font-size: 0.95rem;
            transition: background-color 0.2s, color 0.2s;
          }
          .rt-home-three-dropdown-link:hover {
            background-color: #1c1d24;
            color: #ff5b1a;
          }
          .rotated {
            transform: rotate(180deg);
          }
          .rt-home-three-dropdown-icon {
            transition: transform 0.2s ease;
          }
          .active-menu {
            color: #ff5b1a !important;
          }
          
          @media (max-width: 768px) {
            .rt-nav-menu-link-wrap {
              display: none;
            }
            .rt-nav-menu-link-wrap.mobile-open {
              display: flex;
              flex-direction: column;
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              background-color: #0b0c10;
              padding: 20px;
              box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
              z-index: 999;
            }
            .dropdown-menu-list {
              position: static;
              background-color: #1c1d24;
              border: none;
              box-shadow: none;
              margin-left: 15px;
            }
          }
        `}
      </style>
    </header>
  );
}
