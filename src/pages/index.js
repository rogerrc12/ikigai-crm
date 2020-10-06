import React from "react";

import Layout from "../components/layout";
import Banner from "../components/home/banner";
import Benefits from "../components/home/benefits";
import Sales from "../components/home/sales";
import CallToAction from "../components/callToAction";
import Management from "../components/home/management";
import Support from "../components/home/support";
import Testimonial from "../components/testimonial";
import Pricing from "../components/pricing";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />

    <Banner />
    <Benefits />
    <Sales />
    <Management />
    <Support />

    <CallToAction />

    <Testimonial />
    <Pricing />
  </Layout>
);

export default IndexPage;
