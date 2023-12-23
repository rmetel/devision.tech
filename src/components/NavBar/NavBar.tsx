import React from "react";
import { buildUrl } from "~/helpers";

export const NavBar: React.FC = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const jobUrl = buildUrl(baseUrl, "/job");
  const logoUrl = buildUrl(baseUrl, "/img/logo.png");
  const showMenu = !(baseUrl === "/dev/" && location.pathname === "/");

  return (
    <nav
      className="navbar navbar-default"
      style={{
        background: !showMenu ? "#333" : "",
      }}
    >
      <div className="container">
        <div className="navbar-header">
          {showMenu && (
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
          )}

          {/* Logo fullscreen */}
          <a href={baseUrl}>
            <img src={logoUrl} className="logo-fullscreen" />
          </a>

          <a className="logo" href="#">
            Metzner
          </a>
        </div>

        {showMenu && (
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
                    <a data-scroll-nav="1">Leistungen</a>
                  </li>
                  <li>
                    <a href="#" data-scroll-nav="2">
                      Galerie
                    </a>
                  </li>
                  <li>
                    <a href="#" data-scroll-nav="3">
                      Kontakt
                    </a>
                  </li>
                </>
              ) : (
                <li>
                  <a href={baseUrl}>Home</a>
                </li>
              )}
              <li>
                <a
                  href={jobUrl}
                  className={location.pathname === jobUrl ? "active" : ""}
                >
                  Job
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
