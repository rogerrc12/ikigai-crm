import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeader from "../components/pageHeader";
import ContactForm from "../components/contactForm";
import CallToAction from "../components/callToAction";

const Contacto = () => {
  return (
    <Layout>
      <SEO title="Contacto - Ikigai CRM" />
      <PageHeader title="Contáctenos" />
      <ContactForm />
      <CallToAction />
    </Layout>
  );
};

export default Contacto;
