// type Employee = {
//     readonly id: number,
//     name: string
// }

// let employee: Employee = { 
//     id:1 , name: 'surya'
// }

type Employee = {
    readonly id: number, // `id` is a read-only property, meaning once set, it cannot be modified.
    name: string         // `name` is a regular property that can be changed.
}

let employee1: Employee = { 
    id: 1,               // Assigning `id` as 1.
    name: 'surya'        // Assigning `name` as 'surya'.
}