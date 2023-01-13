const form = document.getElementById('add-new-task')


// Add a new task
const addTask = async (tasks) => { 
  await fetch("https://jsonrepository-production.up.railway.app/tasks", {
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "taskNum": tasks.taskNum,
      "description": tasks.description,
      "taskDate": tasks.taskDate,
      "taskStatus": tasks.taskStatus
    })
  })
  window.open('index.html', '_self')
}

const modifyTask = async (tasks) => { 
  await fetch(`https://jsonrepository-production.up.railway.app/tasks/${tasks.id}`, {
        method: "PUT",
        body: JSON.stringify({
          "taskNum": tasks.taskNum,
      "description": tasks.description,
      "taskDate": tasks.taskDate,
      "taskStatus": tasks.taskStatus
        }         
        ), 
        headers: {
          "Content-Type": "application/json"}
      })    
      window.open('index.html', '_self')

}


// Made to show in form the existing information
const editTask = async (id) => {
  const apiResponse = await fetch(`https://jsonrepository-production.up.railway.app/tasks/${id}`)
  const tasks = await apiResponse.json()

    let title = document.getElementById("modal-header-text")
    title.innerHTML = "Editar tarefa"
    let taskDescription = document.getElementById("descriptionSET")
    taskDescription.setAttribute("value", tasks.description)
    let TaskNumber = document.getElementById("task-number")
    TaskNumber.setAttribute("value", tasks.taskNum)
    let taskDate = document.getElementById("task-date")
    let taskdateformat = convertDateBack(tasks.taskDate)
    taskDate.setAttribute("value", taskdateformat)
    let taskStatus = document.getElementById("task-status")
    if (tasks.taskStatus === "Em Andamento") {
      tasks.taskStatus = "Em-Andamento" 
    }
    taskStatus.value = tasks.taskStatus

    
    form.addEventListener('submit', (event) => {
      event.preventDefault()
    
      const taskNum = form.elements['task-number'].value
      const description = form.elements['descriptionSET'].value
      let taskDate = form.elements['task-date'].value
      let taskStatus = form.elements['task-status'].value
      let taskDateFormatted = convertDate(taskDate)
      taskDate = taskDateFormatted
      

         modifyTask ({id, taskNum, description, taskDate, taskStatus})
    })
}


const buttonADD = async () => {
  let title = document.getElementById("modal-header-text")
  title.innerHTML = "Adicionar nova tarefa"
  form.addEventListener('submit', (event) => {
    event.preventDefault()
   
  
    const taskNum = form.elements['task-number'].value
    const description = form.elements['descriptionSET'].value
    let taskDate = form.elements['task-date'].value
    let taskStatus = form.elements['task-status'].value
    let taskDateFormatted = convertDate(taskDate)
    taskDate = taskDateFormatted
  
       addTask({ taskNum, description, taskDate, taskStatus})
  })
  let taskDescription = document.getElementById("descriptionSET")
  taskDescription.setAttribute("value", "")
  let TaskNumber = document.getElementById("task-number")
  TaskNumber.setAttribute("value", "")
  let taskDate = document.getElementById("task-date")
  taskDate.setAttribute("value", "")
  let taskStatus = document.getElementById("task-status")
  taskStatus.value = ""
}

const eraseTask = async (id, num) => { 
  let confirmExclude = document.getElementById("confirmExclude")
  let modalExclude = document.getElementById("modalexclude")

  modalExclude.innerHTML = `<div class="modal-body" id="modalexclude">
  Tem certeza que deseja excluir a tarefa ${num}?
</div>`

  confirmExclude.addEventListener('click',(event) => {
    confirmingExclude(id)
  })
     
}  

const confirmingExclude = async (id) => {
  await  fetch(`https://jsonrepository-production.up.railway.app/tasks/${id}`, {
    method: "DELETE",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    } 
  })
  window.open('index.html', '_self')}
   
   

const getTasks = async () => { 
  const apiResponse = await fetch('https://jsonrepository-production.up.railway.app/tasks')
  const tasks = await apiResponse.json()
  // Sort Tasks by task numbers
  let tasksSorted = tasks.sort((a,b) => a.taskNum - b.taskNum);
  const content = document.getElementById('content')
  // Counter to make it vary between white and grey
  let index = 1;
  let grey = ` grey`
  let statusColor = `id="concluido"`

  

  tasksSorted.forEach((task) => {
    let status = task.taskStatus
    switch (status) {
      case "Em-Andamento":
        status = "Em Andamento";
        statusColor = `id="ongoing"`;
        break;
      case   "Stopped":
        statusColor = `id="stopped"`
        break;
      case  "Concluído":
      statusColor = `id="concluido"`
      break;
    }
   
    index % 2 !== 0 ? grey = ` ` : grey = ` grey`
    index = index +1;
      
    content.innerHTML = content.innerHTML + `
    <div class="row items${grey}">
            <div class="col-2" id="num">${task.taskNum}</div>
            <div class="col-3">${task.description}</div>
            <div class="col-3">${task.taskDate}</div>
            <div class="col-3 status"${statusColor}>${status}</div>
            <div class="col-1">
              <button onclick="editTask(${task.id})" class="hiddenButton"><img src="img/Vector (3).png" id="edit-button"  data-bs-toggle="modal" data-bs-target="#exampleModal" ></button>
              <button onclick="eraseTask(${task.id},${task.taskNum})" class="hiddenButton" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ><img src="img/Vector (4).png" id="deletebutton"  ></button>
            </div>
        </div>
    `
  })
}

function convertDate(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat);
  return [pad(d.getUTCDate()), pad(d.getUTCMonth()+1), d.getUTCFullYear()].join('/');
}

function convertDateBack(inputFormat) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat);
  return [d.getUTCFullYear() + "-" + pad(d.getUTCMonth()+1) + "-" + pad(d.getUTCDate())];
}
