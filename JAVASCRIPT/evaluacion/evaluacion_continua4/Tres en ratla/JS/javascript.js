let tablero= [["b","b","b"],["b","b","b"],["b","b","b"]]; 
let torn = 0; 

turno = (coordenada) => {
        if(tablero[coordenada[0]][coordenada[1]]=="b"){
        eliminaClasse(coordenada);
        
        if(torn%2==0){
            tablero[coordenada[0]][coordenada[1]]="X"
            afegeixClasse(coordenada, "blanco");
        }
        else{
            tablero[coordenada[0]][coordenada[1]]="O";
            afegeixClasse(coordenada, "negro");
        }
        torn++;
    }
    else{
        alert("hay una ficha jugada");
    }
}

iniciar = () => {
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            tablero[[i],[j]]="b";
        }
    }
    document.getElementById('posicion'+coordenada).className = document.getElementById('posicion'+coordenada).className.replace(/(?:^|\s)ver(?!\S)/g, '')
    
}

eliminaClasse = (coordenada) => {
   
    document.getElementById('posicion'+coordenada).className = document.getElementById('posicion'+coordenada).className
    .replace(/(?:^|\s)casilla(?!\S)/g, '')
}


afegeixClasse = (coordenada, color) => {
    document.getElementById('posicion'+coordenada).className += color;
}
function validar(){
    let vencedor = false;
    for(let i=0;i<3;i++){
        
        if((tablero[i][0]==tablero[i][1])&&(tablero[i][0]==tablero[i][2])&&(tablero[i][0]!="b")){
            vencedor = true;
        }
       
        if((tablero[0][i]==tablero[1][i])&&(tablero[0][i]==tablero[2][i])&&(tablero[0][i]!="b")){
            vencedor = true;
        }
        if((tablero[0][0]==tablero[1][1])&&(tablero[0][0]==tablero[2][2])
        ||(tablero[0][2]==tablero[1][1])&&(tablero[0][2]==tablero[2][0])
        &&(tablero[1][1]!="b")){
        vencedor = true;
    }
    return vencedor;
}
}