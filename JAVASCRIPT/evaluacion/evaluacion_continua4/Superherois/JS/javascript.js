function nomHeroi(i){
  fetch("./JSON/superheroes.json")
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
      document.write(data.members[i].name);
  })
  .catch((error) => {
      console.error("Error al llegir l'arxiu JSON: ", error);
  })
}

function listaHeroes(){
  fetch("./JSON/superheroes.json")
  .then((response) => response.json())
  .then((data) => {
      console.log(data.members[0].powers);

      document.getElementById("super1").innerText = data.members[0].name;
      document.getElementById("poder1").innerText = data.members[0].powers;

      document.getElementById("super2").innerText = data.members[1].name;
      document.getElementById("poder2").innerText = data.members[1].powers;

      document.getElementById("super3").innerText = data.members[2].name;
      document.getElementById("poder3").innerText = data.members[2].powers;
      
      })
  .catch((error) => {
      console.error("Error al llegir l'arxiu JSON: ", error);
  })
}