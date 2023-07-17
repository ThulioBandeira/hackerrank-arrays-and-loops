function solucao(palpite, palavra) {
	let contador = 0;

    for(let i = 0; i<palavra.length ; i++){
        if(palpite === palavra[i]){
            contador++
        }
    }
    console.log(contador)
}