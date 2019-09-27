import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
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
          })
      }
    )
  }

  render() {
    return (
        <nav className="navbar is-transparent is-fixed  " role="navigation" aria-label="main navigation">
    
     
    <div class="columns navbar-full">
  <div class="column is-10 is-offset-1">
     <a className="navbar-item" href="#">
      React Notes
    </a>
    

     
    </div>
  </div>

  
</nav>
    )
  }
}

export default Navbar
