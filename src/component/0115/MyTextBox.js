// import {forwardRef} from "react";

// const MyTextBox = forwardRef(({label}, ref) => {
//   return (
//     <label>
//       {label}
//       <input type="text" size="20" ref={ref} />
//     </label>
//   );
// });

// export default MyTextBox;

import {forwardRef, useImperativeHandle, useRef} from "react";

const MyTextBox = forwardRef(({label}, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));

  return (
    <label>
      {label}
      <input type="text" size="20" ref={inputRef} />
    </label>
  );
});

export default MyTextBox; // ←これが必須！
