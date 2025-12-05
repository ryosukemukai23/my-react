export const MyButton = ({id, handleClick, children}) => {
  console.log(`MyButton is called ${id}`);
  return <button onClick={handleClick}>{children}</button>;
};

export const MyCounter = ({id, count}) => {
  console.log(`MyCounter is called ${id}`);
  return <p>{count}</p>;
};
