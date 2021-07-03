import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        background: `url("./image/bgImage.jpg")`,
      }}>
      <div className='banner--fadeBottom'></div>
    </header>
  );
}

export default Banner;
