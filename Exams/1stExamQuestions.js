/* 

Topic: Node.js, V8 engine, NPM, Version system, and Module system

1. What is Node.js? What is the V8 engine? How does Node.js use the V8 engine to execute JavaScript code, and how does it contribute to its performance?

NodeJS = Runtine enviroment for Javascript to run server side applications
V8 = google's engine to run Javascript in front-end and back-end, it is a compiler for JS
V8 opitimization of code = 
1) function inlining (replacing a function call with the actual body of the function being called)
2) hidden classes = it's a representation of an object and the layout of its properties (name, position in memory, etc)
3) sparse- and non-sparse arrays = sparse arrays are better for memory, but worse for speed and access
                                   non-sparse arrays are worse for memory, but better for speed and accessing them
4) chaching = storing and reusing previously computed or fetched data (or an idempotent/pure fn)

SUMMARY FOR OPTIMIZATING CODE (as developer) =
1)respect order of properties when we initialize classes
2)no dynamic properties
3)multiple runs of the same method is better than 1 run of multiple methods
4)avoid sparse arrays

2. Explain the significance of NPM in the Node.js ecosystem and why it is considered a crucial tool.

NPM = Node Package Manager. Functionalities developed by others we can use. Uses caching to avoid installing same package twice

3. What is versioning in software development? Describe the MAJOR, MINOR, and PATCH versioning system commonly used in package management.

major.minor.patch = (x.y.z)
                    x = no backwards compatibility
                    y = new feature. keep deprecated FN, backwards compatible
                    z = minor patches, like refactoring

"package": "4.17.1", your project will always use version 4.17.1 of "package"
"package": "~3.2.0", your project will use up to version 3.2.9 of "package", but not higher like 3.3.0 (.y is the limit)
"package": "^2.1.0", your project will use up to 2.9.9 or project, but not higher like 3.0.0 (.x is the limit)

4. How do you use modules in JavaScript? How can you write your own module? Provide an overview of the module system in Node.js.

CLASS WAS NOT RECORDED

const variable = require("modulename")
const otherVariable = require("path/to/module")
module.exports = "variableToExport";

import module, {otherModule} from 'package'
import myOtherModule from 'path/to/otherFile'
import {variable, otherVariable} from 'path/to/differentFile'
export default'module' (one per file)
export 'otherModule' (several per file)

5. What are global modules in Node.js, and how do they differ from local modules? How do you interpret version specifications like "1.2.3", "~3.2.0", or "^2.1.0"?

A Node.js package that is installed globally on your system rather than being tied to a specific project
npm i -g myPckg (how to install them)

*/