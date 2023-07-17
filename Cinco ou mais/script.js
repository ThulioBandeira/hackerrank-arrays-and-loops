function solucao(precos) {
    let totalPago = 0;
    
    let somaNumeros = 0;
    
    let menorValor = precos[0];
    for(let menor of precos){
        if(menor < menorValor){
            menorValor = menor
        }
    }
    
    if(precos.length>=5){
        for(let valoresDoPreco of precos){
            somaNumeros+= valoresDoPreco;
            totalPago = somaNumeros - menorValor
        }
    }else{
        for(let valoresDoPreco of precos){
            totalPago += valoresDoPreco
        }
    }
    console.log(totalPago)
    
}