import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';
import SocialWidget from '../Widget/SocialWidget';
// import Newsletter from '../Widget/Newsletter';
import IconBoxStyle11 from '../IconBox/IconBoxStyle11';
import Spacing from '../Spacing';

export default function Header({ logoSrc, variant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  const [sideNav, setSideNav] = useState(false);
  // const [searchToggle, setSearchToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`cs_site_header cs_style1 cs_sticky_header ${mobileToggle ? 'cs_mobile_toggle_active' : ''} ${variant} ${isSticky ? 'cs_active_sticky' : ''}`}
      >
        <nav className="blue_color cs_nav" style={{ justifyContent: "center", backgroundColor: "#e6e9ff", width: "100vw" }}>
          <ul className={`${mobileToggle ? 'cs_nav_list cs_active' : 'cs_nav_list'}`}>
            <li><Link to="/appointments">Careers</Link></li>
            <li className="menu-item-has-children justify-end">
              <Link to="#">Partner with us</Link>
              <DropDown>
                <ul>
                  <li><Link to="/partner-with-us/doctors">For Doctors</Link></li>
                  <li><Link to="/partner-with-us/hospitals">For Hospitals</Link></li>
                </ul>
              </DropDown>
            </li>
            <button style={{ backgroundColor: "#2C2F76", border: "none", borderRadius: "20px", color: "white", padding: "0 15px" }}>
              <Link to="find-our-centers">Find a center</Link>
            </button>
          </ul>
        </nav>

        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to="/">
                  <img src={logoSrc} alt="Logo" width={210} />
                </Link>
                <nav className="blue_color cs_nav">
                  <ul className={`${mobileToggle ? 'cs_nav_list cs_active' : 'cs_nav_list'}`}>
                    <li className="cs_nav"><Link to="/">Home</Link></li>
                    <li className="cs_nav"><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Kidney Knowledge Center</Link></li>
                    <li><Link to="/departments">Our Services</Link></li>

                    {/* Mobile-only links */}
                    <li className="your-class"><Link to="/appointments">Careers</Link></li>
                    <li className="menu-item-has-children your-class">
                      <Link to="/partner-with-us">Partner with us</Link>
                      <DropDown>
                        <ul>
                          <li><Link to="/partner-with-us/doctors">For Doctors</Link></li>
                          <li><Link to="/partner-with-us/hospitals">For Hospitals</Link></li>
                        </ul>
                      </DropDown>
                    </li>
                    <button className="your-class" style={{ backgroundColor: "#2C2F76", border: "none", borderRadius: "20px", color: "white", padding: "0 15px" }}>
                      <Link to="find-our-centers">Find a center</Link>
                    </button>

                    <button className='responsive-button'>
                      <Link to="tel:+919862898628">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                          <path fill="#ee2327" d="M311.3 374.7c-8.2-16.9-18.8-29.2-37.1-21.7l-36.1 13.4c-28.9 13.4-43.3 0-57.7-20.1l-64.9-147.8c-8.1-16.9-3.9-32.8 14.4-40.3l50.5-20.1c18.3-7.5 15.4-23.4 7.2-40.3l-43.3-80.6c-8.2-16.9-25-21-43.3-13.5c-36.6 15.2-66.9 38.8-86.5 73.9c-24 42.9-12 102.5-7.2 127.6s21.6 69 43.3 114.2s40.7 80.7 57.7 100.8s57.7 75.1 108.2 87.3c41.4 10 86 1.6 122.6-13.5c18.3-7.5 18.4-23.4 10.2-40.4zm102.2-256.6h-59.1l78.8 78.8H256v39.4h177.2L354.5 315h59.1l98.5-98.5z" />
                        </svg>   98628 98628
                      </Link>
                    </button>
                  </ul>
                  <span className={mobileToggle ? 'cs_menu_toggle cs_toggle_active' : 'cs_menu_toggle'} onClick={() => setMobileToggle(!mobileToggle)}>
                    <span></span>
                  </span>
                </nav>
              </div>

              {/* Sidebar button */}
              <div className="cs_main_header_right">
                <div className="cs_toolbox">
                  <button
                    className="cs_toolbox_btn cs_sidebar_toggle_btn blue_color"
                    type="button"
                    onClick={() => setSideNav(!sideNav)}
                  >
                    <svg
                      width={35}
                      height={30}
                      viewBox="0 0 35 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.483887 2.46544C0.483887 1.10383 1.14618 0 1.96315 0H33.5208C34.3377 0 35 1.10383 35 2.46544C35 3.82708 34.3377 4.93088 33.5208 4.93088H1.96315C1.14618 4.93088 0.483887 3.82708 0.483887 2.46544Z"
                        fill="#2C2F76"
                      />
                      <path
                        d="M0.483887 14.6694C0.483887 13.3074 1.14618 12.2039 1.96315 12.2039H33.5208C34.3377 12.2039 35 13.3074 35 14.6694C35 16.0309 34.3377 17.1348 33.5208 17.1348H1.96315C1.14618 17.1348 0.483887 16.0309 0.483887 14.6694Z"
                        fill="#2C2F76"
                      />
                      <path
                        d="M0.483887 26.6267C0.483887 25.2648 1.14618 24.1613 1.96315 24.1613H33.5208C34.3377 24.1613 35 25.2648 35 26.6267C35 27.9883 34.3377 29.0922 33.5208 29.0922H1.96315C1.14618 29.0922 0.483887 27.9883 0.483887 26.6267Z"
                        fill="#2C2F76"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Component */}
      <div className={`cs_sidenav ${sideNav ? 'active' : ''}`}>
        <div
          className="cs_sidenav_overlay"
          onClick={() => setSideNav(!sideNav)}
        />
        <div className="cs_sidenav_in">
          <button
            className="cs_close"
            type="button"
            onClick={() => setSideNav(!sideNav)}
          >
            <img src="/images/icons/close.svg" alt="Close" />
          </button>
          <div className="cs_logo_box">
            <img src="/images/logo1.png" alt="Logo" />
            <Spacing md="15" />
          </div>
          <Spacing md="35" lg="50" />
          <hr />
          <Spacing md="35" lg="50" />
          <IconBoxStyle11
            title="Phone"
            subTitle="98628 98628"
            iconSrc="/images/contact/icon_1.svg"
          />
          <Spacing md="30" lg="30" />
          <IconBoxStyle11
            title="Email"
            subTitle="support@vituscare.com"
            iconSrc="/images/contact/icon_2.svg"
          />
          <Spacing md="70" lg="50" />
          <hr />
          <Spacing md="70" lg="50" />
          <SocialWidget />
        </div>
      </div>
    </>
  );
}
