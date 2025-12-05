// export default function MyHello(props) {
//   return (
//     <div>
//       <h1>こんにちは{props.name}さん！</h1>
//     </div>
//   );
// }

// export default function MyHello({name, age}) {
//   return (
//     <div>
//       <h1>
//         こんにちは{name}さん！ {age}歳ですね！
//       </h1>
//     </div>
//   );
// }

export default function MyHello({name = "名無しさん", age}) {
  return (
    <div>
      <h1>
        こんにちは{name}さん！ {age}歳ですね！
      </h1>
    </div>
  );
}
