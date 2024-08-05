let tauler= [["b","b","b"],["b","b","b"],["b","b","b"]]; // guarda les posicions de les fitxes
let torn = 0; // controla a qui li toca tirar

turn = (coordenada) => {
    // Valida si ja hi ha alguna fitxa
    if(tauler[coordenada[0]][coordenada[1]]=="b"){
        eliminaClasse(coordenada); // Eliminem la classe
        
        // Controla quina fitxa (X o O) ha de registrar-se
        if(torn%2==0){
            tauler[coordenada[0]][coordenada[1]]="X"
            // Afegim classe de forma torn de div
            afegeixClasse(coordenada, "vermella");
        }
        else{
            tauler[coordenada[0]][coordenada[1]]="O";
            // Afegim classe de forma torn de div
            afegeixClasse(coordenada, "verda");
        }
        torn++;
    }
    else{
        alert("Ja hi ha una fitxa a la posició");
    }
}

iniciar = () => {
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            tauler[[i],[j]]="b";
        }
    }

    // Eliminem classe de fitxa
    document.getElementById('pos'+coordenada).className = document.getElementById('pos'+coordenada).className.replace(/(?:^|\s)ver(?!\S)/g, '')
    // Afegim classe de forma buida de div
}

eliminaClasse = (coordenada) => {
    // Eliminem classe de forma buida de div
    document.getElementById('pos'+coordenada).className = document.getElementById('pos'+coordenada).className
    .replace(/(?:^|\s)casella(?!\S)/g, '')
}

// Afegeix la classe que representa la fitxa (verda o vermella)
afegeixClasse = (coordenada, color) => {
    document.getElementById('pos'+coordenada).className += color;
}