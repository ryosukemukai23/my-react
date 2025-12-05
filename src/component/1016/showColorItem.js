export default function ShowColorItem({color, isSelected, handleColorClick}) {
  return (
    <li style={{backgroundColor: isSelected ? color : "transparent"}}>
      {color}
      <button onClick={() => handleColorClick(color)}>Select</button>
    </li>
  );
}
