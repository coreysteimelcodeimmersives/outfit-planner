import React from "react";
import clothing from "../Data";

const FashionButton = ({ style, setTop, setBottom, setShoes }) => {
  const topArr = clothing.filter((item, index) => {
    if (item.type === "top" && item.dressCode === style.toLowerCase()) {
      return item;
    }
    return false;
  });
  const bottomArr = clothing.filter((item, index) => {
    if (item.type === "bottom" && item.dressCode === style.toLowerCase()) {
      return item;
    }
    return false;
  });
  const shoeArr = clothing.filter((item, index) => {
    if (item.type === "shoes" && item.dressCode === style.toLowerCase()) {
      return item;
    }
    return false;
  });
  const randomClothArrIndex = (clothingArr) => {
    return Math.floor(clothingArr.length * Math.random());
  };
  return (
    <>
      <button
        className="FashionButton"
        onClick={() => {
          setTop(topArr[randomClothArrIndex(topArr)].imageUrl);
          console.log(
            "Top dressCode",
            topArr[randomClothArrIndex(topArr)].dressCode
          );
          setBottom(bottomArr[randomClothArrIndex(bottomArr)].imageUrl);
          console.log(
            "Bottom dressCode",
            bottomArr[randomClothArrIndex(bottomArr)].dressCode
          );
          setShoes(shoeArr[randomClothArrIndex(shoeArr)].imageUrl);
          console.log(
            "Shoes dressCode",
            shoeArr[randomClothArrIndex(shoeArr)].dressCode
          );
        }}
      >
        {style}
      </button>
    </>
  );
};

export default FashionButton;
