# E-commerce Project

This project is an e-commerce application built using Express.js and MongoDB.

## Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

## Steps to Run the Code

1. **Clone the repository**:
    ```sh
    git clone https://github.com/PugazhendhiVelu/e-commerce.git
    ```

2. **Navigate to the project folder**:
    ```sh
    cd e-commerce
    ```

3. **Install dependencies**:
    ```sh
    npm ci
    ```

4. **Start the server**:
    ```sh
    npm start
    ```

The server will start, and you can test the endpoints using Postman.

## Testing the Endpoints

Use Postman or any API testing tool to send GET, POST, PUT, and DELETE requests.

The base url for all request is 
"http://localhost:4567/victus/v1/" 

### Example Endpoints

#### Login

- **Endpoint**: `POST http://localhost:4567/victus/v1/login  or http://localhost:4567/victus/v1/`
- **Body**:
    ```json
    {
        "email": "user@example.com",
        "password": "userpassword"
    }
    ```

### Configuration

You can change the database name in the `config/config.env` file:
