
function calcular(caracter){
 let cadena = sessionStorage.getItem("resultado");
 cadena+=caracter;
 sessionStorage.setItem("resultado",cadena);
 console.log(caracter);
 console.log(cadena);
 document.getElementById("display").value=cadena;
}
function resultado(){
 let cadena = sessionStorage.getItem("resultado");
 console.log(eval(cadena));
 document.getElementById("display").value=(eval(cadena));
}
function borrar(){
sessionStorage.setItem("resultado","");
document.getElementById("display").value="";
}
function numeroDeCaracteres(numero){
 contador=0; i=0;
 while(i<numero.length){
     if(numero.substr(i,1)==numero){contador++;}
     i++;
 }
 return contador;
}


