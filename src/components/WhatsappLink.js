import React from "react";

const WhatsappLink = (props) => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=51917685797&text=Hola!,%20quisiera%20informaci%C3%B3n%20sobre%20Ikigai%20CRM"
      target="_blank"
      rel="noopener noreferrer"
      className={props.className || ""}
    >
      {props.children}
    </a>
  );
};

export default WhatsappLink;
