function esCpValid(cp){
 console.log(cp);
 let patron=/^\d{5}$/;
return patron.test(cp);
}

function esEmailValid (email){
console.log(email);
let patron=/[^@ \t\r\n]+\w+@[^@ \t\r\n]+\w+\.[^@ \t\r\n]\w+/;
return patron.test(email);
}

function extreureNombresTelefon(frase){
 console.log(frase);
 let patron=/\(\d{3}\){1}\s\d{3}\-{1}\d{4}/g;
 return frase.match(patron);
}

function extraureDominiEmail(frase){
 console.log (frase);
 let patron=/(?<=@)[^@ \t\r\n]+\w+\.[^@ \t\r\n]\w+/g;
 return frase.match(patron);
}

function esTargetaCreditValida(frase){
 console.log (frase);
 let patron = /(\d{16})|((\d{4}\s){3}\d{4})/;
 return patron.test(frase);
}

function extraureHashtags(frase){
 console.log (frase);
 let patron= /#[^\s](\w|\d)+/g;
 return frase.match (patron);
}

function esPasswordValida(password){
console.log(password)
let patron= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#^$%&]).{8,}$/gm; 
return patron.test (password)
}

function extraureDates(text){
 console.log (text)
 let patron=/(\d{1,2}\/){2}\d{4}/g;
 return text.match(patron);
 }


function treureParaulesDuplicades(text){
console.log (text)
let patron= /\b(\w+)\b(?:\s+\1)+/g;
return text.replace (patron, '$1');
}

function esURLValida(url){
 console.log (url)
 let patron=/^(http|https|ftp)\:\/\/(\d|\w)+\.(\w|\d)+/;
 return patron.test(url)
}