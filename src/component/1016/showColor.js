import React, {useState} from "react";
import ShowColorItem from "./showColorItem";

export default function ShowColor({colors}) {
  const [selectedColor, setSelectedColor] = useState("pink");

  const handleColorClick = (displayColor) => {
    setSelectedColor(displayColor);
  };

  return (
    <ul>
      {colors.map((color, index) => (
        <ShowColorItem
          key={index}
          color={color.color}
          isSelected={selectedColor === color.color}
          handleColorClick={handleColorClick}
        />
      ))}
    </ul>
  );
}
