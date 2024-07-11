import React from "react";
import Marquee from "react-fast-marquee";
import "./marqu.css";
import NewG from "../../assets/new.gif";

const Marqu = () => {
  return (
    <div className="marq">
      <Marquee>
        <img src={NewG} style={{ height: "1.6rem" }} />
        Welcome to ProjectNest ! &nbsp; Explore a wide range of innovative
        software and hardware projects. &nbsp; &nbsp; &nbsp;
        <img src={NewG} style={{ height: "1.6rem" }} />
        Discover, share, and collaborate on amazing projects today!&nbsp; &nbsp;
        &nbsp;
      </Marquee>
    </div>
  );
};

export default Marqu;
