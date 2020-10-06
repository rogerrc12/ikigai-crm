import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import parser from "react-html-parser";
import Pattern7 from ".././assets/images/background/pattern-7.png";
import Pattern12 from ".././assets/images/background/pattern-12.png";
import Pattern11 from ".././assets/images/background/pattern-11.png";

const Pricing = () => {
  const {
    wordpress: {
      planes: { nodes: planes },
    },
  } = useStaticQuery(graphql`
    {
      wordpress {
        planes(where: { orderby: { field: DATE, order: ASC } }) {
          nodes {
            title
            content
            slug
            details {
              price
            }
          }
        }
      }
    }
  `);

  return (
    <section className="pricing-section">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title centered">
          <h2>Nuestros planes</h2>
          <div className="text">Ikigai CRM es personalizado, seguro, flexible e intuitivo.</div>
        </div>
        <div className="inner-container">
          <div className="pattern-layer-one" style={{ backgroundImage: `url(${Pattern7})` }} />
          <div className="pattern-layer-two" style={{ backgroundImage: `url(${Pattern12})` }} />
          <div className="row clearfix">
            {/* Price Block */}
            {planes.map((plan) => (
              <div className="price-block col-lg-4 col-md-6 col-sm-12" key={plan.slug}>
                <div className="inner-box">
                  <div className="pattern-layer-three" style={{ backgroundImage: `url(${Pattern11})` }} />
                  <div className="title">{plan.title}</div>
                  <div className="price">$ {plan.details.price}</div>
                  {parser(plan.content)}
                  <a href="#" className="theme-btn btn-style-five">
                    <span className="txt">Solicitar demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
