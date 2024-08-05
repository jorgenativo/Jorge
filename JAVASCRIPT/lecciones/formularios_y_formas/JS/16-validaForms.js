// concentra totes les validacions
function valida(valor,control){
    switch(control){
        case "CP":
            validaCP(valor);
        }
    }
    
// valida control de Codi Postal
function validaCP(valor){
    console.log(valor);
    let patro =/^\d{5}$/;
    missatge(patro.test(valor),"missatge");
}

// mostra missatge
function missatge(msg, posicio){
    const punt = document.getElementById(posicio);
    if(msg){
        punt.className="--bs-success";
        punt.innerHTML="Correcte";
    }else{
        punt.className="--bs-danger";
        punt.innerHTML="ERROR!!!";
    }

}