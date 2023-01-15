const formAdduser = document.getElementById('add-new-user')
const loginForm = document.getElementById('loginForm')


// Add a new task
const addTask = async (Newtasks) => { 
  await fetch(`https://jsonrepository-production.up.railway.app/tasks`, {
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        "email": Newtasks.currentUSEREmail,
        "taskNum": Newtasks.taskNum,
          "description": Newtasks.description,
          "taskDate": Newtasks.taskDate,
          "taskStatus": Newtasks.taskStatus,
      })
  })
  window.open('taskmanager.html', '_self')
}

const modifyTask = async (tasks) => { 
  await fetch(`https://jsonrepository-production.up.railway.app/tasks/${tasks.id}`, {
        method: "PUT",
        body: JSON.stringify({
          "email": tasks.eemail,
          "taskNum": tasks.taskNum,
      "description": tasks.description,
      "taskDate": tasks.taskDate,
      "taskStatus": tasks.taskStatus,
        }         
        ), 
        headers: {
          "Content-Type": "application/json"}
      })    
      window.open('taskmanager.html', '_self')

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
    let eemail = tasks.email

    
    form.addEventListener('submit', (event) => {
      event.preventDefault()
    
      const taskNum = form.elements['task-number'].value
      const description = form.elements['descriptionSET'].value
      let taskDate = form.elements['task-date'].value
      let taskStatus = form.elements['task-status'].value
      let taskDateFormatted = convertDate(taskDate)
      taskDate = taskDateFormatted
      

         modifyTask ({id, taskNum, description, taskDate, taskStatus, eemail})
    })
}

const buttonADD = async () => {
  const apiResponse = await fetch(`https://jsonrepository-production.up.railway.app/tasks/`)
  const user = await apiResponse.json()
  let currentUSER = localStorage.getItem("currentUserID")
  let currentUSEREmail = user[currentUSER-1].email
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
  
       addTask({ taskNum, description, taskDate, taskStatus, currentUSEREmail})
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
  window.open('taskmanager.html', '_self')}

const buttonAddUser = async () => {
  const apiResponse = await fetch('https://jsonrepository-production.up.railway.app/tasks')
  const users = await apiResponse.json()
  const newUserMail = formAdduser.elements['newUserMail'].value
  const newUserpassword = formAdduser.elements['newUserPassword'].value
  const newUserPasswordConfirming = formAdduser.elements['newUserPasswordConfirm'].value

  let findEmail = users.find(function (valor) {
    if (valor.email === newUserMail) return true
    return false
  })

  if (findEmail === undefined) {
    if (newUserpassword === newUserPasswordConfirming && newUserPasswordConfirming != null) {
      await fetch("https://jsonrepository-production.up.railway.app/tasks", {
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "password": newUserpassword,
      "email": newUserMail,
    })
  })
  location.reload();
    } else { 
      alert("As senhas não são iguais")
    }
  } else {
    alert("Esse email já está cadastrado")
  }  
}

const loginButton = async() => {
     const tryEmail = loginForm.elements['loginEmail'].value
    const tryPassword = loginForm.elements['loginPassword'].value

    verifyUser({tryEmail, tryPassword})
  
}


const verifyUser = async (tryUser) => { 
  const apiResponse = await fetch('https://jsonrepository-production.up.railway.app/tasks')
  const users = await apiResponse.json()


  let findEmail = users.find(function (valor) {
    if (valor.email === tryUser.tryEmail) return true
    return false
  })

  if (findEmail === undefined) {
    alert("email não encontrado")
  } else {
    if (findEmail.password === tryUser.tryPassword) {
     let currentUserID = findEmail.id
      localStorage.setItem("currentUserID", currentUserID)
      window.open('taskmanager.html', '_self')
      

    } else {
      alert("Senha incorreta")
    }
  }
}

const form = document.getElementById('add-new-task')

function reload() {
  const content = document.getElementById('content')
  content.innerHTML = `<div class="row cabecalho">
  <div class="col-2">Núm</div>
  <div class="col-3">Descrição</div>
  <div class="col-3">Data de Entrega</div>
  <div class="col-3">Status<select id="statusFilter" onchange="getTasks()">
    <option value="void" selected="true"></option>
    <option value=" ">Todos</option>
    <option  value="Concluído">Concluído</option>
    <option value="Em-Andamento">Em andamento</option>
    <option value="Stopped">Stopped</option>
</select></div>
  <div class="col-1">Ação</div>
</div>  `
}

const getTasks = async () => { 
 
  const apiResponse = await fetch(`https://jsonrepository-production.up.railway.app/tasks/`)
  const user = await apiResponse.json()
  const Useremail = user.email
  let currentUSER = localStorage.getItem("currentUserID")
  let statusFilter = document.getElementById('statusFilter').value

  

  const username = document.getElementById('userName')
 username.innerHTML = `Usuário: ${user[currentUSER-1].email}`

 let tasks = user.filter(function (findTasks) {
  if (user[currentUSER-1].email === findTasks.email && findTasks.description != undefined) {
    return true
  }
  return false
})

let tasksByStatus = tasks.filter(function(findTasks){
  if (findTasks.taskStatus === statusFilter) {
    return true
  }
  return false
})

let tasksByStatusFinal
if (statusFilter === " ") {
  tasksByStatusFinal = tasks
  reload()
} else {
  tasksByStatusFinal = tasksByStatus
  reload()
}

  // Sort Tasks by task numbers
  let tasksSorted = tasksByStatusFinal.sort((a,b) => a.taskNum - b.taskNum);
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