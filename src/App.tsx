import "izitoast/dist/js/iziToast.min";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ScrollToTop from "scroll-to-top-react";
import "./App.css";
import { Bewerbung, Home } from "./views";
import { NavBar, Preview } from "./components";
import { buildUrl } from "./helpers";

export const App = () => {
  const baseUrl = import.meta.env.BASE_URL || "/";

  return (
    <div className="App">
      {/* <PreLoader /> */}
      <NavBar />
      <Router basename={baseUrl}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job" element={<Bewerbung />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </Router>
      <ScrollToTop
        displayType="image"
        imageSrc={buildUrl(baseUrl, "/img/arrow-up.png")}
        myClass="scrollToTop"
      />
    </div>
  );
};
