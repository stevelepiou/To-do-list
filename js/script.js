//=====================VARIABLES========================

let txtAjout = document.querySelector("#txtAjout");
let btnAjout = document.querySelector("#btnAjout");
let btnModif = document.querySelector("#btnModif");
let colGau = document.querySelector(".col-gau");
let colDroi = document.querySelector(".col-droi");
let suppDiv = document.querySelector("#supprimeP");
let countTodo = 1;

btnAjout.addEventListener("click", function () {
  console.log("test");

  //creation d'une nouvelle tâche avec div complète
  let nvlTache = document.createElement("div");
  nvlTache.id = `todo${countTodo}`;
  nvlTache.classList.add("exemple1");
  //intéraction input bouton
  nvlTache.innerHTML =
    "<p id='ajoutTxt' name='modifier' >" +
    txtAjout.value +
    "</p><div class='action'><a href='#' id='btnValide' onclick='removeTodo(todo" +
    countTodo +
    ")'><img class='valider' src='img/check.png' alt='' title='valider'></a><a href='#' id='btnModif' name='modifier' onclick='editTodo(todo" +
    countTodo +
    ")'><img class='modifier' src='img/modifier.png' alt='' title='modifier'></a><a href='#' id='btnSupp' onclick='deleteTodo(todo" +
    countTodo +
    ")'><img class='supprimer' src='img/croix.png' alt='' title='supprimer' ></a></div>";

  colGau.appendChild(nvlTache);
  let btnValide = document.querySelector("#btnValide");

  countTodo++;

  //bouton valider
  // btnValide.addEventListener('click',function(){
  //     colGau.removeChild(nvlTache)
  //     colDroi.appendChild(nvlTache)

  // })

  txtAjout.value = "";
});
function removeTodo(todo) {
  colDroi.appendChild(todo);
  colGau.removeChild(todo);
}

let btnSupp = document.querySelector("#btnSupp");

function deleteTodo(todo) {
  todo.remove();
}

function updateTask() {
  let newTask = prompt("entrez la modification souhaitée");
  para.textContent = newTask;
}

function editTodo(todo) {
  console.log(todo);

  let newTask = prompt("entrez la modification souhaitée");

  todo.childNodes[0].textContent = newTask;
}

// btnModif.addEventListener("click", function (){

//   let newTask= prompt('entrez la modification souhaitée')
//   para.textContent = newTask

// })
