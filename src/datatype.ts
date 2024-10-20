// ----------- Data types

let mark: number = 25;
let course: string = "Surya";
let is_published: boolean = true
let level; // if didnt declare it consists -  any


// any

function render(document) { // Parameter 'document' implicitly has an 'any' type.ts(7006)
    return "hi"
} // if we make -  "noImplicitAny": false, it will work out

function render2(document : any) { 
    return "hi"
}

// ----------- Array

let arr = [1,2,3,4] // without annonation automatically considering as - let arr: number[]
let arr2; // - let arr2: any
let arr3: number[] = [1,2,'3'] // Type 'string' is not assignable to type 'number'.ts(2322)


// tuples

let user: [number, string] = [10, 'surya']

user.push(5)

let user2: [number, string] = [10, 6, 'gjjh']


// enum
 /**
  * In TypeScript, an enum is a data structure that defines a set of named constants that can be used to represent a set of options for a given value.
  * Here are some examples of enums in TypeScript:
Numeric enums
Contain only number values for each member. For example, enum CardinalDirection 
{ North = 1, East, South, West, };.
String enums
Contain string values for each member. For example, 
enum CardinalDirection { North = 'N', East = 'E', South = 'S', West = 'W', };. 
Enums can be useful for: Documenting intent, Creating a set of distinct cases, Representing a set of options for a given value, and Making code more expressive. 
You can convert an enum into an array of values using the Object.values() method. You can also use a for-in loop to manually iterate over the values in an enum and add them to an array. 
  */

const enum arithmatic  { add = '+', sub = '-', mul = '*', div = '/'}
let addition:arithmatic = arithmatic.add
console.log(addition)
