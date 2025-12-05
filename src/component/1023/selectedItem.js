// src/component/1023/selectedItem.js
import React from "react";

export default function SelectedItem({product, onSelect}) {
  return (
    <li>
      {product.name} - {product.price}円 <button onClick={() => onSelect(product)}>Select</button>
    </li>
  );
}
