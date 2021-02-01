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
       <iframe src="http://free.timeanddate.com/clock/i7nr23ks/n127/szw210/szh210/hbw0/hfc000/cf100/hgr0/fav0/fiv0/mqcfff/mql15/mqw4/mqd94/mhcfff/mhl15/mhw4/mhd94/mmv0/hhcbbb/hmcddd/hsceee" frameborder="0" width="210" height="210"></iframe>
      </section>
    </div>
  );
}

export default Home;
