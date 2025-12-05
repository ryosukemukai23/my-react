import React from "react"; // ✅ Reactを明示的にimport

export default function ForList({src}) {
  // ✅ propsを正しく受け取る
  return (
    <dl>
      {src.map((elem) => (
        <React.Fragment key={elem.id}>
          <dt>
            <a href={`https://test.com/books/${elem.id}/${elem.isbn}`}>
              {elem.title}（{elem.price}円）
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
