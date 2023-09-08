# Online Bookstore

## Overview

This project is a simple implementation of an online bookstore system. It includes classes to represent books, users, shopping carts, and orders. Users can browse books, add them to their carts, and place orders.

## Classes

### `Book`

The `Book` class represents a book with the following attributes:

- `title`: Title of the book.
- `author`: Author of the book.
- `isbn`: International Standard Book Number (default is the current date in milliseconds).
- `price`: Price of the book (default is a random value between 1 and 100).
- `availability`: Number of available copies (default is a random value between 1 and 100).

### `ComputerScienceBook` and `HistoryBook`

Subclasses of `Book` that represent books of specific genres: "Computer Science" and "History."

### `User`

The `User` class represents a user with the following attributes:

- `name`: Name of the user.
- `email`: Email address of the user.
- `userId`: Unique user identifier (default is a random value between 1 and 100).

### `Cart`

The `Cart` class represents a user's shopping cart with the following features:

- Users can add books to their carts.
- Users can remove books from their carts.
- The cart ensures that there are enough copies of a book in stock before adding it.
- Users can calculate the total price of the books in their carts.

### `Order`

The `Order` class represents an order placed by a user with the following features:

- An order is associated with a user and a cart.
- Users can retrieve the total price of their order.
