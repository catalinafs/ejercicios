// push() – Inserta un elemento al final del arreglo.
// unshift() – Inserta un elemento al inicio del arreglo.
// pop() – Remueve un elemento del final del arreglo.
// shift() – Remueve un elemento del principio del arreglo.
// slice() – Crea una copia sombra del arreglo.

const array = [
    0,
    'Keyner',
    'Bula',
    'Catalina',
    'Juandi',
    'Danna',
    1
]
  
//Array.prototype.push()
const push = array.push('Einer', 'chao')

//Array.prototype.unshift()
const unshift = array.unshift('hola', 'Issac')

//Array.prototype.pop()
/*
 -uncomment what is below to see the result in the array console.log()
 -descomentar lo que esta abajo para ver el resultado en el console.log() del array
*/
// const pop = array.pop()

//Array.prototype.shift()
/*
 -uncomment what is below to see the result in the array console.log()
 -descomentar lo que esta abajo para ver el resultado en el console.log() del array
*/
// const shift = array.shift()

//Array.prototype.slice()
const slice = array.slice(2,9)
console.log('console.log() slice')
console.table(slice)

console.log('console.log() array')
console.table(array)