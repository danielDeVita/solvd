class Book {
    constructor(title, author, isbn = Date.now(), price = Math.floor((Math.random() + 1) * 100), availability = Math.floor((Math.random() + 1) * 100)) {
        this.title = title
        this.author = author
        this.isbn = isbn //default is current date in ms
        this.price = price //default is random with Math module
        this.availability = availability //default is random with Math module
    }
}

class ComputerScienceBook extends Book {
    constructor(title, author, isbn, price, availability) {
        super(title, author, isbn, price, availability)
        this.genre = 'Computer Science'
    }
}

class HistoryBook extends Book {
    constructor(title, author, isbn, price, availability) {
        super(title, author, isbn, price, availability)
        this.genre = "History"
    }
}

class User {
    constructor(name, email, userId = Math.floor(Math.random() * 100)) {
        this.name = name
        this.email = email
        this.userId = userId //default is random with Math module
    }
}

class Cart {
    constructor(user) {
        this.books = []
        this.user = user
    }
    addBook(bookToAdd) {
        //we only add books if we have enough stock
        if (bookToAdd.availability < 1) throw new Error("Not enough books in stock")
        else {
            this.books.push(bookToAdd)
            //we substract from the total amount of this book left
            bookToAdd.availability -= 1
        };
    }
    removeBook(bookToRemove) {
        //find index of book to remove
        const foundBookIndex = this.books.indexOf(bookToRemove);
        //validation for a book that was not found
        if (foundBookIndex === -1) throw new Error("No such book in cart");
        else {
            //deletion of the book at that index
            this.books.splice(foundBookIndex, 1)
            //update total amount of books
            bookToRemove.availability += 1
        };
    }
    calculateTotalPrice() {
        //sum of every price in the array of books
        return this.books.reduce((acc, book) => {
            return acc += book.price
        }, 0);
    }
}

class Order {
    constructor(user, cart) {
        //each order is associated to a user so we pass an instance of User
        this.user = user
        //each order is associated to a cart so we pass an instance of Cart (to use its methods)
        this.cart = cart
        this.books = cart.books
    }
    //setter from Cart class
    get totalPrice() {
        return this.cart.calculateTotalPrice();
    }
}

//instances of books
const book1 = new Book('book1', 'author1')
const book2 = new Book('book2', 'author2', "ISBN-1234567890")
const book3 = new Book('book3', 'author3')
//extending Book
const cSBook = new ComputerScienceBook('cSBook', 'cSAuthor')
const hBook = new HistoryBook('hBook', 'hAuthor')

//instances of users
const user1 = new User('user1', 'email1')
const user2 = new User('user2', 'email2', 1234567890)

//instances of carts
const cart1 = new Cart(user1)
const cart2 = new Cart(user2)

//instance of Order
const order1 = new Order(user1, cart1)
const order2 = new Order(user2, cart2)

console.log(`**************************************** \n
        ORIGINAL BOOK2 AVAILABILITY \n
                  ${book2.availability}`);

console.log(`**************************************** \n
              CART1 (EMPTY) \n
`, cart1);

console.log(`**************************************** \n
            ORDER1 (EMPTY) \n
`, order1);

cart1.addBook(book2)
cart1.addBook(book2)
cart1.addBook(book2)

cart2.addBook(cSBook)
cart2.addBook(hBook)


console.log(`**************************************** \n
ORDER1 (after adding book2 3 times) \n
`, order1);

console.log(`**************************************** \n
    ORDER1 TOTAL PRICE WITH 3 BOOKS2 \n
                $${order1.totalPrice}`);

console.log(`**************************************** \n
BOOK2 AVAILABILITY AFTER ADDING IT 3 TIMES \n
`, book2.availability);

console.log(`**************************************** \n
ORDER2 (after adding polymorphic Books) \n
`, order2);

console.log(`**************************************** \n
ORDER2 TOTAL PRICE WITH 2 POLYMORPHIC BOOKS \n
                $${order2.totalPrice}`);

cart1.removeBook(book2)
console.log(`**************************************** \n
BOOK 2 AVAILABILITY AFTER REMOVING IT 1 TIME \n
`, book2.availability);

console.log(`**************************************** \n
    ORDER1 TOTAL PRICE WITH 2 BOOKS2 \n
                $${order1.totalPrice}`);