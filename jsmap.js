const myObject = {};
const a= {}
const b = {}
myObject[a] = 'a'
myObject[b] = 'b'
console.log(myObject)
b[myObject] = 'c'
console.log(b)
const myMap = new Map([ ['name', 'john'], ['surname', 'doe']])
console.log(myMap)