/* 

**************************
module system in nodeJS = 

ESM:
a)
-export = fn, arrowFn, class, variables
-export {fn, arrowFn, class, variables}

-export default const (don't need to specify)

-we can rename this way: export {something as otherThing}

-we can create a index.js file inside a folder with several other files we need to import
, in this index file we do export {module1, module2, module3}. index.js has to be on the same 
folder level

b)
-import {fn, arrowFn, class, variables} from './source'
-with export default: import const (no '{}') from './source', we can change the name of it

-mix of both ways: import defaultExport, {other things} from './source'

-we can rename this way: import {otherThing as yetAnotherThing} from './source'

-for a function that only needs to be initialized we can do:
import './source'

-if we need to import many things from one file, we can do:
import * as moduleName from './source' (we avoid lines of imports)

-in some cases we can import fn, just do: import ('module path'),
it will return a promise (async/await with try/catch or .then). but
in most cases we will use old syntax like 'require'


commonJS:
a)
-[like doing normal export in ESM]
module.exports.someValue = theValue
module.exports.someFn = theFn

-we can also do: exports.someValue = theValue (skip the 'module' part)

-[like doing export default in ESM]
module.exports = things to add

b)
-const {someValue} = require('./path')


-this is dynamic import:

let func = null;
if (op === 'minus') {
    func = require('./minus')
} else if {
    //... more conditions here for different operations
}

const func = require(`./${ops}`)



/////////////////////////

path examples=

1) './' or '../../'
2) '/' (absoluth path)
3) 'nameOfModule' (npm package...): from deepest folder in project to
the most superficial one (going 1 level up at a time)

require.resolve.paths('moduleName') just to check where it is installed


**************************
???????????????
1)creating a graph of dependencies
2)estimating
3)analyze models 
4)write modules state
5)run init modules
6)import itself

when we do run init modules nodeJS will execute
Evaluate() function
???????????????


**************************

require=

referencing Script or Module
specifier

require.clearCache()


**************************

Module --imports from--> ModuleB --imports from--> ModuleC--
imports from--> Module

(that code will work, semantically it's ok, nodeJS will only check
there is no stack overflow error)


**************************

-from ecmaScript6 we have 2 reserved word for variables (let and const)
before that, only var (hoisting, along with 'function' key word),
the purpose was to prevent runtime error back in the day ('90s).
it has global scope

var can be initialized, but not defined (no value to it), it is typed dynamically

-let doesn't hoist, local scope.
it can be redifined, but no redeclared

-const, local scope, no hoisting and no redefinition


**************************

PRIMITIVE DATA TYPES (7)

-number: (normal integer, hexadecimal, binary, float)
the Number Class, has different methods:

Number.MAX_VALUE, 
Number.Infinity, 
Number.-Infinity

another number value is 'NaN'

Number('some String')=> NaN
tyoeof NaN => 'number'

-string:
-boolean:
-null:
-undefined:
-symbol:
-bigint:

*/
