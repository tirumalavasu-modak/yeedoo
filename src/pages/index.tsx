import Head from "next/head";
import Layout from "../components/Layout";
import HeroSection from "../components/sections/HeroSection";
import VideoWorkspaceSection from "../components/sections/VideoWorkspaceSection";
import TraditionalPitfallsSection from "../components/sections/TraditionalPitfallsSection";
import KeyFeaturesSection from "../components/sections/KeyFeaturesSection";
import RunParallelSection from "../components/sections/RunParallelSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FaqSection from "../components/sections/FaqSection";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>High-Performance Spark Engine for Cost-Efficient Data Workloads | Yeedu</title>
        <meta name="description" content="Get a high-performance Spark engine to deliver 4–10× faster workloads, reduce cloud compute costs up to 60–80%, with no vendor lock-in and zero code changes." />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                  if (!user) {
                    window.netlifyIdentity.on("login", () => {
                      document.location.href = "/admin/";
                    });
                  }
                });
              }
            `,
          }}
        />
      </Head>

      <HeroSection />
      <VideoWorkspaceSection />
      <TraditionalPitfallsSection />
      <KeyFeaturesSection />
      <RunParallelSection />
      <TestimonialsSection />
      <FaqSection />
    </Layout>
  );
}
