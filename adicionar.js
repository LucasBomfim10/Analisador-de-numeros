let num = document.querySelector(`input#num1`)
var lista = document.getElementById('caixa')
var res = document.querySelector('div#res')
var valores = []

function inlista(n,l) {
    if(l.indexOf(Number(n))!= -1){
      return true }
    else {
        return false
    }  

}
function isnumero(n) { 
    if(Number(n)>=1 && Number(n)<= 100) {
        return true }
    else {
        return false
        }

}

function adicionar() {
    if(isnumero(num.value) && !inlista(num.value,valores)) {
        valores.push(Number(num.value))
        let item =document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML=''
        


    } else {
        window.alert('Valor invalido')
    }
    num.value = ""
    num.focus()


}
function finalizar() {
    if(valores.length == 0) {
        window.alert('valor nulo')
    } else{
        let tot= valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma  = valores[0]
        let media = valores[0]

        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos]<= menor)
                menor = valores[pos]    
        }
        media = valores.length
        res.innerHTML += `<p>O maior numero é ${maior}</p>`
        res.innerHTML += `<p>O menor numero é ${menor}</p>`
        res.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados</p>`
        res.innerHTML += `<p>A soma é ${soma}`
        res.innerHTML += `<p>A media é ${soma/media}`

        

    }
}
