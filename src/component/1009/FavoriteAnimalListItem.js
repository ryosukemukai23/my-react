export default function FavoriteAnimalListItem({data, type}) {
  const sortedData = type
    ? data.filter((val) => val.type === type).sort((m, n) => m.age - n.age)
    : data.sort((m, n) => m.age - n.age);

  return (
    <ul>
      {sortedData.map((val) => (
        <li key={val.id}>
          名前：{val.name}, 年齢：{val.age}, 種類：{val.type}
        </li>
      ))}
    </ul>
  );
}
