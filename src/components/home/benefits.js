import React from "react";
import parser from "react-html-parser";
import { useStaticQuery, graphql } from "gatsby";
import Pattern4 from "../../assets/images/background/pattern-4.png";
import Pattern5 from "../../assets/images/background/pattern-5.png";

import facilIcon from "../../assets/images/icons/facil.png";
import personalizadoIcon from "../../assets/images/icons/personalizado.png";
import datosIcon from "../../assets/images/icons/datos.png";
import officeIcon from "../../assets/images/icons/oficina.png";

const Benefits = () => {
  const {
    wordpress: { eleccion },
  } = useStaticQuery(graphql`
    {
      wordpress {
        eleccion(id: "cG9zdDo5OA==") {
          title
          beneficios {
            subtitle
            beneficiosList {
              title
              icon
              content
            }
          }
        }
      }
    }
  `);

  return (
    <section className='choose-section'>
      <div className='pattern-layer-one' style={{ backgroundImage: `url(${Pattern4})` }} />
      <div className='pattern-layer-two' style={{ backgroundImage: `url(${Pattern5})` }} />
      <div className='auto-container'>
        {/* Sec Title */}
        <div className='sec-title centered'>
          <div className='title'>{eleccion.beneficios.subtitle}</div>
          <h2>{eleccion.title}</h2>
        </div>
        <div className='row clearfix'>
          {/* Featured Block */}
          {eleccion.beneficios.beneficiosList.map((beneficio) => (
            <div className='featured-block col-lg-3 col-md-6 col-sm-12' key={beneficio.title}>
              <div className='inner-box wow fadeInLeft' data-wow-delay='0ms' data-wow-duration='1500ms'>
                <div className='icon-box'>
                  <img
                    src={
                      beneficio.icon === "facil"
                        ? facilIcon
                        : beneficio.icon === "personalizado"
                        ? personalizadoIcon
                        : beneficio.icon === "datos"
                        ? datosIcon
                        : beneficio.icon === "oficina"
                        ? officeIcon
                        : null
                    }
                    alt='icon'
                    className={beneficio.icon === "personalizado" ? "icon-box-personalizado" : ""}
                  />
                </div>
                <h5>{beneficio.title}</h5>
                <div className='text'>{parser(beneficio.content)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
