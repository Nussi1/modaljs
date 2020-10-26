var wrapper=document.querySelector('#wrapper');
var inputToDo=document.querySelector('input');
var btnAdd=document.querySelector('btn');
var bringBack=document.querySelector('#bringBack');
var ulTasts=document.querySelector('.all_tasks');

wrapper.addEventListener('click',function(event){
    if(event.target.getAttribute('id')==='btn'){
        console.log('add button clicked')
        createElements()
    }
    if(event.target.getAttribute('id')==='bringBack'){
        console.log('hello brich back clicked')
    }
})

function createElements(inputToDo){
    var li=document.createElement('li')
    var inputCheck=document.createElement('input')
    inputCheck.type='checkbox'
    li.innerHTML=inputToDo.value

    li.appendChild(inputCheck)

    var icon=document.createElement('i')
    icon.setAttribute('class','fa fa-trash');
    li.appendChild(icon)


    ulTasks.appendChild(li)
}