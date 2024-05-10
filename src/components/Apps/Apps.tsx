import React from "react";

export const Apps: React.FC = () => {
  return (
    <section
      className="services section-padding bg-gray text-center pb-70"
      data-scroll-index="1"
    >
      <div className="container">
        <div className="section-head">
          <h3>Apps.</h3>
        </div>
        <div
          className="row wrapper"
          style={{ display: "flex", alignItems: "stretch" }}
        >
          <div className="col-xs-12 col-md-4">
            <div className="item">
              <a href="/todo-app">
                <span className="icon">
                  <i className="fa fa-list" aria-hidden="true"></i>
                </span>
                <h6>Todo-App</h6>
              </a>
              <p>
                Simple Todo-App with modern tech stack (React, NodeJS, Nginx,
                Docker)
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="item">
              <a href="/wine-app">
                <span className="icon">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </span>
                <h6>Wine-App</h6>
              </a>
              <p>
                Demo Wine-shop with modern tech stack (React, NodeJS, Nginx,
                Docker)
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-4">
            <div className="item">
              <span className="icon">
                <i className="fa fa-tree" aria-hidden="true"></i>
              </span>
              <h6>Free slot..</h6>
              <p>Nothing here yet...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
