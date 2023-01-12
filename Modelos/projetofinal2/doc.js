const formAdduser = document.getElementById('add-new-user')
const loginForm = document.getElementById('loginForm')


const buttonAddUser = async () => {
  const newUserMail = formAdduser.elements['newUserMail'].value
  const newUserpassword = formAdduser.elements['newUserPassword'].value

  console.log(newUserMail, newUserpassword)

  await fetch("http://localhost:3000/user", {
    method: "POST",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "password": newUserpassword,
      "email": newUserMail,
      "tasks": []
    })
  })
}

const loginButton = async() => {
     const tryEmail = loginForm.elements['loginEmail'].value
    const tryPassword = loginForm.elements['loginPassword'].value

    verifyUser({tryEmail, tryPassword})
  
}
const currentUserID = 2


const verifyUser = async (tryUser) => { 
  const apiResponse = await fetch('http://localhost:3000/user')
  const users = await apiResponse.json()


  let findEmail = users.find(function (valor) {
    if (valor.email === tryUser.tryEmail) return true
    return false
  })

  if (findEmail === undefined) {
    console.log("email não encontrado")
  } else {
    if (findEmail.password === tryUser.tryPassword) {
      console.log("usuario valido")
      window.open('taskmanager.html', '_self')

    } else {
      console.log("Senha incorreta")
    }
  }
}

const form = document.getElementById('add-new-task')
const getTasks = async () => { 
  const apiResponse = await fetch(`http://localhost:3000/user/${currentUserID}`)
  const user = await apiResponse.json()
  const tasks = user.tasks
  const email = user.email

  const username = document.getElementById('userName')
 username.innerHTML = username.innerHTML + email

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