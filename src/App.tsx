import "izitoast/dist/js/iziToast.min";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NavBar, PreLoader } from "~/components";
import { Bewerbung, Home } from "~/views";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <PreLoader />
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Bewerbung />} />
        </Routes>
      </Router>
    </div>
  );
};
