/* 

A/B Testing:
- A/B testing is a method of comparing two versions of an item, such as a website or app interface, to determine which performs better.
- Temporary solution
- We need: 
    a)metric that defines if the test was succesfull or not (lead count)
    b)period of time
    c)variant (not just 2 versions of a website, maybe 5 and send 25% of traffic each)
- We shouldn't use A/B testing for everything

Dificulties:
1) New effect: time taken to adjust to new UI for example (it's normal to believe old version is better)
2) Enough traffic: we should ensure that every variant will have enough traffic in time to check the results
3) Efficiency metrics: how to define with variant of the app/site is better
4) Period: define the period of time

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

Unit Testing:
- Regression testing: testing when we ensure that the previos functionality with new changes is not broken

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

JEST:
- Jest is used as JavaScript library for unit testing. It provides an easy way to run tests using any test runner.

describe('str', function(){}):
    - It groups together related tests.

test('should/shouldn't', function(){}):
    - It represents an individual unit of work.

expect():
    - Used within test() functions to compare actual output against expected output.
    .toBe() ==> last call, otherwise is bad practice
    .toEqual() ==> not deep comparisson
    .etc...

    other Matchers:
    https://jestjs.io/docs/expect#matchers


beforeAll:
    Runs once before all tests in the block are executed (if used in DESCRIBE block, otherwise only when file is compiled)
afterAll:

    Runs once after all tests in the block are executed (if used in DESCRIBE block, otherwise only when file is compiled)

mock: a copy of function or object, with definite behaviour

spy: an object that defines how we interact with an object (???)


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

Split Testing:
- A method of testing where a single product or service is divided into two groups, known as the control and test group.

Bucket Testing:
????

*/