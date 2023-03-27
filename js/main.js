let $ = selector => document.querySelector(selector)
let $$ = selector => document.querySelectorAll(selector)


let form = $('form')
console.log(form)

let addTask = (e) =>{
   e.preventDefault()
   let valueTask = $('.inputTask').value
   console.log(valueTask)
   let divTasks = $('.showTasks')
   divTasks.innerHTML += `<div>
                           <h5>${valueTask}</h5>
                           <button>X</button>
                         </div>`
} 

$('.submit').addEventListener('click', addTask)