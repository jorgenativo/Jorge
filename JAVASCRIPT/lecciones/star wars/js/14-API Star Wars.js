// fa petició a API i mostra informació

function mostrarInfoSW(){
    const contenidor = document.getElementById("contenidor"); // posició on s'afegiran les dades
    const url = 'https://swapi.dev/api/'

    contenidor.innerHTML = "S'està recuperant la informació...";
    fetch(url+document.getElementById("tipusElements").value)
    .then(response => response.json())
    .then((data) =>{
        //console.log(data);
        
        contenidor.innerHTML = "";
        data.results.forEach(element => {
            novaTargeta(element);
        });                    
    })
    .catch((error) => {
        console.error("Error al llegir l'arxiu JSON: ", error);
    })
}


// afegeix un nou element a la llista que decidim
function nouElement(element, id){
    const llista = document.getElementById(id);
    llista.appendChild(new Option(element,element));
}

// Crea una nova targeta
function novaTargeta(element){
    // Creació nova targeta
    let novaTargeta = document.createElement("div");
    novaTargeta.className+= "targeta";
    
    // DIV del títol
    let nouTitol = document.createElement("div");
    nouTitol.className+= "titol";

    // Afegim el títol. Si és film-->title, sinó-->name
    (Object.keys(element).includes("name"))?
    nouTitol.appendChild(document.createTextNode(element.name)):
    nouTitol.appendChild(document.createTextNode(element.title))
    novaTargeta.appendChild(nouTitol);
    
    // DIV d'altre camps
    // novaTargeta.appendChild(afegeixAltres(element.altresCamps));
    
    // Afegeix al final
    const list = document.getElementById("contenidor");
    list.insertBefore(novaTargeta, list.lastChild);
}

// Funció que afegeix els altres camps
function afegeixAltres(altres){
    let nouAltres = document.createElement("div");
    nouAltres.className+= "altres";
    
    altres.forEach(altre => {
        nouAltres.appendChild(document.createTextNode(altre)); // afegeix el nom.
        nouAltres.appendChild(document.createElement("br")); // afegeix un salt de línia
    });
    return nouAltres;
}

//---------------------------------------------------------------------------
function mostrarGats(){
    // const API_URL = `https://api.thecatapi.com/v1/`;
    const API_KEY = "live_0vGDfGPx89ZND1PLFD7rIaazEe0W1xviaZ2PtVC86gCHANlM85BXBomZCosRGjnM";
    
    const contenidor2 = document.getElementById("contenidor2"); // posició on s'afegiran les dades
    const url = 'https://api.thecatapi.com/v1/images/search'

    contenidor2.innerHTML = "S'està recuperant la informació...";
    fetch(url,{headers: {
        'x-api-key': API_KEY
    }})
    .then((response) => {return response.json();})
    .then((data) => {
        document.getElementById("breed_image").src = data[0].url;
    })
    .catch((error) => {
        console.error("Error al llegir l'arxiu JSON: ", error);
    })
}
