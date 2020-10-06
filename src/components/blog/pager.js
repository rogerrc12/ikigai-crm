import React from "react";
import { Link } from "gatsby";

const Pager = ({ pageContext }) => {
  const { nextPagePath, previousPagePath } = pageContext;

  return (
    <div className="blog-more-projects clearfix">
      <div className="pull-left">
        {previousPagePath && (
          <Link to={previousPagePath} className="more" rel="prev">
            <span className="arrow fa fa-arrow-left" /> &nbsp; Anterior
          </Link>
        )}
      </div>
      <div className="pull-right">
        {nextPagePath && (
          <Link to={nextPagePath} className="more">
            Siguiente &nbsp; <span className="arrow fa fa-arrow-right" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pager;
