import React from "react";

export const Numbers: React.FC = () => {
  return (
    <div className="numbers section-padding text-center pb-70">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="item">
              <span className="icon"><i className="fa fa-truck" aria-hidden="true"></i></span>
              <h3><span className="counter">24</span>&nbsp;Std.</h3>
              <p>Im Einsatz</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item">
              <span className="icon"><i className="fa fa-thumbs-up" aria-hidden="true"></i></span>
              <h3><span className="counter">100</span>&nbsp;%</h3>
              <p>Verlässlichkeit</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item">
              <span className="icon"><i className="fa fa-industry" aria-hidden="true"></i></span>
              <h3><span className="counter">520</span></h3>
              <p>Installierte Anlagen</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="item">
              <span className="icon"><i className="fa fa-users" aria-hidden="true"></i></span>
              <h3 className="counter">340</h3>
              <p>Zufriedene Kunden</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
