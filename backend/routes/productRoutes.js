import express from "express";
import { check } from 'express-validator';
import { getProducts, 
         deleteProduct, 
         updateProduct, 
         createProduct,
         increaseProductQuantity,
         decreaseProductQuantity
        } from "../controllers/productController.js";

const router = express.Router();


// Validation rules
const productValidationRules = [
        check('name')
          .isString()
          .isLength({ min: 3 })
          .withMessage('Name must be a string with at least 3 characters'),
        check('quantity')
          .isInt({ min: 0 })
          .withMessage('Quantity must be a non-negative integer')
      ];


//ALL API ROUTES DEFINITION HERE:

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get("/", getProducts);

// @desc Create single product
// @route POST /api/products
// @access Public
router.post("/", productValidationRules, createProduct);

// @desc Update single product
// @route PUT /api/products/:id
// @access Public
router.put("/:id", productValidationRules, updateProduct);


// @desc Delete a single product
// @route DELETE /api/products/:id
// @access Public
router.delete("/:id", deleteProduct);


// @desc Increase product quantity
// @route PATCH  /api/products/:id/increase
// @access Public
router.patch("/:id/increase", increaseProductQuantity);


// @desc Decrease product quantity
// @route PATCH /api/products/:id/decrease
// @access Public
router.patch("/:id/decrease", decreaseProductQuantity);



export default router;