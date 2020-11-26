import React from "react";
import WhatsappLink from "../WhatsappLink";

import Pattern17 from "../../assets/images/background/pattern-17.png";
import Pattern18 from "../../assets/images/background/pattern-18.png";
import Pattern14 from "../../assets/images/background/pattern-14.png";
import Business2 from "../../assets/images/resource/business-2.png";

const Story = () => {
  return (
    <section className='business-section'>
      <div className='auto-container'>
        <div className='row clearfix'>
          {/* Content Column */}
          <div className='content-column col-lg-6 col-md-12 col-sm-12'>
            <div className='inner-column'>
              <h2>Toda la información de sus clientes en un solo lugar.</h2>
              <div className='text'>
                Ikigai CRM le permitirá a su equipo interactuar eficazmente con sus clientes y gestionar la relación con una visión integral de todos
                los procesos de ventas, marketing y soporte.
                <br />
                Nuestra solución se basa en las mejores prácticas de Vtiger CRM adaptadas para distintos tipos de negocios y customizada según sus
                necesidades específicas.
              </div>
              <a
                className='theme-btn btn-style-four'
                href='https://calendly.com/ventas-ikigaicrm/consultoria-ikgai-crm?month=2020-10'
                target='_blank'
                rel='noopener noreferrer'
              >
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
                <img src={Business2} alt='business' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
