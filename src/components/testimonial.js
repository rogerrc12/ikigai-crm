import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import parser from "react-html-parser";
import Tilt from "react-tilt";

import Pattern23 from "../assets/images/background/pattern-23.png";
import Icon from "../assets/images/icons/quote-icon.png";
import Author2 from "../assets/images/resource/author-2.png";

const Testimonial = () => {
  const {
    wordpress: { testimonioBy: testimonio },
  } = useStaticQuery(graphql`
    {
      wordpress {
        testimonioBy(slug: "testimonio") {
          content
          details {
            profession
            clientName
          }
          featuredImage {
            node {
              sourceUrl
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <section className="testimonial-section-two">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Image Column */}
          <div className="image-column col-lg-5 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="pattern-layer" style={{ backgroundImage: `url(${Pattern23})` }} />
              <Tilt className="image titlt" options={{ max: 40 }}>
                <img src={Author2} alt="autor" />
              </Tilt>
            </div>
          </div>
          {/* Content Column */}
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div className="inner-column">
              <h2>
                <span className="quote-icon">
                  <img src={Icon} alt="icono" />
                </span>
                Lo que dicen de nosotros
              </h2>
              <div className="single-item-carousel">
                <div className="testimonial-block-two">
                  <div className="inner-box">
                    <div className="text">{parser(testimonio.content)}</div>
                    <div className="author-box">
                      <div className="author-inner">
                        <h6>{testimonio.details.clientName}</h6>
                        <div className="designation">{testimonio.details.profession}</div>
                        <div className="author-image">
                          <img src={testimonio.featuredImage.node.sourceUrl} alt={testimonio.featuredImage.node.slug} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
