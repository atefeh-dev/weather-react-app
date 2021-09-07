/** @format */

import "./Style/App.css";
import React from "react";
import Search from "./components/Search";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div>
      <div className="container-fluid border mt-5">
        <Search />
      </div>
      <Footer />
    </div>
  );
};
export default App;
