import React from "react";

export default function ForSort({src}) {
  const lowPrice = src.sort((a, b) => a.price - b.price);
  return (
    <dl>
      {lowPrice.map((elem) => (
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
