function solucao(letra, palavras) {
	let criancasPerdedoras = 0;
    for (let i = 0; i < palavras.length; i++) {
        for (let j = 0; j < palavras[i].length; j++) {
            if (palavras[i][0] !== letra) {
                criancasPerdedoras += 1;
                break;
            }
        }
    }
    console.log(criancasPerdedoras);  
}