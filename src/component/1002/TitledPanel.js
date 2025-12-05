export default function TitledPanel({children}) {
  // key属性でtitle/bodyを探す
  const title = children.find((elm) => elm.key === "title");
  const body = children.find((elm) => elm.key === "body");

  return (
    <div
      style={{
        margin: 50,
        padding: 20,
        border: "1px solid #ccc",
        width: "fit-content",
        boxShadow: "3px 3px 3px #ccc",
        backgroundColor: "white",
      }}
    >
      {title}
      <hr />
      {body}
    </div>
  );
}
