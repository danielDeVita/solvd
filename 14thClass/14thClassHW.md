## Stack

A `Stack` is a data structure that follows the Last-In, First-Out (LIFO) principle. It has the following methods:

- `push(value)`: Adds a value to the top of the stack.
- `pop()`: Removes and returns the top value from the stack.
- `peek()`: Returns the top value without removing it.
- `isEmpty()`: Returns `true` if the stack is empty, `false` otherwise.
- `size()`: Returns the number of elements in the stack.
- `getMin()`: Returns the minimum value in the stack (assuming numeric values).
- `getMax()`: Returns the maximum value in the stack (assuming numeric values).

## Queue

A `Queue` is a data structure that follows the First-In, First-Out (FIFO) principle. It has the following methods:

- `enqueue(value)`: Adds a value to the end of the queue.
- `dequeue()`: Removes and returns the first value from the queue.
- `peek()`: Returns the first value without removing it.

## Linked List

A `LinkedList` is a linear data structure composed of nodes, where each node contains data and a reference to the next node in the sequence. It has the following methods:

- `insert(value)`: Inserts a new node with the given value at the end of the linked list.
- `delete()`: Deletes the last node from the linked list.
- `search(value)`: Searches for a node with the given value in the linked list.
- `getAll()`: Returns an array of all values in the linked list.
- `infiniteCycle()`: Checks if the linked list contains an infinite cycle (for testing).

## Binary Search Tree (BST)

A `BinarySearchTree` is a tree-based data structure where each node has at most two child nodes: a left child and a right child. It has the following methods:

- `insert(data)`: Inserts a new node with the given data into the BST.
- `search(data)`: Searches for a node with the given data in the BST.
- `inOrder()`: Performs an in-order traversal of the BST and returns an array of values.
- `preOrder()`: Performs a pre-order traversal of the BST and returns an array of values.
- `postOrder()`: Performs a post-order traversal of the BST and returns an array of values.

## Graph

A `Graph` is a data structure consisting of vertices and edges. It has the following methods:

- `addVertex(vertex)`: Adds a vertex to the graph.
- `addEdge(vertex1, vertex2)`: Adds an edge between two vertices.
- `removeVertex(vertex)`: Removes a vertex from the graph.
- `hasEdge(vertex1, vertex2)`: Checks if there is an edge between two vertices.
- `removeEdge(vertex1, vertex2)`: Removes an edge between two vertices.
- `display()`: Displays the vertices and their adjacent vertices in the graph.
- `depthFirstSearch(startVertex)`: Performs depth-first search (DFS) traversal starting from a given vertex and returns an array of visited vertices.
- `breadthFirstSearch(startVertex)`: Performs breadth-first search (BFS) traversal starting from a given vertex and returns an array of visited vertices.
- `shortestPath(vertex1, vertex2)`: Finds the shortest path between two vertices using BFS and returns the path length.