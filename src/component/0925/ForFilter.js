import React from "react"; // ←これを追加！

export default function ForFilter({src}) {
  const lowPrice = src.filter((elem) => elem.price < 3000);
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
