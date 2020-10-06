import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import emailjs from "emailjs-com"

const ContactForm = () => {
  const data = useStaticQuery(graphql`
    {
      wordpress {
        contactoBy(slug: "informacion") {
          additional {
            address
            email
            phoneNumber
          }
        }
      }
    }
  `)

  const [formMsg, setFormMsg] = useState(null)

  const sendEmail = async e => {
    e.persist()
    e.preventDefault()

    try {
      const res = await emailjs.sendForm(
        "service_8nzpth1",
        "template_k392thj",
        e.target,
        "user_TKc0ClE1BhmlSxfjJs3Dp"
      )
      console.log(res.text)
      e.target.reset()
      setFormMsg("Mensaje enviado correctamente! Gracias por contactarnos.")
    } catch (error) {
      console.log(error.text)
      setFormMsg(
        "Parece que ha ocurrido un error!. Por favor intenta más tarde."
      )
    }
  }

  const {
    wordpress: {
      contactoBy: { additional: contactInfo },
    },
  } = data

  return (
    <section className="contact-page-section">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Form Column */}
          <div className="form-column col-lg-8 col-md-12 col-sm-12">
            <div className="inner-column">
              {/* Contact Form */}
              <div className="contact-form">
                <form onSubmit={sendEmail} id="contact-form">
                  <div className="row clearfix">
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <input
                        type="text"
                        name="name"
                        placeholder="Nombre completo"
                        required
                      />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="form-group col-lg-6 col-md-6 col-sm-12">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Teléfono"
                        required
                      />
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <textarea
                        name="message"
                        placeholder="Mensaje"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                      <button
                        className="theme-btn btn-style-four"
                        type="submit"
                        name="submit-form"
                        disabled={formMsg}
                      >
                        <span className="txt">Enviar</span>
                      </button>
                    </div>
                  </div>
                </form>
                <p className="form-msg">{formMsg}</p>
              </div>
            </div>
          </div>
          {/* Info Column */}
          <div className="info-column col-lg-4 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="content">
                <h5>Puedes contactarnos</h5>
                <ul>
                  <li>
                    <span>Email:</span>
                    <a href={`mailto:${contactInfo.email}`}>
                      {contactInfo.email}
                    </a>
                  </li>
                  <li>
                    <span>
                      <a href="tel:+88-0-682648101">
                        {contactInfo.phoneNumber}
                      </a>
                    </span>
                  </li>
                  <li>
                    <span>Dirección</span>
                    {contactInfo.address}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
