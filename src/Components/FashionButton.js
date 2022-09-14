import React from "react";
import clothing from "../Data";

const FashionButton = ({ style, setTop, setBottom, setShoes }) => {
  const topArr = clothing.filter((item, index) => {
    if (item.type === "top" && item.dressCode === style.toLowerCase()) {
      return item;
    }
    return false;
  });
  console.log("top ", style.toLowerCase(), " ", topArr);
  const bottomArr = clothing.filter((item, index) => {
    if (item.type === "bottom" && item.dressCode === style.toLowerCase()) {
      return item;
    }
    return false;
  });
  console.log("bottom ", style.toLowerCase(), " ", bottomArr);
  const shoeArr = clothing.filter((item, index) => {
    if (item.type === "shoes" && item.dressCode === style.toLowerCase()) {
      return item;
    }
    return false;
  });
  console.log("shoes ", style.toLowerCase(), " ", shoeArr);
  const randomClothArrIndex = (clothingArr) => {
    return Math.floor(clothingArr.length * Math.random());
  };
  return (
    <>
      <button
        className="FashionButton"
        onClick={() => {
          setTop(topArr[randomClothArrIndex(topArr)].imageUrl);
          setBottom(bottomArr[randomClothArrIndex(bottomArr)].imageUrl);
          setShoes(shoeArr[randomClothArrIndex(shoeArr)].imageUrl);
        }}
      >
        {style}
      </button>
    </>
  );
};

export default FashionButton;
