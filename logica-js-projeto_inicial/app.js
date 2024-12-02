//usamos "//" para adicionar comentários
//Para "imprimir" alguma mensagem para o usuário
alert("Boas vindas ao jogo do número secreto");  //para o js identificar que finalizou o comenaod que você solicitou, usamos ;
let numeroMaximo = 5000;
 
let nuemroSecreto = parseInt(Math.random() * numeroMaximo + 1);   // Para o computador gerar números secretos variados
console.log(nuemroSecreto)
let chute;
let tentativas = 1;


//enquanto // o chute não for igual ao numero secreto
while(chute != nuemroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);  // prompt serve para pedir ao usuário que insira uma certa informaçãonu

    if (nuemroSecreto == chute) {
        break;
    } else {
        if (nuemroSecreto > chute){
            alert(`O número secreto é maior que ${chute}`);
        } else{
            alert(`O numero secreto é menor que ${chute}`)
        }
        //tentativas = tentativas + 1; 
        tentativas++ // para somar a quantidade de vezes que passou no código

    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Isso ai, você descobriu o núemro secreto ${nuemroSecreto} com ${tentativas} ${palavraTentativa}`); // ou console.log('Isso ai, voicê descobriu o núemro secreto ${nuemroSecreto}');

// CTRL + L = Limpa o console

