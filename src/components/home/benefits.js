import React from "react";
import parser from "react-html-parser";
import { useStaticQuery, graphql } from "gatsby";
import Pattern4 from "../../assets/images/background/pattern-4.png";
import Pattern5 from "../../assets/images/background/pattern-5.png";

const Benefits = () => {
  const {
    wordpress: {
      beneficios: { nodes: beneficios },
    },
  } = useStaticQuery(graphql`
    {
      wordpress {
        beneficios {
          nodes {
            title
            content
            slug
            icon {
              iconname
            }
          }
        }
      }
    }
  `);

  return (
    <section className="choose-section">
      <div className="pattern-layer-one" style={{ backgroundImage: `url(${Pattern4})` }} />
      <div className="pattern-layer-two" style={{ backgroundImage: `url(${Pattern5})` }} />
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title centered">
          <div className="title">¿Por qué elegir Ikigai CRM? </div>
          <h2>Porque captura, procesa y gestiona la información vital de tu negocio.</h2>
        </div>
        <div className="row clearfix">
          {/* Featured Block */}
          {beneficios.map((beneficio) => (
            <div className="featured-block col-lg-3 col-md-6 col-sm-12" key={beneficio.slug}>
              <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                <div className="icon-box">
                  <span className={`icon ${beneficio.icon.iconname}`} />
                </div>
                <h5>{beneficio.title}</h5>
                <div className="text">{parser(beneficio.content)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;