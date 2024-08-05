 function listado(){
 fetch("./JSON/2024_pad_mdbas.json")
 .then((response) => response.json())
 .then((data) => {
     //console.log(data);
    //document.getElementById("cajita").innerHTML=data
    // document.write(data)
    distrito(data);
     
 })
 .catch((error) => {
     console.error("Error al leer el archivo JSON: ", error);
 })
}
 function distrito(data){


 data.forEach(element => {

    document.getElementById("cajita").innerHTML+=element.Nom_Districte+"<br>";
 });
 
}