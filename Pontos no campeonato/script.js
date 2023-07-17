function solucao(resultados) {
  let pontos = 0;

  for (let resultadoPartida of resultados) {
    if (resultadoPartida === "V") {
      pontos = pontos + 3;
    } else if (resultadoPartida === "E") {
      pontos++;
    } else {
      pontos += 0;
    }
  }
  console.log(pontos);
}
