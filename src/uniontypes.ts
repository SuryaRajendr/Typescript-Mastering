function kgToLbs(weight: number | string): number {
//weight. // in suggestion less

// narrowing
if ( typeof weight === 'number') {
    return weight*2.2
} else {
    return weight 
}
}

kgToLbs(10)
kgToLbs('10kg')


// intersection type

let store: number&string


// literall [specific & exact]
let weight: 100 = 101

