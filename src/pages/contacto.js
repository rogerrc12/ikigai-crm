import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeader from "../components/pageHeader";
import ContactForm from "../components/contactForm";
// import CallToAction from "../components/callToAction";

const Contacto = () => {
  return (
    <Layout>
      <SEO title='Contacto - Ikigai CRM' />
      <PageHeader title='Contáctenos' />
      <ContactForm />
      {/* <CallToAction /> */}
      <section className='call-to-action-section'>
        <div className='auto-container'>
          <div className='inner-container'>
            <h4>Quiero aumentar mis ventas, quiero fidelizar mis clientes</h4>
            <a className='theme-btn btn-style-four' href='https://calendly.com/ventas-ikigaicrm/consultoria-ikgai-crm?month=2020-10' target='_blank' rel='noopener noreferrer'>
              <span className='txt'>Obtener una demostración</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
