import Head from "next/head";
import Layout from "../components/Layout";
import AboutHeroSection from "../components/sections/AboutHeroSection";
import MissionStatementSection from "../components/sections/MissionStatementSection";
import BiographyDetailsSection from "../components/sections/BiographyDetailsSection";
import SimpleMathFormSection from "../components/sections/SimpleMathFormSection";

export default function AboutUs() {
  return (
    <Layout>
      <Head>
        <title>About Yeedu | Innovating Data Efficiency &amp; Spark Performance</title>
        <meta name="description" content="Discover Yeedu’s mission to simplify data operations through innovation in Spark performance, automation, and scalable cloud efficiency for modern enterprises." />
      </Head>

      <AboutHeroSection />
      <MissionStatementSection />
      <BiographyDetailsSection />
      <SimpleMathFormSection />
    </Layout>
  );
}
