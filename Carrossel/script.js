function solucao(sequencia) {
    let carrossel = 0;
       
       for(let i = 0 ;i<sequencia.length;i++){
           if(sequencia[i] == '>'){
               carrossel++
           }else if(sequencia[i] == '<'){
               carrossel--
           }if (carrossel<0){
               carrossel = 6
           }if (carrossel > 6 ){
               carrossel = 0;
           }
       }
       console.log(carrossel)
   }