class Stack {
    constructor() {
        //main stack to store values
        this.items = [];
        //auxiliar array to store minimum values
        this.minStack = [];
        //auxiliar array to store maximum values
        this.maxStack = [];
    }

    //adds value to stack
    push(value) {
        this.items.push(value);
        //first element always gets add to minStack
        if (this.minStack.length === 0 || value <= this.getMin()) this.minStack.push(value);
        //first element always gets add to maxStack
        if (this.maxStack.length === 0 || value >= this.getMax()) this.maxStack.push(value);

    }

    //deletes last value in stack
    pop() {
        if (this.isEmpty()) return "No values in stack";

        const removedElement = this.items.pop();
        //if we current minimum value is the same in stack that in minStack
        //we also remove from minStack
        if (removedElement === this.getMin()) this.minStack.pop();
        //if we current maximum value is the same in stack that in maxStack
        //we also remove from maxStack
        if (removedElement === this.getMax()) this.maxStack.pop();
        return removedElement;
    }

    //returns value of last index in stack
    peek() {
        if (this.isEmpty()) return "No values in stack";
        return this.items[this.items.length - 1];
    }

    //returns true if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    //returns amount of values in stack
    size() {
        return this.items.length;
    }

    //returns minimum value in stack
    getMin() {
        if (this.minStack.length === 0) return "No values in stack";
        //we return the value at last index of auxiliary minStack
        return this.minStack[this.minStack.length - 1];
    }

    //returns minimum value in stack
    getMax() {
        if (this.maxStack.length === 0) return "No values in stack";
        //we return the value at last index of auxiliary maxStack
        return this.maxStack[this.maxStack.length - 1];
    }
}

// const stack = new Stack();

// stack.push(5)

// console.log(`
// ************************** \n
// with one value
// items: ${stack.items} || minimum: ${stack.getMin()} || maximum: ${stack.getMax()}`);

// stack.push(4); stack.push(6)

// console.log(`
// ************************** \n
// with two values
// items: ${stack.items} || minimum: ${stack.getMin()} || maximum: ${stack.getMax()}`);

// console.log(`
// ************************** \n
// last value: ${stack.peek()} || size: ${stack.size()} || isEmpty: ${stack.isEmpty()}`);

// stack.pop()

// console.log(`
// ************************** \n
// after one pop
// last value: ${stack.peek()} || size: ${stack.size()}`);

// stack.pop(); stack.pop()

// console.log(`
// ************************** \n
// after popping 2 times
// last value: ${stack.peek()} || size: ${stack.size()} || isEmpty: ${stack.isEmpty()}`);

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(value) {
        return this.items.push(value);
    }
    dequeue() {
        if (this.items.length === 0) return "No more values in queue";
        return this.items.shift();
    }
    peek() {
        if (this.items.length === 0) return "No more values in queue";
        return this.items[this.items.length - 1];
    }
}

// const queue = new Queue()

// queue.enqueue("first value")

// console.log(`
// ************************** \n
// with 1 value
// last value: ${queue.peek()}`);

// queue.enqueue("second value")

// console.log(`
// ************************** \n
// with 2 values
// last value: ${queue.peek()}`);

// queue.dequeue()

// console.log(`
// ************************** \n
// after 1 dequeue of first element
// last value: ${queue.peek()}`);

// queue.dequeue()

// console.log(`
// ************************** \n
// after 1 dequeue of another element
// last value: ${queue.peek()}`);

class NodeLinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        let node = new NodeLinkedList(value)
        //pointer that is linked to the first element in list
        let current = this.head
        //if there is nothing in current, we asign the node to be the head
        if (!current) {
            this.head = node
            return node
        } else {
            while (current.next) {
                //we keep 'moving forward' in list as long as we have some value in next property
                current = current.next
            }
            //we assign the value (node) to the last next property (the one that is null), and we return the node
            current.next = node
            return node
        }
    }

    delete() {
        //current points at the first element in list
        let current = this.head
        //if there is no element we retur null (list is empyy)
        if (!current) return null
        if (!current.next) {
            //we check for next property in current, if it is null it means
            //there is only one element in list. then, we assign head.value to variable value and set head to be null (we delete it)
            let value = this.head.value
            this.head = null
            return value
        }
        while (current.next.next) {
            //we keep 'moving forward' in list as long as we have some value in next property of the following item 
            current = current.next
        }
        //we store the last value of next in value variable
        let value = current.next.value
        //we delete the value of last next property
        current.next = null
        //return deleted value
        return value
    }

    search(value) {
        let current = this.head
        while (current) {
            //we iterate over the list and if we find a match, we return it
            if (current.value === value) return current.value
            current = current.next
        }
        return 'Value not existing in list'
    }

    getAll() {
        let current = this.head;
        //auxiliar variable to store every value in the list
        const result = [];
        while (current) {
            //while we have values, we push them to result and keep moving forward
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

    infiniteCycle() {
        //two pointers linking to the head
        let slow = this.head
        let fast = this.head
        //while there is something in fast or fast.next, we keep iterating, otherwise it meas it reached the last item in LinkedList
        while (fast !== null && fast.next !== null) {
            //slow moves one step at a time, fast moves two steps at a time
            slow = slow.next
            fast = fast.next.next
            //if they coincide, it meas there is a loop
            if (slow === fast) return true
        }
        return false
    }
}

// const linkedList = new LinkedList()

// console.log(`
// ************************** \n
// linked list (empty): ${linkedList.getAll()}`);

// linkedList.insert("firstValueAdded"); linkedList.insert("secondValueAdded"); linkedList.insert("thirdValueAdded"); linkedList.insert("fourthValueAdded")

// console.log(`
// ************************** \n
// linked list (4 items): ${linkedList.getAll()}`);

// linkedList.delete()

// console.log(`
// ************************** \n
// linked list (after deleting last item): ${linkedList.getAll()}`);

// console.log(`
// ************************** \n
// linked list (searching by real value): ${linkedList.search("secondValueAdded")}`);

// console.log(`
// ************************** \n
// linked list (searching by non existing value): ${linkedList.search("fourthValueAdded")}`);

// console.log(`
// ************************** \n
// has infinite cycle: ${linkedList.infiniteCycle()}`);

// const exampleNode1 = linkedList.insert(1)
// const exampleNode2 = linkedList.insert(2)
// const exampleNode3 = linkedList.insert(3)
// exampleNode3.next = exampleNode1

// console.log(`
// ************************** \n
// has infinite cycle (after corrupting nodes): ${linkedList.infiniteCycle()}`);

class NodeBinarySearchTree {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new NodeBinarySearchTree(data);
        //if root is null, tree is empty. newNode becomes root
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            //if data is less than current node and left is empty, we store newNode in left
            if (data < current.data) {
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }
                //we move pointer to the left of current branch if left is not empty
                current = current.left;
                //if data is greater than current node and right is empty, we store newNode in right
            } else if (data > current.data) {
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }
                //we move pointer to the right of current branch if right is not empty
                current = current.right;
            } else {
                //if data is same value as current.data, we store them in left
                if (current.left === null) {
                    current.left = newNode;
                    return;
                }
                //we move pointer to the left of current branch if left is not empty
                current = current.left;
            }
        }
    }

    search(data) {
        let current = this.root;
        //as long as current exists and its data is different from new data, we iterate
        while (current && current.data !== data) {
            //if data is lesser than current.data we move to the left
            if (data < current.data) {
                //change pointer
                current = current.left;
                //else, data is greater than current.data we move to the right
            } else {
                //change pointer
                current = current.right;
            }
            //if there is nothing in current, we return null (tree is empty)
            if (current === null) {
                return null;
            }
        }
        //outside the loop, once it's over we return data from current node
        return current.data;
    }

    inOrder() {
        //if tree is empty, returns null
        if (this.root == null) {
            return null;
        } else {
            let result = new Array();
            //helper function that takes current node as parameter
            function traverseInOrder(node) {
                //checks left side of branch and pushes its data if it doesn't have left child
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                //checks right side of branch recursively (and we push its data if it doesn't have left child)
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        }
    }

    preOrder() {
        if (this.root == null) {
            return null;
        } else {
            let result = new Array();
            function traversePreOrder(node) {
                //first pushes data from the current node
                result.push(node.data);
                //then moves to the left branch and pushes data
                node.left && traversePreOrder(node.left);
                //after that moves to the right branch and pushes data
                node.right && traversePreOrder(node.right);
            }
            traversePreOrder(this.root);
            return result;
        }
    }

    postOrder() {
        if (this.root == null) {
            return null;
        } else {
            let result = new Array();
            function traversePostOrder(node) {
                //moves through left branch and pushes data if it has no children
                node.left && traversePostOrder(node.left);
                //moves through right branch and pushes data if it has no children
                node.right && traversePostOrder(node.right);
                result.push(node.data);
            }
            traversePostOrder(this.root);
            return result;
        }
    }
}

