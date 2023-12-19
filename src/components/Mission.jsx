import React from "react";
import skate from "../assets/skate.png";

const Mission = () => {
  return (
    <div className="mission">
      <img src={skate} alt="Picture of a man skateboarding on a beach sidewalk as the syn sets, while wearing headphones." />
      <div className="mission-text">
        <h3>Echo West's mission is to elevate the listening journey with headphones and earbuds that fuse impeccable sound with the essence of California's adventurous spirit.</h3>
      </div>
    </div>
  );
};

export default Mission;
