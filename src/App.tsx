import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "izitoast/dist/js/iziToast.min";
import "./App.css";
import { Home } from "~/views";
import { NavBar, PreLoader } from "~/components";

export const App = () => {
  return (
    <div className="App">
      <PreLoader />
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};
