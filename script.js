let cont = 0
let NumR = parseInt(Math.random() * 20)
const lista = []
const button = document.getElementById("but")
const stat = document.getElementById("error")
const JogarN = document.getElementById("JogarN")

function contador(){
    cont+=1
    document.getElementById("contador").textContent = "Tentativas: " + cont

    //modificar, quando chegar a 10 tentativas tem que zerar e aparecer um botão com novo jogo
    if(cont == 10){
            JogarN.style.display = "block"
    }
}

function Jogarnovamente(){
    let input = parseInt(document.getElementById("inp").value)
    input = ""
    document.getElementById("NumUtilizados").textContent = ""
    document.getElementById("error").textContent = ""
    document.getElementById("contador").textContent = "Tentativas: " + 0
}

function NumRandom(){
    let input = parseInt(document.getElementById("inp").value)
    if (input != NumR){
        lista.push(input)
        const listalterada = Array.from(new Set(lista))
        document.getElementById("NumUtilizados").textContent = "Já foram utilizados: " + listalterada.join(", ")
        if(input> NumR){
            stat.textContent = "Errou, tente novamente. O numero é menor." + NumR
        }else{
            stat.textContent = "Errou, tente novamente. O numero é maior." + NumR
        }
    } else{
        document.getElementById("error").textContent = "Acertou, uhuuuuuuul"
        
    }
}