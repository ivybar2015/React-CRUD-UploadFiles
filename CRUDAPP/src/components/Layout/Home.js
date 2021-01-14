/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "./layout.css";

import picture from "./welcomepage.jpg";

function Home() {
  return (
    <div className="welcome-pic">
      <img src={picture} alt="picture" />
    </div>
  );
}

export default Home;
