export default function EventObj() {
  const handleClick = (e) => console.log(e);

  return (
    <div>
      <button onClick={handleClick}>クリック</button>
    </div>
  );
}
