let idade = 21;
let paispresentes = false;
let comproubilhete = true;
const podeViajar = (idade >=18 || paispresentes) && comproubilhete;

console.log(`Pode viajar: ${podeViajar}`);


if (comproubilhete){
    console.log("Sim comprou o bilhete")
} else {
    console.log("Não comprou o bilhete")
}


n1 = 0
n2 = 3
let media = (n1 + n2) / 2
console.log(`media: ${media}`);


if (n1 === 0 || n2 === 0) {
    console.log("Reprovado")
} else if(media > 7){
    console.log("Reprovado. Mas há como recuperar")

} else {
    console.log("Aprovado")
}








