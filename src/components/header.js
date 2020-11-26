import { Link } from "gatsby";
import PropTypes from "prop-types";
import useScrollPosition from "@react-hook/window-scroll";
import React, { useState } from "react";
import Logo from "../assets/images/logo-blanco.png";
import WhatsappLink from "./WhatsappLink";

const Header = ({ siteTitle }) => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => setOpenNav((prev) => !prev);

  const scrollPos = useScrollPosition();

  return (
    <header className={`main-header header-style-one ${scrollPos > 100 ? "fixed-header" : ""}`}>
      {/*Header-Upper*/}
      <div className='header-upper'>
        <div className='auto-container'>
          <div className='clearfix header-wrapper'>
            <div className='pull-left logo-box'>
              <div className='logo'>
                <Link to='/'>
                  <img src={Logo} alt='Ikigai-crm' title={siteTitle} />
                </Link>
              </div>
            </div>
            <div className='nav-outer clearfix'>
              {/* Main Menu */}
              <nav className='main-menu navbar-expand-md'>
                <div className='navbar-header'>
                  <button
                    className={`navbar-toggler ${openNav ? "" : "collapsed"}`}
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={toggleNav}
                  >
                    <span className='icon-bar' />
                    <span className='icon-bar' />
                    <span className='icon-bar' />
                  </button>
                </div>
                <div className={`navbar-collapse collapse clearfix ${openNav ? "show" : ""}`} id='navbarSupportedContent'>
                  <ul className='navigation clearfix'>
                    <li>
                      <Link to='/'>Inicio</Link>
                    </li>
                    <li>
                      <Link to='/acerca'>Acerca</Link>
                    </li>
                    <li>
                      <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                      <Link to='/contacto'>Contacto</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className='outer-box'>
                {/* Btn Box */}
                <div className='btn-box'>
                  <WhatsappLink className='btn-style-one theme-btn'>
                    <span className='txt'>Más información</span>
                  </WhatsappLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
