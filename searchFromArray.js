const myTodos = ['Buy Bread', 'Go to Gym', 'Record Youtube Videos']
console.log(myTodos.indexOf('Buy bread')) //return -1 because 'bread' factor
console.log(myTodos.indexOf('Buy Bread')) // 0 or right index found
console.log(myTodos[myTodos.indexOf('Buy Bread')]) // will print out the quotation
// const newTodos = [{

//     title: 'Buy Bread' ,
//     isDone: 'false',
// }, {
//     title: 'Record Youtube Videos',
//     isDone: 'true',
// }, {
//     title: 'Go to the Gym',
//     isDone: 'false',
// } ]
// const index = newTodos.findIndex(function(todo, index){
//     return todo.title ==='go to Gym'
// }) //todo is a variable name, which can be any name and it has access of index.

// console.log(index)