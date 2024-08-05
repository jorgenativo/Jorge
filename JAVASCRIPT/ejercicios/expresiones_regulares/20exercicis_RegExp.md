## 1. Validació de correus electrònics
### Enunciat: 
Escriu una funció esEmailValid(email) que retorni true si l'email és vàlid i false altrament.
> Pista:
Ha de contenir **@**, i després un **.**

### Proves
```javascript
console.log(esEmailValid("test@example.com")); // true
console.log(esEmailValid("test.example.com")); // false
```

## 2. Extracció de números de telèfon
### Enunciat: 
Escriu una funció extreureNombresTelefon(text) que retorni una llista de números de telèfon trobats en el text.
> Pista:
Ha de contenir **3 números entre parèntesis**, després **4 números**, un **-** i **4 números** més

### Proves
```javascript
console.log(extreureNombresTelefon("Call me at (123) 456-7890 or (987) 654-3210")); // ["(123) 456-7890", "(987) 654-3210"]
```

## 3. Validació de codis postals
### Enunciat: 
Escriu una funció esCpValid(zip) que retorni true si el codi postal és vàlid i false altrament.
> Pista:
Ha de contenir 5 números

### Proves
```javascript
console.log(esCpValid("12345")); // true
console.log(esCpValid("12345-6789")); // true
console.log(esCpValid("123456")); // false
```

## 4. Extracció de dominis de correu electrònic
### Enunciat: 
Escriu una funció extraureDominiEmail(email) que retorni el domini de l'email.
> Pista:
S'ha de treure tot el què hi hagi després de la **@**


### Proves
```javascript
console.log(extraureDominiEmail("test@example.com")); // "example.com"
```

## 5. Validació de números de targeta de crèdit
### Enunciat: 
Escriu una funció esTargetaCreditValida(number) que retorni true si el número de targeta és vàlid i false altrament.
> Pista:
Ha de contenir **16 números**, **tots junts**, o **separats per espais en grups de 4**

### Proves
```javascript
console.log(esTargetaCreditValida("1234 5678 9012 3456")); // true
console.log(esTargetaCreditValida("1234567890123456")); // true
console.log(esTargetaCreditValida("1234-5678-9012-3456")); // false
```

## 6. Extracció de hashtags
### Enunciat: 
Escriu una funció extraureHashtags(text) que retorni una llista de hashtags trobats en el text.
> Pista:
Extraure el **#** i la **paraula adjunta**


### Proves
```javascript
console.log(extraureHashtags("Loving the new # JavaScript features in #ECMAScript2021!")); // ["#JavaScript", "#ECMAScript2021"]
```

## 7. Validació de contrasenyes
### Enunciat: 
Escriu una funció esPasswordValida(password) que retorni true si la contrasenya és vàlida i false altrament.
> Pista:
Ha de contenir **lletres**, **números**, i **caràcters especials**

### Proves
```javascript
console.log(esPasswordValida("Password1!")); // true
console.log(esPasswordValida("password1")); // false
```

## 8. Extracció de dates
### Enunciat: 
Escriu una funció extraureDates(text) que retorni una llista de dates trobades en el text.

### Proves
```javascript
console.log(extraureDates("My birthday is on 12/05/1992 and my brother's is on 03/10/1995.")); // ["12/05/1992", "03/10/1995"]
```

## 9. Eliminació de duplicats en una cadena
### Enunciat: 
Escriu una funció treureParaulesDuplicades(text) que retorni la cadena sense paraules duplicades consecutives.
> Pista:
Retorn text.replaceregex('$1');

### Proves
```javascript
console.log(treureParaulesDuplicades("This is is a test test.")); // "This is a test."
```

## 10. Validació de URL
### Enunciat: 
Escriu una funció esURLValida(url) que retorni true si la URL és vàlida i false altrament.
> Pista:
return regex.test(url);

### Proves
```javascript
console.log(esURLValida("https://www.example.com")); // true
console.log(esURLValida("ftp://files.example.com")); // true
console.log(esURLValida("htp://invalid-url.com")); // false
```

## 11. Validació de números de seguretat social
### Enunciat: 
Escriu una funció esSegSocValida(ssn) que retorni true si el número de seguretat social és vàlid i false altrament.
> Pista:
9 números separats en tres grups de 3 per guions


### Proves
```javascript
console.log(esSegSocValida("123-45-6789")); // true
console.log(esSegSocValida("123-456-789")); // false
```

## 12. Extracció de noms d'usuari de Twitter
### Enunciat: 
Escriu una funció extraureUsuarisTwitter(text) que retorni una llista de noms d'usuari de Twitter trobats en el text.
> Pista:
**@** seguida de nom d'usuari

### Proves
```javascript
console.log(extraureUsuarisTwitter("Follow us on Twitter @example and @test_account.")); // ["@example", "@test_account"]
```

## 13. Validació de codis de barres EAN-13
### Enunciat: 
Escriu una funció esEAN13Valid(code) que retorni true si el codi de barres EAN-13 és vàlid i false altrament.
> Pista:

### Proves
```javascript
console.log(esEAN13Valid("4006381333931")); // true
console.log(esEAN13Valid("123456789012")); // false
```

## 14. Extracció de URLs
### Enunciat: 
Escriu una funció extractURLs(text) que retorni una llista de URLs trobades en el text.
> Pista:

### Proves
```javascript
console.log(extractURLs("Visit our site at https://www.example.com or http://www.test.com")); // ["https://www.example.com", "http://www.test.com"]
```

## 15. Validació de noms de fitxers
### Enunciat: 
Escriu una funció esFitxerValid(fileName) que retorni true si el nom de fitxer és vàlid i false altrament.
> Pista:

### Proves
```javascript
console.log(esFitxerValid("example.txt")); // true
console.log(esFitxerValid("example.docx")); // false
```

## 16. Extracció de codis HEX de colors
### Enunciat: 
Escriu una funció extraureColorsHex(text) que retorni una llista de codis HEX de colors trobats en el text.
> Pista:


### Proves
```javascript
console.log(extraureColorsHex("Colors: #FF5733, #FFF, and #123456.")); // ["#FF5733", "#FFF", "#123456"]
```

## 17. Validació de números ISBN-10
### Enunciat: 
Escriu una funció esISBN10Valid(isbn) que retorni true si el número ISBN-10 és vàlid i false altrament.
> Pista:


### Proves
```javascript
console.log(esISBN10Valid("0306406152")); // true
console.log(esISBN10Valid("123456789X")); // true
console.log(esISBN10Valid("1234567890")); // false
```

## 18. Extracció de paraules amb lletra majúscula
### Enunciat: 
Escriu una funció extraureParaulesMajuscula(text) que retorni una llista de paraules amb lletra majúscula trobades en el text.
> Pista:


### Proves
```javascript
console.log(extraureParaulesMajuscula("Hello World, this is JavaScript!")); // ["Hello", "World", "JavaScript"]
```

## 19. Validació de plaquetes de matrícula
### Enunciat: 
Escriu una funció esMatriculaValida(plate) que retorni true si la plaqueta de matrícula és vàlida i false altrament.
> Pista:

### Proves
```javascript
console.log(esMatriculaValida("ABC-123")); // true
console.log(esMatriculaValida("AB-1234")); // false
```

## 20. Extracció de preus
### Enunciat: 
Escriu una funció extraurePreus(text) que retorni una llista de preus trobats en el text.
> Pista:


### Proves
```javascript
console.log(extraurePreus("The total cost is $15.99, but with discount it's only $12.00.")); // [
```
