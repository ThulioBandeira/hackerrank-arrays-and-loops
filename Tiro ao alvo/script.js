function solucao(disparos) {
	let contador = 0;
    
    for(let pontuacao of disparos){
        if(pontuacao>70){
            contador++
        }
    }
   let verificador = contador >= 3 ? contador : 'ELIMINADO';
   console.log(verificador)


}