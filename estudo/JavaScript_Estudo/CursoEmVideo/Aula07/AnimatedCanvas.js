
var x = window.prompt(`Olá digite seu Nome:`)
var age = window.prompt(`Por favor digite também sua idade:`)
var Congrat = ` esperamos que esteja gostando!!`

function interactive() {
    var Maturi = age<=17 ? `Menor`: `Maior`
    document.getElementById(`titleLanding`).innerHTML =`Olá  ${x}  ${Congrat} <br> Identificamos que vc é ${Maturi} de idade!<br>Este site ainda está em processo de aprimoramento, pedimos perdão pelo transtorno.`
    if(Maturi==`Menor`){
        document.getElementById(`recomendation`).innerHTML = `${x} por  vc ser ${Maturi} de idade recomendamos fazer uma revisão completa das aulas anteriores!`
    }else{
        document.getElementById(`recomendation`).innerHTML = `${x} por  vc ser ${Maturi} de idade poderá seguir com as aulas normalmente, não esqueça de se exercítar!!`
    }
}

function DataFacts(){
    document.getElementById(`teste`).innerHTML = `Como vc já tem ${Year} dentor do mundo da programação,`
    if(Year<2){
        document.getElementById(`EJPS`).innerHTML = `Já poderá aplicar para vagas de estágio como DEV`
    }else{
        ((Year<=4) && (Year>=2)) ? document.getElementById(`EJPS`).innerHTML=`Já poderá aplicar em uma vaga de junior`:`Já poderá aplicar para uma vaga de Pleno`
    }
}