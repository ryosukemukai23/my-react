// import {useState} from "react";
// import "./colorGeneratorEvent.css";

// export default function ColorGeneratorEvent() {
//   const [color, setColor] = useState("pink");
//   const [opacity, setOpacity] = useState(1);
//   const [selectedOpacity, setSelectedOpacity] = useState(1);
//   const [pointPosition, setPointPosition] = useState(200);
//   const [selectedPointPosition, setSelectedPointPosition] = useState(200);
//   const [isSelected, setIsSelected] = useState(false);

//   const handleClickColor = (e) => {
//     setColor(e.target.id);
//   };

//   const handleMouseMove = (e) => {
//     if (isSelected) return;
//     const position = e.nativeEvent.offsetX;
//     setOpacity(position / 400);
//     setPointPosition(position);
//   };

//   const handleClickSelect = (e) => {
//     const position = e.nativeEvent.offsetX;
//     setSelectedOpacity(position / 400);
//     setSelectedPointPosition(position);
//     setIsSelected(!isSelected);
//   };

//   return (
//     <>
//       <div
//         className={`color-box ${color}`}
//         style={{
//           opacity: isSelected ? selectedOpacity : opacity,
//         }}
//       ></div>
//       <button id="pink" type="button" onClick={handleClickColor}>
//         ピンク
//       </button>
//       <button id="skyblue" type="button" onClick={handleClickColor}>
//         水色
//       </button>
//       <button id="lime" type="button" onClick={handleClickColor}>
//         ライムグリーン
//       </button>
//       <button id="lavender" type="button" onClick={handleClickColor}>
//         ラベンダー
//       </button>
//       <p>以下のバーで不透明度を調整、クリックすると固定され、もう一度クリックで固定が解除されます。</p>
//       <div className="generator-box" onMouseMove={handleMouseMove} onClick={handleClickSelect}>
//         <span className="mouse-point" style={{left: isSelected ? selectedPointPosition : pointPosition}}></span>
//       </div>
//     </>
//   );
// }
import {useState} from "react";
import "./colorGeneratorEvent.css";

export default function ColorGeneratorEvent() {
  const [color, setColor] = useState("pink");
  const [opacity, setOpacity] = useState(1);
  const [selectedOpacity, setSelectedOpacity] = useState(1);
  const [pointPosition, setPointPosition] = useState("100%");
  const [selectedPointPosition, setSelectedPointPosition] = useState("100%");
  const [isSelected, setIsSelected] = useState(false);

  const handleClickColor = (e) => {
    setColor(e.target.value);
  };

  const handleMouseMove = (e) => {
    if (isSelected) return;
    const position = e.nativeEvent.offsetX;
    const varWidth = e.target.clientWidth;
    setOpacity(position / varWidth);
    setPointPosition(`${(position / varWidth) * 100}%`);
  };

  const handleClickSelect = (e) => {
    const position = e.nativeEvent.offsetX;
    const varWidth = e.target.clientWidth;
    setSelectedOpacity(position / varWidth);
    setSelectedPointPosition(`${(position / varWidth) * 100}%`);
    setIsSelected(!isSelected);
  };

  return (
    <>
      <div
        className={`color-box ${color}`}
        style={{
          opacity: isSelected ? selectedOpacity : opacity,
        }}
      ></div>
      <select onChange={handleClickColor}>
        <option value="pink">ピンク</option>
        <option value="skyblue">スカイブルー</option>
        <option value="lime">ライムグリーン</option>
        <option value="lavender">ラベンダー</option>
      </select>
      <p>以下のバーで不透明度を調整、クリックすると固定され、もう一度クリックで固定が解除されます。</p>
      <div className="generator-box" onMouseMove={handleMouseMove} onClick={handleClickSelect}>
        <span className="mouse-point" style={{left: isSelected ? selectedPointPosition : pointPosition}}></span>
      </div>
    </>
  );
}
