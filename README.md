# instacart

This repository contains the source code for an application built with Node.js and Express. The application is a simple e-commerce platform that allows users to view products, add them to a shopping cart, and product edit/creation feature. The code is organized into different directories and files, each serving a specific purpose.

![instacart home](https://i.imgur.com/K0YHB47.png)

## Installation

To run this application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the command: `npm install`.
4. Start the server by running the command: `npm run dev`.
5. Open your web browser and visit `http://localhost:3000` to access the application.

Make sure you have Node.js and npm (Node Package Manager) installed on your machine before proceeding with the installation.
Note: Admin logout endpoint is: `http://localhost:3000/logout`

## Usage

Note: Only admins are required to signup inorder to maintain products. End-users can just use the app without authentication.

Once the application is up and running, you can use it as follows:

1. Open your web browser and visit `http://localhost:3000` to access the home page.
2. Browse the products available on the platform.
3. Click on a product to view its details.
4. Add products to your cart by clicking the "Add to Cart" button.
5. View your cart by clicking the cart icon.
6. Adjust the quantity of products in your cart or remove items.

## Project Structure

The project's directory structure is organized as follows:

- `server.js`: The main entry point of the application. It sets up the server, middleware, and routes.
- `repositories`: Contains repository classes for managing data storage and retrieval.
- `routes`: Contains route handlers for different endpoints of the application.
- `views`: Contains the HTML templates for rendering the user interface.
- `public`: Contains static assets (CSS, JavaScript, images) used by the application.

## Dependencies

The application relies on the following dependencies:

- `express`: A web framework for Node.js used for handling HTTP requests and routing.
- `body-parser`: Middleware for parsing request bodies.
- `cookie-session`: Middleware for session management using cookies.
- `multer`: Middleware for handling file uploads.
- `express-validator`: Middleware for request validation.

These dependencies are automatically installed when you run `npm install`.

## Custom Database (Repository)

In this project, a custom database is implemented using a repository pattern. The repository acts as an interface between the application and the data storage, allowing easy management and manipulation of data. Here's an overview of the custom database implementation:

### Structure

The repository files are located in the `repositories` directory. The following repository files are included:

- `repository.js`: This is the base repository class that provides common functionality for working with data. It includes methods for creating, retrieving, updating, and deleting records.

- `users.js`: This repository extends the base repository and specifically handles user-related data operations. It includes additional methods for user authentication and password handling.

- `products.js`: This repository extends the base repository and handles product-related data operations.

- `carts.js`: This repository extends the base repository and manages cart-related data operations.

### Base Repository (repository.js)

The `repository.js` file defines the base repository class. It contains methods for common database operations such as creating, retrieving, updating, and deleting records. The key features of this class include:

- File-based data storage: The repository uses JSON files (`products.json`, `users.json`, `carts.json`) as the data storage mechanism.

- Error handling: The repository handles errors related to file access and data manipulation. If the specified file does not exist, it creates an empty file.

- Asynchronous operations: The repository methods use `async/await` syntax to handle asynchronous file read/write operations.

- Data encryption: The `UsersRepository` class within `users.js` implements password encryption using the `scrypt` function from the `crypto` module. Passwords are securely stored as a combination of hashed password and salt.

### Extended Repositories (users.js, products.js, carts.js)

The extended repository classes (`UsersRepository`, `ProductsRepository`, and `CartsRepository`) inherit from the base repository class and provide specific functionality for each data type. These classes define methods that are specific to their respective data types, such as user authentication and handling product/cart operations.

The `UsersRepository` class includes methods for creating users, comparing passwords, and retrieving user records.

The `ProductsRepository` class includes methods for retrieving, creating, updating, and deleting product records.

The `CartsRepository` class includes methods for managing cart items, such as adding, retrieving, and deleting items from a cart.

### Usage

To use the custom database repository, you can require the specific repository class in the appropriate routes or modules and create an instance of the repository. For example:

```javascript
const usersRepo = require('./repositories/users');
const productsRepo = require('./repositories/products');
const cartsRepo = require('./repositories/carts');

// Example usage: Create a new user
const user = await usersRepo.create({ email: 'example@example.com', password: 'password123' });

// Example usage: Get all products
const products = await productsRepo.getAll();

// Example usage: Add a product to a cart
const cart = await cartsRepo.create({ items: [] });
cart.items.push({ id: productId, quantity: 1 });
await cartsRepo.update(cart.id, { items: cart.items });
```

The custom database repository provides a convenient and organized way to interact with data, separating the database logic from the application logic.

### instacart users.json
![instacart users.json](https://i.imgur.com/fE9ALXP.png)

### instacart products.json
![instacart products.json](https://i.imgur.com/c5atAlI.png)

### instacart carts.json
![instacart carts.json](https://i.imgur.com/FKywGTQ.png)

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code in any way you like. Please see the `LICENSE` file for more details.

## Screenshoots

### instacart home
![instacart home](https://i.imgur.com/7gOXqf5.png)

### instacart admin signup
![instacart admin signup](https://i.imgur.com/tXVlvvO.png)

### instacart admin signup validation check
![instacart admin signup validation check](https://i.imgur.com/AhLD0U0.png)

### instacart admin login
![instacart admin login](https://i.imgur.com/tq651nR.png)

### instacart admin login validation check
![instacart admin login validation check](https://i.imgur.com/0dIsjBb.png)

### instacart admin successful login credentials
![instacart admin successful login credentials](https://i.imgur.com/T6PTVl4.png)

### instacart admin products view
![instacart admin products view](https://i.imgur.com/O8wcOJn.png)

### instacart admin create a product
![instacart admin create a product](https://i.imgur.com/KtNH77J.png)

### instacart admin product create validation error
![instacart admin product create validatino error](https://i.imgur.com/RyG9ZSj.png)

### instacart admin edit a existing product
![instacart admin edit a existing product](https://i.imgur.com/athBixX.png)

### instacart home
![instacart home](https://i.imgur.com/K0YHB47.png)

### instacart shopping cart
![instacart shopping cart](https://i.imgur.com/p6ki2wF.png)

### instacart
![instacart](https://i.imgur.com/XzpmRaE.png)