function validBinarySearchTree(node, min = null, max = null) {
    if (!node) return true;
    if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) return false;
    return (validBinarySearchTree(node.left, min, node) && validBinarySearchTree(node.right, node, max));
}

// const binarySearchTree = new BinarySearchTree()

// binarySearchTree.insert(1134); binarySearchTree.insert(665); binarySearchTree.insert(742);
// binarySearchTree.insert(271); binarySearchTree.insert(794); binarySearchTree.insert(931);
// binarySearchTree.insert(967); binarySearchTree.insert(371); binarySearchTree.insert(987);
// binarySearchTree.insert(530); binarySearchTree.insert(572); binarySearchTree.insert(12);
// binarySearchTree.insert(132); binarySearchTree.insert(132); //duplicate on purpose to see behaviour

// console.log(`in-order traverse: ${binarySearchTree.inOrder()}
// post-order traverse: ${binarySearchTree.postOrder()}
// pre-order traverse: ${binarySearchTree.preOrder()}
// search existing value: ${binarySearchTree.search(12)}
// search non-existing value: ${binarySearchTree.search(9999)}
// is Binary Search Tree: ${validBinarySearchTree(binarySearchTree.root)}`);

class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set()
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1)

        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2)

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + [...this.adjacencyList[vertex]])
        }
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return

        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    hasEdge(vertex1, vertex2) {
        return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    depthFirstSearch(startVertex) {
        const visited = {};
        const result = [];

        const dfsTraversal = (vertex) => {
            //if there is no vertex, return since there is nothing to traverse (breakcase for recursion)
            if (!vertex) return;
            //add property "vertex" with value 'true' to object visited
            visited[vertex] = true;
            //push visited vertex to auxiliary array
            result.push(vertex);
            //iterate every property in adjacencyList at the given vertex
            for (const neighbor of this.adjacencyList[vertex]) {
                //if it doesn't show up in visited object, we keep invoking helper function
                if (!visited[neighbor]) dfsTraversal(neighbor);
            }
        };
        dfsTraversal(startVertex);
        return result;
    }

    breadthFirstSearch(startVertex) {
        const visited = {};
        const result = [];
        const queue = [startVertex];
        //start by marking the first vertex as visited in visited object
        visited[startVertex] = true;
        //while queue has elements, we iterate
        while (queue.length) {
            //we remove first element of queue array and push it to result array
            const vertex = queue.shift();
            result.push(vertex);
            //we loop every vertex in main adjacencyList, if that vertex doesn't show up in visited object
            //we add it and mark it as "visited", then push that vertex to queue auxiliary array variable
            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
        return result;
    }

    shortestPath(vertex1, vertex2) {
        const visited = new Set([vertex1])
        const queue = [[vertex1, 0]]

        while (queue.length > 0) {
            const [node, distance] = queue.shift()

            if (node === vertex2) return distance;

            for (let neighbor of this.adjacencyList[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor)
                    queue.push([neighbor, distance + 1])
                }
            }
        }
        return -1
    }
}

// const graph = new Graph()
// graph.addVertex("A"); graph.addVertex("B"); graph.addVertex("C"); graph.addVertex("D"); graph.addVertex("E")

// graph.addEdge("A", "B"); graph.addEdge("B", "C"); graph.addEdge("C", "D"); graph.addEdge("D", "E")

// console.log(`DFS starting from C: ${graph.depthFirstSearch("C")}`);
// console.log(`BFS starting from C: ${graph.breadthFirstSearch("C")}`);

// console.log(`shortest path from A to E: ${graph.shortestPath("A", "E")}`);
// console.log(`shortest path from A to non-existing Z": ${graph.shortestPath("A", "Z")}`);

// console.log(`
// **************
// Full Graph:
// `);
// graph.display()
// console.log(`
// **************
// `);

// console.log(`Do A and B have edges?: ${graph.hasEdge("A", "B")}`)
// console.log(`Do A and C have edges?: ${graph.hasEdge("A", "C")}`)

// graph.removeEdge("A", "B")

// console.log(`
// **************

// Full Graph (after removing edge from A to B):
// `);
// graph.display()
// console.log(`
// **************
// `);

// graph.removeVertex("B")

// console.log(`Full Graph (after removing vertex B):
// `);
// graph.display()
