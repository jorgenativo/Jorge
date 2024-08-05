function mostrarInfo(){
  
 fetch('https://swapi.dev/api/films')
 .then (response => response.json())
 .then(data =>{
  

 let contador=1; 
  data.results.forEach(element => {
   document.getElementById("pelicula"+contador).innerHTML+="<br>" +element.title;
   document.getElementById("prologo"+contador).innerHTML+="<br>" +element.opening_crawl;
   console.log(element.director);
   contador++;
  });
 })
}
let desplegable = document.createElement("select");
desplegable.className+= "items";

// contenedor.innerHTML = "Se está recuperando la información...";
// contenedor.innerHTML = "";