import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import parser from "react-html-parser";
import Tilt from "react-tilt";
import Collaborate from "../../assets/images/resource/collaborate.png";
import Collaborate1 from "../../assets/images/resource/collaborate-1.png";

const Support = () => {
  const data = useStaticQuery(graphql`
    {
      wordpress {
        relacion(id: "cG9zdDoxMDY=") {
          title
          detalles {
            subtitle
            detailslist {
              icon
              title
              content
            }
          }
        }
      }
    }
  `);

  const {
    wordpress: { relacion },
  } = data;

  return (
    <section className='collaborate-section'>
      <div className='auto-container'>
        <div className='row clearfix'>
          {/* Image Column */}
          <div className='image-column col-lg-6 col-md-12 col-sm-12'>
            <div className='inner-column wow fadeInLeft' data-wow-delay='0ms' data-wow-duration='1500ms'>
              <Tilt className='image titlt' options={{ max: 40 }}>
                <img src={Collaborate} alt='colaborar' />
              </Tilt>
              <div className='small-image'>
                <img src={Collaborate1} alt='colaborar' />
              </div>
            </div>
          </div>
          {/* Content Column */}
          <div className='content-column col-lg-6 col-md-12 col-sm-12'>
            <div className='inner-column'>
              {/* Sec Title */}
              <div className='sec-title'>
                <div className='title'>{relacion.detalles.subtitle}</div>
                <h2>{relacion.title}</h2>
              </div>
              <div className='blocks-outer'>
                {/* Progress Block */}
                {relacion.detalles.detailslist.map((caracteristica) => (
                  <div className='progress-block' key={caracteristica.title}>
                    <div className='inner-box'>
                      <div className='upper-box'>
                        <span className={`icon ${caracteristica.icon}`} />
                        {caracteristica.title}
                      </div>
                      <div className='text'>{parser(caracteristica.content)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
