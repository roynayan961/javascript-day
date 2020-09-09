const myArray = [1,2, 3, 4, 4, 5, 5, 6, 6, 7, 8, 9]
const mySet = new Set(myArray);
console.log(myArray)
console.log(mySet)
const uniqueArray = [...mySet]
console.log(uniqueArray)
const myAdd = new Set(uniqueArray)
myAdd.add(10)
myAdd.add('10')
myAdd.add([1,2,3,4])
myAdd.add({channelName:'javascript mystery'})
console.log(myAdd)
myAdd.delete(1)
console.log(myAdd)
const addedFinal = [...myAdd]
console.log(addedFinal) //mySet.clear() will delete all element from set
console.log(myAdd.has(15))
console.log(myAdd.size)
console.log(myArray[6])