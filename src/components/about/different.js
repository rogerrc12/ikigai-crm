import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import parser from "react-html-parser";

import About1 from "../../assets/images/resource/about-1.png";
import Bg2 from "../../assets/images/background/2.png";

const Different = () => {
  const data = useStaticQuery(graphql`
    {
      wordpress {
        diferencia(id: "cG9zdDo1NQ==") {
          title
          content
          details {
            benefits {
              description
              icon {
                sourceUrl
              }
              title
            }
            imagenes {
              imagenArriba {
                sourceUrl
              }
              imagenDebajo {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);

  const {
    wordpress: { diferencia },
  } = data;

  console.log(diferencia);

  return (
    <section className='about-section'>
      <div className='auto-container'>
        {/* Title Box */}
        <div className='title-box text-center'>
          <div className='title'>Acerca de Ikigai CRM</div>
          <h2 style={{ marginBottom: 10 }}>{diferencia.title}</h2>
          <div className='text'>{parser(diferencia.content)}</div>
        </div>
        <div className='row clearfix'>
          {/* Image Column */}
          <div className='image-column col-lg-6 col-md-12 col-sm-12'>
            <div className='image'>
              <img src={diferencia.details.imagenes.imagenArriba.sourceUrl} alt='cerca' />
            </div>
          </div>
          {/* Content Column */}
          <div className='content-column col-lg-6 col-md-12 col-sm-12'>
            <div className='inner-column'>
              {/* Web Block */}
              {diferencia.details.benefits.map((benefit) => (
                <div className='web-block style-two' key={benefit.title}>
                  <div className='inner-box'>
                    <div className='content'>
                      <div className='icon-box'>
                        <span className='icon'>
                          <img src={benefit.icon.sourceUrl} alt={benefit.title} />
                        </span>
                      </div>
                      <h5>{benefit.title}</h5>
                      <div className='text'>{benefit.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Lower Image */}
        <div className='lower-image'>
          <img src={diferencia.details.imagenes.imagenDebajo.sourceUrl} alt='background2' />
        </div>
      </div>
    </section>
  );
};

export default Different;
