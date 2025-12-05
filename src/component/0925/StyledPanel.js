export default function StyledPanel({children}) {
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
      {children}
    </div>
  );
}
