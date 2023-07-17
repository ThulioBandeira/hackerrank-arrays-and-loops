function solucao(precos) {
    let menorPerda = 0;
    let resultado = Infinity;
    for (let i = 0; i < precos.length; i++) {
        let numeroDaVez = precos[i];
        for(let j = i+1;j<precos.length;j++){
            
            menorPerda = numeroDaVez - precos[j];
            
            if(menorPerda>0 && menorPerda<resultado){
                resultado = menorPerda
                
            }
            
        }
      }
      console.log(resultado)
  }