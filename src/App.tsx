import "izitoast/dist/js/iziToast.min";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ScrollToTop from "scroll-to-top-react";
import "./App.css";
import { Home } from "./views";
import { NavBar } from "./components";
import { buildUrl } from "./helpers";

export const App = () => {
  const baseUrl = /* import.meta.env.BASE_URL || */ "/";

  return (
    <div className="App">
      {/* <PreLoader /> */}
      <NavBar />
      <Router basename={baseUrl}>
        <Routes>
          <Route path="/" element={<Home />} />
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
