let cont = 0
let NumR = parseInt(Math.random() * 21)
const lista = []
const button = document.getElementById("but")

const contador = function(){
    const contar = document.getElementById("contador")
    const input = parseInt(document.getElementById("inp").value)
    const JogarN = document.getElementById("JogarN")
    const stat = document.getElementById("error") // <-- adiciona isso
    const button = document.getElementById("but")

    cont+=1
    contar.textContent = "Tentativas: " + cont

    //modificar, quando chegar a 10 tentativas tem que zerar e aparecer um botão com novo jogo
    if(cont >= 10){
        JogarN.style.display = "block"
        button.disabled = true
    }
    
    if(isNaN(input)){
        stat.textContent = "Digite um número válido!"
        return
    }
    
}

const VerificaNum = function(){
    const input = parseInt(document.getElementById("inp").value)
    if(input>20 || input<0){
        const stat = document.getElementById("error") 
        stat.textContent = "O numero aleatorio está entre 0 e 20"
    }
}

const Sumir = function(){
    cont=0
    lista.length = 0
    NumR = parseInt(Math.random() * 21)
    const JogarN = document.getElementById("JogarN")
    return JogarN.style.display = "none"
}


function Jogarnovamente(){
    button.disabled = false
    document.getElementById("NumUtilizados").textContent = ""
    document.getElementById("error").textContent = ""
    document.getElementById("contador").textContent = "Tentativas: " + 0
}

function NumRandom(){
    const stat = document.getElementById("error")
    let input = parseInt(document.getElementById("inp").value)
    if (input != NumR){
        lista.push(input)
        const listalterada = Array.from(new Set(lista))
        document.getElementById("NumUtilizados").textContent = "Já foram utilizados: " + listalterada.join(", ")
        if(input> NumR){
            stat.textContent = "Errou, tente novamente. O numero é menor."
        }else{
            stat.textContent = "Errou, tente novamente. O numero é maior." 
        }
    } else{
        document.getElementById("error").textContent = "Acertou, uhuuuuuuul"   
        JogarN.style.display = "block"
    
    }
    VerificaNum()

}