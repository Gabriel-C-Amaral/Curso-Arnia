let posts = []

const getPosts = async () =>{  
  const apiResponse = await fetch('http://localhost:3000/posts')
  const posts = await apiResponse.json()
  blogPost(posts)
}

const blogPost = (posts) => {
  posts.forEach((post) => {
    document.getElementById('posts').innerHTML += `<div class="content"><img src='${post.image}' class="image"/><div class="information"><div class="title">${post.title}</div> <div class="text">${post.text}</div></div></div>`
  })
}


const addPost = async () => {
  await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "title": document.getElementById('titulo').value,
          "author": document.getElementById('autor').value,
          "image": document.getElementById('imagem').value,
          "text": document.getElementById('texto').value
      })
  });       
}

