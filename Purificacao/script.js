function solucao(stringCorrompida) {
	let corrompida = ['!', '@', '#', '$', '%', '&', '*', '(', ')'];

    let vetor = '';

    for(let i = 0;i<stringCorrompida.length;i++){
        
        let encontrado = false;
        
        for(let j =0;j<corrompida.length;j++){
            
            if(stringCorrompida[i] === corrompida[j]){
                
                encontrado = true;
                
                break;
            }
            
        }
        
        if(!encontrado){
            
            vetor += stringCorrompida[i]
        }
        
    }
    console.log(vetor);
}