import React from 'react';

const ProductList = ({
  products,
  increaseQuantity,
  decreaseQuantity,
  editProduct,
  deleteProduct,
  sendNotification
}) => {
  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product._id} className="product-item">
          <div className="product-details">
            <span><span className="label">Name:</span> {product.name}</span>
            <span><span className="label">Quantity:</span> {product.quantity}</span>
          </div>
          <div className="button-group">
            <button
              onClick={() => increaseQuantity(product._id)}
              className="button button-primary"
            >
              Increase
            </button>
            <button
              onClick={() => decreaseQuantity(product._id)}
              className="button button-warning"
            >
              Decrease
            </button>
            <button
              onClick={() => editProduct(product)}
              className="button button-secondary"
            >
              Edit
            </button>
            <button
              onClick={() => deleteProduct(product._id)}
              className="button button-danger"
            >
              Delete
            </button>
            <button
              onClick={() => sendNotification(product._id)}
              className="button button-success"
            >
              Send Notification
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;