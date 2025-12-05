import "./StateCounter.css";

export default function StateCounter({step, OnUpdate}) {
  const handleClick = () => {
    OnUpdate(step);
  };
  return (
    <button className="cnt" onClick={handleClick}>
      <span>{step}</span>
    </button>
  );
}
