/* 

Data Structures = 

*********************************************************

Array:
- fixed size, ordered collection of elements of same type (and size).
- 1 field of memory
- index starts at zero.
- can be accessed by using the array name and square brackets with an integer value to access a specific element in that position.
- methods:
    a) length() - returns the number of items in an array.
    b) get(index) - gets element from a specific position/index and return it as object or primitive data types.
    c) set(index, value) - sets new value to specified position/index.
    d) delete arr[index] - deletes first item.

*********************************************************

Stack:
- LIFO data structure. Last element added is removed first.

| 4 | (first to GO)
| 2 |
| 3 | (first to have arrived)

methods:
    a) push(value): adds new node with given value on top of stack and moves it into focus.
    b) pop(): removes last pushed node from stack and makes previous one focused again.
    d) isEmpty(): checks if there are any nodes left inside this stack or not.
    e) top(): links to the top element

max_stack:
- A stack that also keeps track of maximum values ever seen so far.
- max_stack has two stacks as its fields. One for storing actual numbers while another stores their respective maximums.


| 4 |  | 5 |
| 5 |  | 5 |
| 2 |  | 3 |
| 3 |  | 3 |

stack  max_stack

*********************************************************

Queue:
- FIFO data structure. First element added is removed first.
- methods:
    a) enqueue(value): add new node containing provided value onto end of queue.
    b) dequeue(): remove frontmost node off queue and return its value.
    c) isEmpty(): check whether queue contains no more nodes.
    d) top(): links to the start of the queue.

*/