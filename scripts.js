// let palavras = "palavra palavra palavra palavra palavra palavra";
// let palavrasEmArray = palavras.split("");
// let espacos = palavras.split(" ");
// let espacoProcurado = Math.ceil(espacos.length / 2);
// let conteEspacos = 0;
// palavrasEmArray.forEach((letra, posicaoDaLetra) => {
//     if(letra == " "){
//         conteEspacos++
//         if(conteEspacos == espacoProcurado){
//             palavrasEmArray[posicaoDaLetra] = "";
//         }
//     }
// })
// console.log(palavrasEmArray.toString().replaceAll(",", ""));

function contaPalavras(){
    let t = texto.value.toLowerCase();
    let arrayDoTexto = t.split(" ");
    let resultadoDaPesquisa = 0;
    arrayDoTexto.forEach(palavra => {
        if(palavra == busca.value){
            resultadoDaPesquisa++;
        }
    });
    alert(resultadoDaPesquisa > 0 ? (resultadoDaPesquisa + " palavras") : "Não encontrei essa palavra")
}