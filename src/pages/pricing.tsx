import Head from "next/head";
import Layout from "../components/Layout";
import PricingFormSection from "../components/sections/PricingFormSection";
import AdvantageChartSection from "../components/sections/AdvantageChartSection";
import FixedPriceTiersSection from "../components/sections/FixedPriceTiersSection";

export default function Pricing() {
  return (
    <Layout>
      <Head>
        <title>Yeedu Pricing | Get Your Tailored Pricing Today</title>
        <meta name="description" content="Get personalized compute cost analysis & optimization strategies for your data platform, workload, and scale across Databricks, Amazon EMR, Dataproc, etc." />
      </Head>

      <PricingFormSection />
      <AdvantageChartSection />
      <FixedPriceTiersSection />
    </Layout>
  );
}
