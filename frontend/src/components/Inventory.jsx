import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/styles/myStyles.css';
import { TOAST_CONFIG, INITIAL_STATE, API_ENDPOINTS, VALIDATION_ERRORS } from '../utils/constants';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const Inventory = () => {
  const [products, setProducts] = useState(INITIAL_STATE.products);
  const [name, setName] = useState(INITIAL_STATE.name);
  const [quantity, setQuantity] = useState(INITIAL_STATE.quantity);
  const [editingProductId, setEditingProductId] = useState(INITIAL_STATE.editingProductId);
  const [errors, setErrors] = useState(INITIAL_STATE.errors);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_ENDPOINTS.fetchProducts);
      setProducts(res.data);
    } catch (error) {
      TOAST_CONFIG.error('Error fetching products');
    }
  };

  const sendNotification = async (productId) => {
    try {
      const res = await axios.post(API_ENDPOINTS.sendNotification(productId));
      TOAST_CONFIG.success(res.data.message);
  
    } catch (error) {
      TOAST_CONFIG.error('The product quantity is not zero, cannot send notification');
    }
  };

  const validateForm = () => {
    const errors = {};
    if (name.trim().length < 3) {
      errors.name = VALIDATION_ERRORS.name;
      TOAST_CONFIG.error(VALIDATION_ERRORS.name);
    }
    if (quantity < 0) {
      errors.quantity = VALIDATION_ERRORS.quantity;
      TOAST_CONFIG.error(VALIDATION_ERRORS.quantity);
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const addProduct = async () => {
    if (!validateForm()) return;

    try {
      const product = { name, quantity };
      const res = await axios.post(API_ENDPOINTS.addProduct, product);
      setProducts([...products, res.data]);
      resetForm();
      TOAST_CONFIG.success('Product added successfully');
    } catch (error) {
      TOAST_CONFIG.error('Error adding product');
    }
  };

  const updateProduct = async (id) => {
    if (!validateForm()) return;

    try {
      const product = { name, quantity };
      await axios.put(API_ENDPOINTS.updateProduct(id), product);
      fetchProducts();
      resetForm();
      TOAST_CONFIG.success('Product updated successfully');
    } catch (error) {
      TOAST_CONFIG.error('Error updating product');
    }
  };

  const increaseQuantity = async (id) => {
    try {
      await axios.patch(API_ENDPOINTS.increaseQuantity(id));
      fetchProducts();
      TOAST_CONFIG.success('Quantity increased successfully');
    } catch (error) {
      TOAST_CONFIG.error('Error increasing quantity');
    }
  };

  const decreaseQuantity = async (id) => {
    const product = products.find((p) => p._id === id);
    if (product.quantity > 0) {
      try {
        await axios.patch(API_ENDPOINTS.decreaseQuantity(id));
        fetchProducts();
        TOAST_CONFIG.success('Quantity decreased successfully');
      } catch (error) {
        TOAST_CONFIG.error('Error decreasing quantity');
      }
    } 
    else {
      TOAST_CONFIG.error('Cannot decrease quantity, product quantity is already zero');
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(API_ENDPOINTS.deleteProduct(id));
      setProducts(products.filter((product) => product._id !== id));
      TOAST_CONFIG.success('Product deleted successfully');
    } catch (error) {
      TOAST_CONFIG.error('Error deleting product');
    }
  };

  const editProduct = (product) => {
    setName(product.name);
    setQuantity(product.quantity);
    setEditingProductId(product._id);
  };

  const resetForm = () => {
    setName(INITIAL_STATE.name);
    setQuantity(INITIAL_STATE.quantity);
    setEditingProductId(INITIAL_STATE.editingProductId);
    setErrors(INITIAL_STATE.errors);
  };

  const handleSave = () => {
    if (editingProductId) {
      updateProduct(editingProductId);
    } else {
      addProduct();
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <h1 className="header">Inventory Management System</h1>
      <ProductForm
        name={name}
        quantity={quantity}
        errors={errors}
        setName={setName}
        setQuantity={setQuantity}
        handleSave={handleSave}
        resetForm={resetForm}
        fetchProducts={fetchProducts}
        editingProductId={editingProductId}
      />
      <h2 className="header">Products</h2>
      <ProductList
        products={products}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
        sendNotification={sendNotification}
      />
    </div>
  );
};

export default Inventory;