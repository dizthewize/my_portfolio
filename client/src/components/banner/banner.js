import React from 'react';

const Banner = () => (
  <section id="wrapped">
    <div className="bottom layer">
      <div className="content-wrapped">
        <div className="content-body">
          <h1>Martez</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit placeat, in fugiat saepe autem minus!</p>
        </div>

        <img src="img/martez_edit.jpg" alt=""/>
      </div>
    </div>

    <div className="top layer">
      <div className="content-wrapped">
        <div className="content-body">
          <h1 className="unique-text">Martez</h1>
          <p className="unique-text">Web Developer</p>
        </div>

        <img src="img/martez.jpg" alt=""/>
      </div>
    </div>

    <div className="handle"></div>
  </section>
);

export default Banner;
