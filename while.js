// 1.
let bateriaDrone = 100
let minutos = 0

while (bateriaDrone > 15) {
    bateriaDrone -= 5
    minutos += 1
}

console.log("Alerta: Bateria em 15%. Iniciando protocolo de retorno.")
console.log("O voo durou " + minutos + " minutos")

// 2.
let valor = 300.0
let valorInicial = valor

while(valor > 0) {
    valor -= 50.0
    console.log("Liberando nota de R$ 50")
}

console.log("R$ " + valorInicial.toFixed(2) + " sacado");

// 3.
const vendas = [200, 450, 800, 120, 2000, 500, 1000]
let totalVendas = 0
let vendasProcessadas = 0

while (totalVendas < 2000 && vendasProcessadas < vendas.length) {
    totalVendas += vendas[vendasProcessadas]
    vendasProcessadas += 1
}

if (totalVendas >= 2000) {
    console.log("Meta batida com " + vendasProcessadas + " vendas processadas")
} else {
    console.log("Meta não atingida. Total: R$ " + totalVendas)
}

// 4.
let saldo = 10000
let meses = 0

while (saldo < 15000) {
    saldo *= 1.01
    meses += 1
}

console.log("Foram necessários " + meses + " meses para alcançar R$ " + saldo.toFixed(2))

// 5.
const passos = [2, 3, "armadilha", 4, 1, 5]
let posicao = 0
let jogada = 0

while (posicao < 10 && jogada < passos.length) {
    if (passos[jogada] === "armadilha") {
        posicao -= 2
    } else {
        posicao += passos[jogada]
    }
    jogada += 1
}

if (posicao >= 10) {
    console.log("Vitória! O robô chegou à posição " + posicao + " após " + jogada + " jogadas")
} else {
    console.log("Derrota! O robô parou na posição " + posicao + " e as jogadas acabaram")
}

// 6.
let espera = 1
let tempoTotal = 0
let tentativas = 0

while (tempoTotal <= 30) {
    tentativas += 1
    console.log("Tentativa " + tentativas + " falhou. Aguardando " + espera + "s...")
    tempoTotal += espera
    espera *= 2
}

console.log("Timeout. Conexão abortada após " + tentativas + " tentativas.")