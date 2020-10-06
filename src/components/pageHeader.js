import React from "react";
import pageTitle from "../assets/images/background/page-title.png";
import Icon from "../assets/images/icons/icon-7.png";

const PageHeader = ({ title }) => {
  return (
    <div className="page-title">
      <div className="icon-one" style={{ backgroundImage: `url(${Icon})` }} />
      <div className="auto-container">
        <div className="clearfix">
          <div className="pull-left">
            <h2>{title}</h2>
          </div>
          <div className="pull-right">
            <div className="image">
              <img src={pageTitle} alt="title" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
