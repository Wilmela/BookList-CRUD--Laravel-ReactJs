import React from "react";
import { Navbar, Form, Table, Footer } from "./components";
import "./App.scss";


const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <div className="wrapper">
          <div className="content">
            <Form />
            <Table />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
