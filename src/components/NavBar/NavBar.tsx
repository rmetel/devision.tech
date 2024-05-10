import React from "react";

export const NavBar: React.FC = () => {
  const baseUrl = "/";

  return (
    <nav className="navbar navbar-default">
      <div className="container">
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

          <a className="logo" href="#">
            Devision.tech
          </a>
        </div>

        <div className="collapse navbar-collapse" id="nav-icon-collapse">
          <ul className="nav navbar-nav navbar-right">
            {location.pathname === baseUrl ? (
              <>
                <li>
                  <a href="#" data-scroll-nav="0" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a data-scroll-nav="1">Apps</a>
                </li>
                <li>
                  <a href="#" data-scroll-nav="3">
                    Contact
                  </a>
                </li>
              </>
            ) : (
              <li>
                <a href={baseUrl}>Home</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
