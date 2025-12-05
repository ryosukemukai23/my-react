// import "./EventPropagation.css";

// export default function EventPropagation({}) {
//   const handleParent = () => alert("#parent run...");
//   const handleMy = () => alert("#my run...");
//   const handleChild = () => alert("#child run...");
//   return (
//     <div id="parent" onClick={handleParent}>
//       親要素
//       <div id="my" onClick={handleMy}>
//         子要素
//         <a href="https://google.com" id="child" onClick={handleChild}>
//           孫要素
//         </a>
//       </div>
//     </div>
//   );
// }

// import "./EventPropagation.css";

// export default function EventPropagation({}) {
//   const handleParent = () => alert("#parent run...");
//   const handleMy = () => alert("#my run...");
//   const handleChild = () => alert("#child run...");
//   return (
//     <div id="parent" onClickCapture={handleParent}>
//       親要素
//       <div id="my" onClickCapture={handleMy}>
//         子要素
//         <a href="https://google.com" id="child" onClickCapture={handleChild}>
//           孫要素
//         </a>
//       </div>
//     </div>
//   );
// }

// import "./EventPropagation.css";

// export default function EventPropagation() {
//   const handleParent = () => alert("#parent run...");
//   const handleMy = () => alert("#my run...");
//   const handleChild = (e) => {
//     e.stopPropagation(); // ここで上への伝播を止める
//     alert("#child run...");
//   };

//   return (
//     <div id="parent" onClick={handleParent}>
//       親要素
//       <div id="my" onClick={handleMy}>
//         子要素
//         <a href="https://google.com" id="child" onClick={handleChild}>
//           孫要素
//         </a>
//       </div>
//     </div>
//   );
// }

import "./EventPropagation.css";

export default function EventPropagation() {
  const handleParent = () => alert("#parent run...");
  const handleMy = () => alert("#my run...");
  const handleChild = (e) => {
    e.preventDefault(); // ここで上への伝播を止める
    alert("#child run...");
  };

  return (
    <div id="parent" onClick={handleParent}>
      親要素
      <div id="my" onClick={handleMy}>
        子要素
        <a href="https://google.com" id="child" onClick={handleChild}>
          孫要素
        </a>
      </div>
    </div>
  );
}
