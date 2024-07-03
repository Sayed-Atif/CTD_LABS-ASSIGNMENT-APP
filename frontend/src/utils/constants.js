import { toast } from 'react-toastify';

export const TOAST_CONFIG = {
  success: (message) => toast.success(message),
  error: (message) => toast.error(message),
};

export const INITIAL_STATE = {
  products: [],
  name: '',
  quantity: 0,
  editingProductId: null,
  errors: {},
};

export const API_ENDPOINTS = {
  fetchProducts: '/api/products',
  addProduct: '/api/products',
  updateProduct: (id) => `/api/products/${id}`,
  deleteProduct: (id) => `/api/products/${id}`,
  increaseQuantity: (id) => `/api/products/${id}/increase`,
  decreaseQuantity: (id) => `/api/products/${id}/decrease`,
  sendNotification: (id) => `/send-email/${id}`,
};

export const VALIDATION_ERRORS = {
  name: 'Product name must be at least 3 characters long',
  quantity: 'Quantity must be a non-negative integer',
};



