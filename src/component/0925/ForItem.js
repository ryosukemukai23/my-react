import React from "react"; // ←これを追加！

export default function ForItem({product}) {
  return (
    <React.Fragment key={product.id}>
      <dt>
        <a href={`https://test.com/books/${product.id}/${product.isbn}`}>
          {product.title}（{product.price}円）
        </a>
      </dt>
      <dd>{product.summary}</dd>
    </React.Fragment>
  );
}
