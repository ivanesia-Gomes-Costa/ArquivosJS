let diaSemana = 7

if (diaSemana ===0){
    console.log("hoje é domingo") }
else if (diaSemana ===1){
    console.log("hoje é segunda-feira")
} else if (diaSemana ===2){
    console.log("hoje é terça-feira")
}else if (diaSemana ===3){
    console.log("hoje e quarta-feira")
}else if (diaSemana ===4){
    console.log("hoje e quinta-feira")
} else if (diaSemana ===5){
    console.log("hoje e sexta-feira")
}else if (diaSemana ===6){
    console.log("hoje e sábado")
}else if (diaSemana ===7){
    console.log("hoje é domingo")
}

//usando switch

let dia = "0"
let dia_Semana = "0"
switch (dia){
    case 0:
        dia_Semana = "domingo"
        break
    case 1:
        dia_Semana = "segunda"
        break
    case 2:
        dia_Semana = "terça"
         break
    case 3:
        dia_Semana = "quarta"
        break
    case 4:
        dia_Semana = "quinta"
         break
    case 5:
        dia_Semana = "sexta"
         break
    case 6:
        dia_Semana = "sabado"
        break
    default:
        dia_Semana ="Semana inexistente"

}

console.log(`hoje e ${dia_Semana}`)

