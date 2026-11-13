// 1.
const lotes = ["OK", "OK", "Avariado", "OK", "Avariado", "OK"]
let contador = 0

for (let i = 0; i < lotes.length; i++) {
    if (lotes[i] === "Avariado") {
        contador++
    }
}

console.log(contador + " avariados")

// 2.
const fluxo = [1500, -300, 2100, -150, 3200]
let contador2 = 0

for (let i = 0; i < fluxo.length; i++) {
    if (fluxo[i] >= 0) {
        contador += fluxo[i]
    }
}

console.log(contador)

// 3.
const logs = ["08:00 - Sucesso", "09:30 - Falha", "09:31 - Falha", "09:35 - Sucesso"]

for (let index = 0; index < logs.length; index++) {
    let linha = logs[index].split(" ")

    if (linha[2] === "Falha") {
        console.log("Atenção: Tentativa suspeita no índice " + index)
    }
}

// 4.
const carrinho = [
    { nome: "Monitor", preco: 1200, categoria: "Tela" },
    { nome: "Teclado Mecânico", preco: 300, categoria: "Periférico" },
    { nome: "Mouse Gamer", preco: 150, categoria: "Periférico" },
    { nome: "Mesa", preco: 800, categoria: "Móveis" }
]

let precoAPagar = 0.0

for (let index = 0; index < carrinho.length; index++) {
    if (carrinho[index].categoria === "Periférico") {
        precoAPagar += carrinho[index].preco + (carrinho[index].preco * 0.1)
    } else {
        precoAPagar += carrinho[index].preco
    }
}

console.log(precoAPagar.toFixed(2))

// 5.
const escala = [true, true, true, true, false, true, true, true, true, true, true, true, false]

let contadorDias = 0

for (let index = 0; index < escala.length; index++) {
    if(escala[index] === true) {
        contadorDias += 1
    } else {
        contadorDias = 0
    }

    if(contadorDias === 7) {
        console.log( "Alerta Trabalhista: Violação encontrada no dia " + (index + 1))
        break
    }
}

// 6.
const dna = "ATGCGTTAGCTATAGCTA"
let contadorDna = 0

for (let index = 0; index < dna.length; index++) {
    if(dna[index] === "T" && dna[index + 1] === "A") {
        contadorDna += 1
    }
}

console.log("A sequencia 'TA' se repete " + contadorDna + " vezes")