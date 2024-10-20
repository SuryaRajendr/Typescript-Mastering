//--------------------------- object

let employee = {id:1}
employee.name // Property 'name' does not exist on type '{ id: number; }

let employee1: {
    id: number,
    name: string
} = {id:1} // Property 'name' is missing in type '{ id: number; }' but required in type '{ id: number; name: string; }
employee1.name = 'surya'


let employee2: {
    id: number,
    name: string
} = {id:1 , name: 'surya'} // fair way to use
employee1.name = 'surya'

let employee3: {
    readonly id: number,
    name: string
} = {id:1 , name: 'surya'}
employee3.id = 0 // Cannot assign to 'id' because it is a read-only property.
