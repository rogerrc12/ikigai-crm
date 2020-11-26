import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeader from "../components/pageHeader";
import Story from "../components/about/story";
import CallToAction from "../components/callToAction";
import Different from "../components/about/different";
import Testimonial from "../components/testimonial";
// import Pricing from "../components/pricing";

const Acerca = () => {
  return (
    <Layout>
      <SEO title='Acerca - Ikigai CRM' />
      <PageHeader title='Sobre nosotros' />
      <Story />
      <CallToAction />
      <Different />
      <Testimonial />
      {/* <Pricing /> */}
    </Layout>
  );
};

export default Acerca;
