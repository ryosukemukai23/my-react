import ForItem from "./ForItem";

export default function ForNest({src}) {
  return (
    <dl>
      {src.map((elem) => (
        <ForItem product={elem} key={elem.id} />
      ))}
    </dl>
  );
}
