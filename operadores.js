// + - * / % **(pontecia)


let n1 = 10;
let n2 = 5;
console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 % n2)
console.log(2**3)


//operadores de atribuição
let n3 = 20;
n3 += 15;

console.log(n3);
// incremento e decremento

let i = 0;
i++;

console.log(i)


let j = 5;
j--;
console.log(j);


//comparação 

/*
igualdade de valor ==
igualdade de valor e tipo ===
<, >, <=, >=
!= valores diferentes
!== valores e tipos diferentes
*/
let n5 = "10";

console.log(n1 == "10");


//operadores lógicos

/*
Para uma pessoa viajar para o exterior:
precisar ser mais de 18 anos ou acompanhados com os pais 
e 
ter comprando passagem.
*/

let idade = 15;
let paispresentes = true
let comproubilhete = false
const podeviajar = idade >=18 || paispresentes && comproubilhete
console.log(`Pode viajar: ${podeviajar}`
)








