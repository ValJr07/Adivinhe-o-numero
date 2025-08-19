let cont = 0
let NumR = parseInt(Math.random() * 20)
const lista = []
const button = document.getElementById("but")

function contador(){
    cont+=1
    document.getElementById("contador").textContent = "Tentativas: " + cont

    //modificar, quando chegar a 10 tentativas tem que zerar e aparecer um botão com novo jogo
    
    /* if(cont == 9){
        document.getElementById("error").textContent = "Estorou as tentativas. Tente Novamente"
    } */ 
}

function NumRandom(){
    let input = parseInt(document.getElementById("inp").value)
    if (input != NumR){
        lista.push(input)
        const listalterada = Array.from(new Set(lista))
        document.getElementById("NumUtilizados").textContent = "Já foram utilizados: " + listalterada.join(", ")
        if(input> NumR){
            document.getElementById("error").textContent = "Errou, tente novamente. O numero é menor." + NumR
        }else{
            document.getElementById("error").textContent = "Errou, tente novamente. O numero é maior." + NumR
        }
    } else{
        document.getElementById("error").textContent = "Acertou, uhuuuuuuul"
    }
}