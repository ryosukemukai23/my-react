import React from "react";

export default function ListTemplate({src, render}) {
  return (
    <dl>
      {src.map((elm) => (
        <React.Fragment key={elm.id}>{render(elm)}</React.Fragment>
      ))}
    </dl>
  );
}
