import React from "react"
import Pattern1 from "../../assets/images/background/pattern-1.png"
import Pattern2 from "../../assets/images/background/pattern-2.png"
import Pattern3 from "../../assets/images/background/pattern-3.png"
import Icon1 from "../../assets/images/icons/icon-1.png"
import Banner from "../../assets/images/background/banner-2.png"
import Tilt from "react-tilt"

const banner = () => {
  return (
    <section className="banner-section">
      <div
        className="patern-layer-one"
        style={{ backgroundImage: `url(${Pattern1})` }}
      />
      <div
        className="patern-layer-two"
        style={{ backgroundImage: `url(${Pattern2})` }}
      />
      <div
        className="patern-layer-three"
        style={{ backgroundImage: `url(${Pattern3})` }}
      />
      {/* Icons */}
      <div className="icons parallax-scene-1">
        {/* Icon One */}
        <div
          data-depth="0.20"
          className="icon-one parallax-layer"
          style={{ backgroundImage: `url(${Icon1})` }}
        />
      </div>
      <div className="auto-container">
        <div className="row clearfix">
          {/* Content Column */}
          <div className="content-column col-lg-8 col-md-12 col-sm-12">
            <div className="inner-column">
              <h1>Gestiona la relación con tus clientes.</h1>
              <div className="text">
                En la actualidad Ikigai CRM está siendo usada por emprendedores
                y empresas para administrar de manera rápida y efectiva su
                negocio en línea. Con nuestro conjunto completo de soluciones de
                ventas, marketing y soporte, puedes concentrarte en lo que más
                te importa: convertir oportunidades en ventas.
              </div>
              <a
                href="https://calendly.com/ventas-ikigaicrm/consultoria-ikgai-crm?month=2020-10"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn btn-style-two"
              >
                <span className="txt">Obtener una demostración</span>
              </a>
            </div>
          </div>
          {/* Image Column */}
          <div className="image-column col-lg-4 col-md-12 col-sm-12 mt-4">
            <div className="inner-column">
              <Tilt className="image titlt" options={{ max: 10 }}>
                <img src={Banner} alt="banner1" />
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default banner
