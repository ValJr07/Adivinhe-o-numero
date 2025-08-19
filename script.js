let cont = 0
let NumR = parseInt(Math.random() * 100)



function contador(){
    cont+=1
    document.getElementById("contador").textContent = "Tentativas: " + cont
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
        let lista = []
        let newL = lista.push(input)
        for(i in lista){
            document.getElementById("NumUtilizados").textContent = "Já foram utilizados: " + lista[i]
        }
        if(input> NumR){
            document.getElementById("error").textContent = "Errou, tente novamente. O numero é menor." + NumR
        }else{
            document.getElementById("error").textContent = "Errou, tente novamente. O numero é maior." + NumR
        }
    } else{
        document.getElementById("error").textContent = "Acertou, uhuuuuuuul." 

    }
}

