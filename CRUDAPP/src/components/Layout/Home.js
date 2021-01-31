/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "./layout.css";

import picture from "./welcomepage.jpg";

function Home() {
  return (
    <div className="welcome-pic">
      <img src={picture} alt="picture" />
      <section className = "Clock">
       {/* Display clock  */}
      <iframe src="http://free.timeanddate.com/clock/i7nogm21/n127/szw110/szh110/hoc000/hbw2/hfceee/cf100/hncccc/fdi76/mqc000/mql10/mqw4/mqd98/mhc000/mhl10/mhw4/mhd98/mmc000/mml10/mmw1/mmd98" frameborder="0" width="110" height="110"></iframe>
      </section>
      
    </div>
  );
}

export default Home;
