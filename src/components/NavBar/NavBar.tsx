import React from "react";

export const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#nav-icon-collapse"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <img src="/img/logo.png" className="logo-fullscreen" />

          <a className="logo" href="#">
            Metzner
          </a>
        </div>

        {/* Collect the nav links, and other content for toggling */}
        <div className="collapse navbar-collapse" id="nav-icon-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#" data-scroll-nav="0" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#" data-scroll-nav="1">
                Leistungen
              </a>
            </li>
            <li>
              <a href="#" data-scroll-nav="2">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" data-scroll-nav="3">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
