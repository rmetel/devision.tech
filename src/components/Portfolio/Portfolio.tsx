import React from "react";
import { Image } from "~/models";

export const Portfolio: React.FC = () => {
  const images: Image[] = [
    { id: "1", src: "/img/portfolio/thumbnail-1.jpg" },
    { id: "2", src: "/img/portfolio/thumbnail-2.jpg" },
    { id: "3", src: "/img/portfolio/thumbnail-3.jpg" },
    { id: "4", src: "/img/portfolio/thumbnail-4.jpg" },
    { id: "5", src: "/img/portfolio/thumbnail-5.jpg" },
    { id: "6", src: "/img/portfolio/thumbnail-6.jpg" },
  ];

  return (
    <section
      className="portfolio section-padding pb-70 bg-gray"
      data-scroll-index="2"
    >
      <div className="container">
        <div className="row">
          <div className="section-head">
            <h3>Galerie.</h3>
          </div>

          <div className="gallery text-center">
            {images.map((image) => {
              return (
                <div key={image.id} className="col-md-4 col-sm-6 items graphic">
                  <div className="item-img">
                    <img src={image.src} alt="image" />
                    <div className="item-img-overlay">
                      <div className="overlay-info v-middle text-center">
                        <h6 className="sm-titl">GROß-ANSICHT</h6>
                        <div className="icons">
                          <span className="icon link">
                            <a href={image.src}>
                              <i
                                className="fa fa-search-plus"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
