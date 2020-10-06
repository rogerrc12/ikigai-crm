import React from "react"
import { Link } from "gatsby"
import FooterLogo from "../assets/images/logo-negro.png"

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="pattern-layer" />
      <div className="auto-container">
        {/* Widgets Section */}
        <div className="widgets-section">
          <div className="row clearfix">
            {/* Big Column */}
            <div className="big-column col-12">
              <div className="row clearfix">
                {/*Footer Column*/}
                <div className="footer-column col-lg-4 col-md-6 col-sm-12">
                  <div className="footer-widget logo-widget">
                    <div className="logo">
                      <Link to="/">
                        <img src={FooterLogo} alt="footer-logo" />
                      </Link>
                    </div>
                    <div className="social-box">
                      <span>Social</span>
                      <a
                        href="https://www.facebook.com/Ikigaicrm/ "
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                      <a
                        href="https://www.instagram.com/ikigaicrm/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                      <a
                        href="https://www.linkedin.com/showcase/ikigaicrm/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa fa-linkedin" />
                      </a>
                      <a
                        href="https://twitter.com/ikigaicrm"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa fa-twitter" />
                      </a>
                    </div>
                  </div>
                </div>
                {/*Footer Column*/}
                <div className="footer-column col-lg-4 col-md-6 col-sm-12">
                  <div className="footer-widget links-widget">
                    <h5>Menú rápido</h5>
                    <ul className="list-link">
                      <li>
                        <Link to="/acerca">Acerca</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/contacto">Contacto</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*Footer Column*/}
                <div className="footer-column col-lg-4 col-md-6 col-sm-12">
                  <div className="footer-widget support-widget">
                    <h5>Contacto</h5>
                    <ul>
                      <li>
                        Obten ayuda para elegir cualquiera de nuestros
                        servicios. Llegamos a toda America Latina, USA y España.
                      </li>
                      <li>
                        Atención inmediata en nuestros canales: <br />
                        <a href="mailto:info@ikigaicrm.net">
                          info@ikigaicrm.net
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2020 Ikigai Marketer SAC - Desarrollado por Roger Rengifo
        </div>
      </div>
    </footer>
  )
}

export default Footer
