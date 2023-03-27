let $ = selector => document.querySelector(selector)
let $$ = selector => document.querySelectorAll(selector)


let form = $('form')
console.log(form)

let addTask = (e) =>{
   e.preventDefault()
   let valueTask = $('.inputTask').value
   console.log(valueTask)
   let divTasks = $('.showTasks')
   divTasks.innerHTML += `<div class="column is-flex is-justify-content-space-between is-align-content-center my-3">
                              <h5>${valueTask}</h5>
                              <button class='button has-background-danger-dark has-text-white-bis'>X</button>
                         </div>`
} 

$('.submit').addEventListener('click', addTask)