let $ = selector => document.querySelector(selector)
let $$ = selector => document.querySelectorAll(selector)


let form = $('form')
console.log(form)

let addTask = (e) =>{
   e.preventDefault()
   let valueTask = $('.inputTask').value
   console.log(valueTask)
   let ulTasks = $('.showTasks')
   ulTasks.innerHTML += `<ul>
                           <li>${valueTask}</li>
                         </ul>`
} 

$('.submit').addEventListener('click', addTask)