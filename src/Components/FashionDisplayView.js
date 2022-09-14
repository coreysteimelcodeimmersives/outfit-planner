import React from "react";

const FashionDisplayView = ({ type, clothingImg }) => {
  return (
    <>
      <div className="StyleText">{type}</div>
      <img
        src={
          clothingImg === ""
            ? "http://www.clipartbest.com/cliparts/Rid/67g/Rid67gEpT.png"
            : clothingImg
        }
        className="ClothingImg"
        alt=""
      ></img>
    </>
  );
};

export default FashionDisplayView;
