# Online Clothing Store App

This is a simple online clothing store application built using NodeJS, Express, and MongoDB. The main functionality of this app is to allow customers to search for specific clothing items in their size and provide a list of available products matching the search criteria.

## Features

### 1. Get All Clothes

- **Endpoint:** `/clothes`
- **HTTP Method:** GET
- **Description:** Retrieve a list of all available clothes in the store.

**Response Body (Success):**
```
[{
"id": "clothing123",
"clotheName": "Men's T-Shirt",
"color": "Blue",
"size": "Medium",
"price": 19.99,
"stock": 50
},
{
"id": "clothing456",
"clotheName": "Women's Dress",
"color": "Red",
"size": "Small",
"price": 29.99,
"stock": 30
}]
```
**Error Response (Not Found - 404):**

- Status Code: 404
- Response Body:
  {
  "error": "Clothing items not found."
  }

### 2. Filter Clothes by Size

- **Endpoint:** `/clothes`
- **HTTP Method:** GET
- **Query Parameter:** `size`
- **Description:** Filter clothes by size. Example: `/clothes?size=medium` to get all medium-sized clothes.

**Response Body (Success):**
```
[{
"id": "clothing123",
"clotheName": "Men's T-Shirt",
"color": "Blue",
"size": "Medium",
"price": 19.99,
"stock": 50
},
{
"id": "clothing789",
"clotheName": "Women's Jeans",
"color": "Black",
"size": "Medium",
"price": 39.99,
"stock": 20
}]
```

**Error Response (Not Found - 404):**

- Status Code: 404
- Response Body:
  {
  "error": "Clothing items of the specified size not found."
  }

### 3. Create New Clothes

- **Endpoint:** `/clothes`
- **HTTP Method:** POST
- **Description:** Create new clothing items with the following fields:
  - `clotheName` (String): The name of the clothing item.
  - `color` (String): The color of the clothing item.
  - `size` (String): The available sizes for the clothing item.
  - `price` (Number): The price of the clothing item.
  - `stock` (Number): The available stock of the clothing item.

**Request Body Example:**
```
{
"clotheName": "Women's Jacket",
"color": "Green",
"size": "Large",
"price": 49.99,
"stock": 10
}
```

**Response Body (Success):**
```
{
"id": "clothing101",
"clotheName": "Women's Jacket",
"color": "Green",
"size": "Large",
"price": 49.99,
"stock": 10
}
```

**Error Response (Bad Request - 400):**

- Status Code: 400
- Response Body:
  {
  "error": "Invalid request body. Please provide all required fields."
  }

### 4. Modify Clothes

- **Endpoint:** `/clothes/:id`
- **HTTP Method:** PUT
- **Description:** Modify existing clothing items by their `id`.

**Request Body Example:**
```
{
"price": 59.99,
"stock": 5
}
```

**Response Body (Success):**
{
"message": "Clothing item updated successfully."
}

**Error Response (Not Found - 404):**

- Status Code: 404
- Response Body:
  {
  "error": "Clothing item not found."
  }

### 5. Buy Clothes (Update Stock)

- **Endpoint:** `/clothes/buy/:id`
- **HTTP Method:** POST
- **Description:** Buy a clothing item by its `id`, which will decrease its stock count.

**Response Body (Success):**
{
"message": "Clothing item purchased successfully."
}

**Error Response (Not Found - 404):**

- Status Code: 404
- Response Body:
  {
  "error": "Clothing item not found."
  }

**Error Response (Conflict - 409):**

- Status Code: 409
- Response Body:
  {
  "error": "Insufficient stock. Clothing item cannot be purchased."
  }

### 6. Get Customer Orders

- **Endpoint:** `/customers/:customerId/orders`
- **HTTP Method:** GET
- **Description:** Retrieve a list of customer orders by their `customerId`.

**Response Body (Success):**
```
[{
"id": "order123",
"customerId": "customer456",
"items": [
  {
  "itemId": "clothing123",
  "quantity": 2,
  "price": 19.99
  },
  {
  "itemId": "clothing456",
  "quantity": 1,
  "price": 29.99
  }
],
"totalPrice": 69.97,
"orderDate": "2023-10-05T15:30:00Z"
}]
```

**Error Response (Not Found - 404):**

- Status Code: 404
- Response Body:
  {
  "error": "Customer not found."
  }

## Database

The database of this application includes the following document types:

### Cloth Documents

- These documents represent individual clothing items available for sale in your store.
- Fields for each "Cloth" document might include:
  - `id`: A unique identifier for the clothing item.
  - `clotheName`: The name or description of the clothing item.
  - `color`: The color of the clothing item.
  - `size`: The available sizes for the clothing item.
  - `price`: The price of the clothing item.
  - `stock`: The available stock or quantity of the clothing item.

### Customer Documents

- These documents represent your customers, including their personal information and order history.
- Fields for each "Customer" document might include:
  - `id`: A unique identifier for the customer.
  - `firstName` and `lastName`: Customer's name.
  - `email`: Customer's email address.
  - `password`: Hashed password for authentication.
  - `orders`: An array of order references, linking to "Order" documents.

### Order Documents

- These documents represent customer orders, including details of the items purchased and the order total.
- Fields for each "Order" document might include:
  - `id`: A unique identifier for the order.
  - `customerId`: Reference to the customer who placed the order.
  - `items`: An array of objects representing purchased items.
  - `totalPrice`: The total price of the order.
  - `orderDate`: The date and time when the order was placed.
