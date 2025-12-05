// src/component/1023/shoppingCart.js
import React, {useState} from "react";
import SelectedItem from "./selectedItem"; // ← 正しいコンポーネント名に修正

export default function ShoppingCart({products}) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <ul>
        {products.map((product) => (
          <SelectedItem key={product.id} product={product} onSelect={handleProductClick} />
        ))}
      </ul>

      <h2>選択された商品</h2>
      {selectedProduct ? (
        <div>
          <h3>{selectedProduct.name}</h3>
          <p>価格: {selectedProduct.price}円</p>
          <p>説明: {selectedProduct.description}</p>
        </div>
      ) : (
        <p>商品を選択してください</p>
      )}
    </div>
  );
}
