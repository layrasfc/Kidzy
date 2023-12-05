

let entrar = document.querySelector("#login-button");

entrar.addEventListener('click', () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log(username, password)

  if (username === "admlogin" && password === "1234") {
    (window.location.href = './adm.html')
  } else {
    // O usuário não está logado
    alert("Usuário ou senha inválidos");
  }
});