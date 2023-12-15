import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container text-center">
        <div className="row">
          <h6 style={{ color: "#999", fontSize: 14 }}>
            Metzner-Gruppe 2023 &copy; Alle Rechte vorbehalten
          </h6>
          <br />
          <a href="#">
            <h6 style={{ color: "#999", fontSize: 14 }}>Impressum</h6>
          </a>
        </div>
      </div>
    </footer>
  );
};
