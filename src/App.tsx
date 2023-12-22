import "izitoast/dist/js/iziToast.min";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ScrollToTop from "scroll-to-top-react";
import { NavBar } from "~/components";
import { Bewerbung, Home } from "~/views";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      {/* <PreLoader /> */}
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job" element={<Bewerbung />} />
        </Routes>
      </Router>
      <ScrollToTop
        displayType="image"
        imageSrc="img/arrow-up.png"
        myClass="scrollToTop"
      />
    </div>
  );
};
