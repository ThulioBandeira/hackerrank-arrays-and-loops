function solucao(notas) {
	let media = 0;
    let maiorNumero=notas[0];
    let menorNumero=notas[0];
    let contador = 0;
    
    for(let valorNotas of notas){
        
        if(valorNotas > maiorNumero){
            maiorNumero = valorNotas
            
        }else if(valorNotas < menorNumero){
            menorNumero = valorNotas
        }
        media+=valorNotas
        contador++
    }
    console.log((media-maiorNumero-menorNumero)/(contador-2))
   
}