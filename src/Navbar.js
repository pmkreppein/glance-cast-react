import React, { Component } from 'react'

 class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation" >
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
     Glancecast
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Weather for Your Location
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Cities
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            New York
          </a>
          <a className="navbar-item">
            Boston
          </a>
          <a className="navbar-item">
            Washington DC
          </a>
          <a className="navbar-item">
            Denver
          </a>
          <a className="navbar-item">
            Louisville, KY
          </a>
          <a className="navbar-item">
            Kansas City, MO
          </a>
          <a className="navbar-item">
            Fairbanks, AK
          </a>
          <a className="navbar-item">
            Honolulu, HI
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Home</strong>
          </a>

          <a className="button is-light">
            Metric Mode: Off
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar;
