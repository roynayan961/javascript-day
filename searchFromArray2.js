const newTodos = [{

    title: 'Buy Bread' ,
    isDone: false,
}, {
    title: 'Go to the Gym',
    isDone: false,
}, {
  
    title: 'Record Youtube Videos',
    isDone: true,
} ]
const index = newTodos.findIndex(function(todo, index){
    console.log(todo)                                            //to see find index how works we can log todo here like// console.log(todo)
    return todo.title ==='Go to the Gym'

}) //todo is a variable name, which can be any name and it has access of index.

console.log(index)
//findIndex() go through each element of the array like for each loop