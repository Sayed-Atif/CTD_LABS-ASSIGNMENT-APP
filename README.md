# Inventory Management System Overview:
-This APP is a full stack MERN (MongoDB, Express.js, React.js, Node.js) web application for managing an inventory of products with quantity. It includes functionality for adding, updating, deleting, and viewing products, as well as sending notifications about products when the product quantity is zero.
-Also this system has custom error handling for the fronend and backend which is able to catch any error raising during usage of this app.
-When the product quantity is zero and if you click on the Send Notification button, it will send a notification email to receiver's email as well as save the notification details in the MongoDB Database too.
-The frontend is built using React, the styling and responsiveness is done using CSS3 technolgoy and the backend is built using Node.js and Express.js, with MongoDB as the database.

# Key Features:
-Add new products
-Update existing products
-Delete products
-View list of products
-Increase product quantities
-Decrease product quantities
-Send notifications about products when quantity is zero
-Save notification in the Dabase about products when quantity is zero 
-Toast notifications for user actions and errors

# Technology Stack:
-Frontend: React.js, React Toastify, CSS3, JSX
-Backend: Node.js, Express.js
-Database: MongoDB
-Styling & Reponsiveness: CSS3
-API Client: Axios

# Prerequisites:
-Node.js
-npm or yarn
-MongoDB

# Backend Setup:
-Navigate to the backend directory:
cd backend
-Install backend dependencies:
npm install
-Create a .env file in the root directory and add below:
MONGO_URI=your_mongodb_uri
PORT=your_port_number
EMAIL_USER =your_email [Gmail]
EMAIL_PASS=your_password [It would be better to generate App password instead of using your orgininal password to work with Application]
EMAIL_RECEIVER=receiver_email
-Start the backend server:
$ npm run server
-The backend server will start on http://localhost:5000.

# Frontend Setup:
-Navigate to the frontend directory:
cd frontend
-Install frontend dependencies:
npm install
-Start the frontend development server:
$ npm run client
The frontend server will start on http://localhost:3000.
-Start frontend and backend using below command witht he help of concurrently:
$ npm run dev

# API Endpoints:
For Products:
- GET /api/products/: Get all products
- POST /api/products/: Add a new product
- PUT /api/products/: Update an existing product
- DELETE /api/products/: Delete a product
- PATCH /api/products/increase/: Increase the quantity of a product
- PATCH /api/products/decrease/: Decrease the quantity of a product
- POST /api/products/send-email/: Send a notification about a product 

For Notification:
- POST /api/products/send-email: Sending Notification Email and Saving Notification To Database

# Frontend Components:
-Inventory:
This component manages the state and operations for the entire inventory system. It includes methods for fetching products, adding a product, updating a product, deleting a product, increasing and decreasing product quantity, and sending notifications.
-ProductForm:
This component renders the form for adding and editing products. It handles form validation and submission.
-ProductList:
This component renders the list of products. It includes buttons for editing, deleting, increasing, and decreasing product quantity, as well as sending notifications.
-Utils:
constants.js
This file contains reusable constants such as toast configurations, initial state, API endpoints, and validation error messages.

# Handling Errors:
Errors in this application are handled using toast notifications provided by react-toastify. When an error occurs, a toast message is displayed to inform the user of the issue.

# Validation:
The backend uses express-validator for input validation to ensure that all required fields are provided and meet specific criteria.
- The frontend uses customs validations, ErrorBoundary and react-toastify for validation and error handling. 

License
This project is licensed under the MIT License.

# Planned Feature To be added to project:
- Adding User model and implementing user related operations in backend and frontend. 
- Authorization & Authentication
- Adding more feilds to product and implementing them in frontend and backend.
- JWT
- Password Hashing
- Deployment APP to cloud

# Contact
For any inquiries, please contact atif.ghafaar@gmail.com. 
