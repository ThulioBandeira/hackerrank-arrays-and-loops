function solucao(primeiraLetra, segundaLetra, palavras) {
    let juntandoAsDuasLetras = primeiraLetra + segundaLetra;
        let entrou =false;
        
        for(let palavrasSeparadas of palavras){
            if(juntandoAsDuasLetras[0] === palavrasSeparadas[0] && juntandoAsDuasLetras[1]===palavrasSeparadas[1]){
                entrou = true;
                console.log(palavrasSeparadas)
            }
        }
        if(!entrou){
                console.log('NENHUMA')
            }
    }