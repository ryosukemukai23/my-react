// export default function MyButton({
//   primary = false,
//   backgroundColor = null,
//   size = "medium",
//   label = "Button",
//   ...props
// }) {
//   const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
//   const sizeClass = `storybook-button--${size}`;

//   return (
//     <button
//       type="button"
//       className={["storybook-button", mode, sizeClass].join(" ")}
//       style={backgroundColor ? {backgroundColor} : {}}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// }

// import PropTypes from "prop-types";

// export default function MyButton({
//   primary = false,
//   backgroundColor = null,
//   size = "medium",
//   label = "Button",
//   ...props
// }) {
//   const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
//   const sizeClass = `storybook-button--${size}`;

//   return (
//     <button
//       type="button"
//       className={["storybook-button", mode, sizeClass].join(" ")}
//       style={backgroundColor ? {backgroundColor} : {}}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// }

// MyButton.propTypes = {
//   primary: PropTypes.bool,
//   backgroundColor: PropTypes.string,
//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   label: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
// };

// export default function MyButton({
//   primary = false,
//   backgroundColor = null,
//   size = "medium",
//   label = "Button",
//   ...props
// }) {
//   const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
//   const sizeClass = `storybook-button--${size}`;

//   return (
//     <button
//       type="button"
//       className={["storybook-button", mode, sizeClass].join(" ")}
//       style={backgroundColor ? {backgroundColor} : {}}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// }

import PropTypes from "prop-types";

export default function MyButton({
  primary = false,
  backgroundColor = null,
  size = "medium",
  label = "Button",
  handleClick,
  ...props
}) {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  const sizeClass = `storybook-button--${size}`;

  return (
    <button
      type="button"
      className={["storybook-button", mode, sizeClass].join(" ")}
      style={backgroundColor ? {backgroundColor} : {}}
      onClick={handleClick}
      {...props}
    >
      {label}
    </button>
  );
}

MyButton.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
