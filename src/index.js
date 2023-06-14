import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div className='App'>
      <Nav />
      <App />
      <Footer />
    </div>
  </React.StrictMode>,
);
