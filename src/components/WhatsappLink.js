import React from "react";

const WhatsappLink = (props) => {
  return (
    <a href='https://m.me/Ikigaicrm' target='_blank' rel='noopener noreferrer' className={props.className || ""}>
      {props.children}
    </a>
  );
};

export default WhatsappLink;
