import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container text-center">
        <div className="row">
          <h6 style={{ color: "#999", fontSize: 14 }}>
            Devision.tech 2024 &copy; All rights reserved
          </h6>
          {/* <br />
          <a href="#">
            <h6 style={{ color: "#999", fontSize: 14 }}>Impressum</h6>
          </a> */}
        </div>
      </div>
    </footer>
  );
};
