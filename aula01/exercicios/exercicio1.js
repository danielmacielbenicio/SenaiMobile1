var nome;
var sobrenome;
var idade;

nome = "Daniel";
sobrenome = " Maciel Benício";
idade = "18";
function exibirDados(){
// console.log("Meu nome é: " + nome + sobrenome + " e tenho " + idade);
    var saudacao = `Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos`;
    console.log(saudacao);
}
exibirDados();