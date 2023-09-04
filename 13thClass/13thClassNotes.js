/* 

Classes in JavaScript=
- Object - a collection of properties and methods.

const myUser = new User('Anna')

class User{
    constructor(name){
        this.name = name
    }
    age = 18
}

myUser.name //'Anna' (it is a public field)
myUser.age //18 (it should be defined in constructor)

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

Private fields:
- use # before the property or method name to make it private, so that only class can access them.

Class User{
#name
constructor(name){
    this.#name = name
    }
getName(){
    return this.#name
}

const u = new User('Anna')
user.getName() //'Anna'
user.#name //SyntaxError

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

Static fields:
- static keyword makes any variable/method available without creating an instance first.
- used for constants mainly

class User{
    static TYPE.ADMIN = 'admin'
    static TYPE.REGULAR = 'regular'
    name
    type
    constructor(name,type){
        this.name = name
        this.type = type
    }
}

User.TYPE_ADMIN 

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

Private Static Fields:
- use # before the property or method name to make it private and static at same time.

class User{
    static #MAX = 2
    static #instances = 0
    name
    constructor(name){
        User.#instances++
        if(User.#instances > User.#MAX){
            throw new Error('error...')
        }
    }
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

Methods:

class User {
    ...

    get Name(){
        return this.name
    }
    nameContains(str){
        return this.name.includes(str)
    }
}

other Example = (private methods)

class User {
    #name

    get name(){
        return this.#name
    }
    set name(value){
        if(!value){
            throw Error
        }
    }
}

other Example = (static methods)

class User{
    static getRandomName(){

    }
}

User.getRandomName()

other Example = (static and private methods)

class User{
    static #getRandomName(){

    }
}

User.getRandomName() //would only work inside the class User

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

Extends:
- extends is a keyword that allows you to inherit from another object or function, allowing for reusability of code

class Child extends Parent{

}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

Super:

class User{
    name
    constructor(name){
        this.name = name
    }
}

class ContentWriter extends User{
    posts = []
    constructor(name,posts){
        super(name)
        this.posts = posts
    }
    get NameWithPosts(){
        const name = super.get Name()
        ... etc (combine the name with posts with code)
    }
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

instanceof:
checks if an object is instance of a class or not

const writer = new ContentWriter('',[])

writer instanceof ContentWriter //true
writer instanceof User //true

other way to compare is: 
writer.constructor === User //false
writer.constructor === ContentWriter //true

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

Examples with code = 

Classes are not entities
Classes are commonly named in PascalCase

-Abstraction:
we only code what we need from a Class, not any extra methods or properties
-Inheritance:
We can extend classes and add more functionality without changing existing ones
-Encapsulation:
The data that belongs together should be grouped into one place
-Polymorphism:
A method/function can have different implementations depending on its input parameters




CODE EXAMPLES FROM MIHAEL TO BE PASTED HERE




////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

Composition of objects:
Objects can contain other Objects inside them
This allows us to create complex structures easily
You can add a FN to an object so only a certain child inherits it


*/