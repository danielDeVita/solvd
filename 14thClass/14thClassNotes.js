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

*********************************************************

Linked List:
- collection of elements where each element points to next element using pointers.
- Each element has two parts:
1) Data part which stores actual information about element;
2) Pointers pointing towards other elements (las pointer points to null)
3) Can go fordward and backward
- Advantages over arrays:
a) Dynamic size allocation.
b) Easier insertion/deletion at beginning / middle / end of linked lists than in array.

*********************************************************

Graph:
- Collection of vertices connected by edges, where edge connects two vertices together.
- Vertices can be represented as objects, while edges can be represented as pairs of vertex references.
- Some Graph algorithms include: Depth First Search, Breadth First Search:
    a)Depth First Search:
    Traverses graph starting from root vertex and explores all adjacent unvisited vertices before moving on to visiting their neighboring vertices.
    b)Breadth First Search:
    Traverse graph by levels, checks parent node first and explores all adjacent unvisited vertices

*********************************************************

Trees:
- Similar to graph, they have: 
    -nodes (a root node too)
    -children (from a parent node)
    -parent nodes (nodes with children)
    -leaf (child with no children)
    -siblings (same level nodes)

//////////////

Bynary Search Tree:
1) The left subtree of a node contains only values lesser then it's own key.
2) The right subtree of a node contains only values greater to it's own key.
3) Every child node must satisfy these rules recursively.
4) There are no duplicate keys allowed within same subtrees.

Balanced:
- A binary search tree that remains balanced after every operation.

//////////////

Black Red Tree:
1) Root is black.
2) All leaves(NIL or NULL) are colored red.
3) If any node is RED, both its children should also be RED.
4) Every path from the root to leaf should contain same number of BLACK nodes.
5) No 2 consecutive RED nodes on same level.
6) Black height = Number of black nodes along longest path from root to leaf.
7) Height of Binary Tree = Max(height of Left Subtree , height of Right Subtree ) + 1
8) Time Complexity: O(log n).
9) Space complexity: O(n), if we store each node separately.

*/