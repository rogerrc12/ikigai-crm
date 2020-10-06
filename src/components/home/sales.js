import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import parser from "react-html-parser"
import Tilt from "react-tilt"
import Pattern6 from "../../assets/images/background/pattern-6.png"
import Progress from "../../assets/images/resource/progress.png"

const Sales = () => {
  const data = useStaticQuery(graphql`
    {
      wordpress {
        detalle(id: "cG9zdDo0Mg==") {
          content
          title
          aditionals {
            benefits {
              description
              title
            }
          }
        }
      }
    }
  `)

  const {
    wordpress: { detalle },
  } = data

  return (
    <section className="progress-section">
      <div
        className="pattern-layer-one"
        style={{ backgroundImage: `url(${Pattern6})` }}
      />
      <div className="auto-container">
        <div className="row clearfix">
          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column ">
              <Tilt className="image titlt" options={{ max: 40 }}>
                <img src={Progress} alt="progress" />
              </Tilt>
            </div>
          </div>
          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column">
              {/* Sec Title */}
              <div className="sec-title">
                <div className="title">Todos los datos en un solo lugar</div>
                <h2>{detalle.title}</h2>
              </div>
              {parser(detalle.content)}
              <div className="blocks-outer">
                {/* Progress Block */}
                {detalle.aditionals.benefits.map(benefit => (
                  <div className="progress-block" key={benefit.title}>
                    <div className="inner-box">
                      <div className="upper-box">
                        <span className="icon flaticon-checked-1" />
                        {benefit.title}
                      </div>
                      <div className="text">{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sales
