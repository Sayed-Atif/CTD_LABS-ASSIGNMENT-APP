import React from 'react';

const ProductForm = ({ name, quantity, errors, setName, setQuantity, handleSave, resetForm, fetchProducts, editingProductId }) => (
  <div className="form-group">
    <label className="label" htmlFor="productName">Product Name</label>
    <input
      type="text"
      id="productName"
      placeholder="Product Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="input"
    />
    {errors.name && <div className="error">{errors.name}</div>}
    <label className="label" htmlFor="quantity">Quantity</label>
    <input
      type="number"
      id="quantity"
      placeholder="Quantity"
      value={quantity}
      required
      onChange={(e) => setQuantity(Number(e.target.value))}
      className="input"
    />
    {errors.quantity && <div className="error">{errors.quantity}</div>}
    <div className="button-group">
      <button
        onClick={handleSave}
        className={`button ${editingProductId ? 'button-primary' : 'button-success'}`}
      >
        {editingProductId ? 'Update Product' : 'Add Product'}
      </button>
      <button onClick={resetForm} className="button button-secondary">Reset</button>
      <button onClick={fetchProducts} className="button button-success">Refresh</button>
    </div>
  </div>
);

export default ProductForm;