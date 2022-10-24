//=====================VARIABLES========================

let txtAjout = document.querySelector("#txtAjout");
let btnAjout = document.querySelector("#btnAjout");

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

// function editTodo(todo) {
//   console.log(todo);

//   let newTask = prompt("entrez la modification souhaitée");

//   todo.childNodes[0].textContent = newTask;
// }

const editTodo = (todo) => {

  const myModal = `
    <div id="block-modif">
      <input type="text" class="change-txt">
      <div class="boutons-modif">
          <button class="modif-valid">Valider</button>
          <button class="cancel-valid">Annuler</button>
      </div>
    </div>
 `;
 document.querySelector('#modal').innerHTML = myModal




 // appeler mes variables (boutons)
let validNewTask= document.querySelector ('.modif-valid')
let cancelNewTask= document.querySelector ('.cancel-valid')

let btnModif = document.querySelector("#btnModif");



// validNewTask.onclick = (e) => {
 
// }

// assigner mes cliques

validNewTask.addEventListener ('click', function(){
  let textNewTask = document.querySelector ('.change-txt')
  let newTask = textNewTask.value;


    todo.childNodes[0].textContent = newTask;
    console.log(newTask);
    console.log(textNewTask);
    console.log(todo);
    document.querySelector('#modal').style.display = 'none';
    // myModal.classList.add('disparaitre')


})

cancelNewTask.onclick = (e) => {
 document.querySelector('#modal').style.display = 'none';
}
}

