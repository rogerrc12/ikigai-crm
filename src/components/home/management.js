import React from "react"
import Tilt from "react-tilt"
import Pattern9 from "../../assets/images/background/pattern-9.png"
import CrmImg from "../../assets/images/resource/crm.png"
import WhatsappLink from "../WhatsappLink"

const Management = () => {
  return (
    <section className="management-section">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Content Column */}
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="title">CRM de código abierto</div>
              <h2>Gestión simplificada del marketing</h2>
              <div className="text">
                <p>
                  Automatice su estrategia de marketing para capturar,
                  interactuar y comprender a sus clientes potenciales: capte
                  leads desde sus formularios web personalizados, genere
                  campañas de email marketing, integre con las principales redes
                  sociales e incorpore sus ventas desde su ecommerce.
                </p>
                <p>¡Automatiza tus ventas, ahora vender es más fácil!</p>
              </div>
              <a
                href="https://calendly.com/ventas-ikigaicrm/consultoria-ikgai-crm?month=2020-10"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn btn-style-three"
              >
                <span className="txt">Obtener demostración</span>
              </a>
            </div>
          </div>
          {/* Image Column */}
          <div className="image-column col-lg-5 col-md-12 col-sm-12">
            <div className="inner-column">
              <div
                className="patern-layer-one"
                style={{ backgroundImage: `url(${Pattern9})` }}
              />
              <Tilt className="image titlt" options={{ max: 40 }}>
                <img src={CrmImg} alt="crm" />
                <div className="crm-box">
                  <h3>
                    CRM Growth<span>210</span>
                  </h3>
                  <i className="icon flaticon-open-box" />
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
      {/*Waves Container*/}
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x={48}
              y={0}
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x={48}
              y={3}
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x={48}
              y={5}
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
          </g>
        </svg>
      </div>
      {/*Waves end*/}
    </section>
  )
}

export default Management
