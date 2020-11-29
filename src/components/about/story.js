import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import parser from "react-html-parser";

import Pattern17 from "../../assets/images/background/pattern-17.png";
import Pattern18 from "../../assets/images/background/pattern-18.png";
import Pattern14 from "../../assets/images/background/pattern-14.png";
import Business2 from "../../assets/images/resource/business-2.png";

const Story = () => {
  const {
    wordpress: { acerca },
  } = useStaticQuery(graphql`
    {
      wordpress {
        acerca(id: "cG9zdDo3NA==") {
          content
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `);

  return (
    <section className='business-section'>
      <div className='auto-container'>
        <div className='row clearfix'>
          {/* Content Column */}
          <div className='content-column col-lg-6 col-md-12 col-sm-12'>
            <div className='inner-column'>
              <h2>{acerca.title}</h2>
              <div className='text'>{parser(acerca.content)}</div>
              <a className='theme-btn btn-style-four' href='https://calendly.com/ventas-ikigaicrm/consultoria-ikgai-crm?month=2020-10' target='_blank' rel='noopener noreferrer'>
                <span className='txt'>Obtener una Demostración</span>
              </a>
            </div>
          </div>
          {/* Image Column */}
          <div className='image-column col-lg-6 col-md-12 col-sm-12'>
            <div className='inner-column'>
              <div className='pattern-layer' style={{ backgroundImage: `url(${Pattern17})` }} />
              <div className='pattern-layer-two' style={{ backgroundImage: `url(${Pattern18})` }} />
              <div className='pattern-layer-three' style={{ backgroundImage: `url(${Pattern14})` }} />
              <div className='image'>
                <img src={acerca.featuredImage.node.sourceUrl} alt='acerca' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
