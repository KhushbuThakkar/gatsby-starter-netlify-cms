import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/logo.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';
import linkedin from '../img/social/linkedin.svg';
import website from '../img/social/website.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer ">
        {/* <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div> */}
        <div className="content has-text-centered">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-12 ">
                <section className="menu">
                  <section>
                    <a href="https://www.linkedin.com/in/khushbudev/">
                      <img
                        className="fas fa-lg"
                        src={linkedin}
                        alt="Twitter"
                        style={{ width: '2em', height: '2em', margin: '10px' }}
                      />
                    </a>
                    <a href="https://khushbu.dev">
                      <img
                        className="fas fa-lg"
                        src={website}
                        alt="Twitter"
                        style={{ width: '2em', height: '2em', margin: '10px' }}
                      />
                    </a>
                  </section>

                  <a
                    href="https://khushbu.dev"
                    className="navbar-item main has-text-centered footer-main-header "
                    style={{ justifyContent: 'center' }}
                  >
                    A site by React Developer
                  </a>
                </section>
                {/* <section className="social"> 
                <a title="twitter" href="https://twitter.com">
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="instagram" href="https://instagram.com">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="vimeo" href="https://vimeo.com">
                    <img
                      src={vimeo}
                      alt="Vimeo"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a> 
                {/* </section> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
