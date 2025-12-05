// import FavoriteAnimalListItem from "./FavoriteAnimalListItem";

// export default function FavoriteAnimalList({src}) {
//   const sortedData = src.sort((m, n) => m.age - n.age);
//   const sortedCatTypeData = src.filter((val) => val.type === "cat");
//   const sortedDogTypeData = src.filter((val) => val.type === "dog");
//   const sortedBothTypeData = src.filter((val) => val.type === "both");
//   return (
//     <>
//       <h2>全員のリスト（年齢順）</h2>
//       <FavoriteAnimalListItem data={sortedData} />
//       <h2>猫のリスト</h2>
//       <FavoriteAnimalListItem data={sortedCatTypeData} />
//       <h2>犬のリスト</h2>
//       <FavoriteAnimalListItem data={sortedDogTypeData} />
//       <h2>猫と犬のリスト</h2>
//       <FavoriteAnimalListItem data={sortedBothTypeData} />
//     </>
//   );
// }

import FavoriteAnimalListItem from "./FavoriteAnimalListItem";

export default function FavoriteAnimalList({src}) {
  return (
    <>
      <h2>全員のリスト（年齢順）</h2>
      <FavoriteAnimalListItem data={src} />
      <h2>猫のリスト</h2>
      <FavoriteAnimalListItem data={src} type="cat" />
      <h2>犬のリスト</h2>
      <FavoriteAnimalListItem data={src} type="dog" />
      <h2>猫と犬のリスト</h2>
      <FavoriteAnimalListItem data={src} type="both" />
    </>
  );
}
