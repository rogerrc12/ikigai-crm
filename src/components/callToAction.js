import React from "react"
import WhatsappLink from "../components/WhatsappLink"

const CallToAction = () => {
  return (
    <section className="call-to-action-section">
      <div className="auto-container">
        <div className="inner-container">
          <h4>Quiero aumentar mis ventas, quiero fidelizar mis clientes</h4>
          <WhatsappLink className="theme-btn btn-style-four">
            <span className="txt">Solicitar demo</span>
          </WhatsappLink>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
