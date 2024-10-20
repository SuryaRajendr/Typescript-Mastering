// --------------- function
function cal (a:number, b: number) {
    return a+b
} // function cal(a: number, b: number): number

function cal2 (a:number, b: number): number {
    return a+b
} 

function cal3 (a:number, b: number): number {
    return "s" // Type 'string' is not assignable to type 'number'
} 

function cal4 (a:number, b: number): void {
    return a+b // Type 'number' is not assignable to type 'void'.
} 

function cal5 (a:number, b: number): number { // 'b' is declared but its value is never read. due to enable -   "noUnusedParameters": true,   in tasconfig.json
    return a  
}

function cal6 (income: number): number {
    if(income < 50_000)
    return income
} // Function lacks ending return statement and return type does not include 'undefined'.ts(2366)


cal5(2,3,4) // Expected 2 arguments, but got 3.ts(2554)