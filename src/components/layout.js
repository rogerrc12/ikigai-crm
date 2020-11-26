/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";
import Whatsapp from "./whatsapp";
import SocialIcons from "./SocialMediaButtons";
import "../assets/css/font-awesome.css";
import "../assets/css/flaticon.css";
import "../assets/css/bootstrap.css";
import "../assets/css/main.css";
import "../assets/css/responsive.css";
import "../assets/css/custom.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className='page-wrapper'>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
      <Whatsapp />
      <SocialIcons />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
