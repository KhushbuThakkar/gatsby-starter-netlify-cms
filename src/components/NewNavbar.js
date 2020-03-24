import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import logo from '../img/logo.png';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar navbar-brand is-fixed-top"
        role="navigation"
        aria-label="main navigation"
        // style={{ background: 'transparent' }}
      >
        <div className="nav-container navbar-brand">
          <a className="navbar-item main" href="/">
            React Notes
          </a>
          <div className="sub-navbar">
            <span>Developer's handbook</span>
          </div>
          {/* <div
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span>New</span>
            <span></span>
            <span></span>
          </div> */}
        </div>
        {/* <div className="columns navbar-full">
          <div className="column is-10 is-offset-1">
            <a className="navbar-item" href="#">
              React Notes
            </a>
          </div>
        </div> */}
      </nav>
    );
  }
};

export default Navbar;
