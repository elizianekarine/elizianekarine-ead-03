var dia = obterDiaDaSemana(0);
console.log(dia);

console.log(somarElementos(1, 100));
console.log(somarElementos(2, 2000));
console.log(somarElementos(5, 6));
console.log(somarElementos(10, 5));

function obterDiaDaSemana(dia) {
  var diaSemana = "";
  switch (dia) {
    case 0: diaSemana = "Domingo"; break;
    case 1: diaSemana = "Segunda-feira"; break;
    case 2: diaSemana = "Terça-feira"; break;
    case 3: diaSemana = "Quarta-feira"; break;
    case 4: diaSemana = "Quinta-feira"; break;
    case 5: diaSemana = "Sexta-feira"; break;
    case 6: diaSemana = "Sábado"; break;
    default: diaSemana = "Dia inválido";
  }
  return diaSemana;
}

function somarElementos(de, ate) {
  var soma = 0;
  for (var i = de; i <= ate; i++)
    soma += i;
  return soma;
}

/**
 * 
 * EXERCÍCIO RESOLVIDO PELO PROFESSOR - NOMES
 */
function escreverOla(nome) {
   console.log("Olá, " + nome + "!"); 
}

escreverOla("Raphael");
escreverOla("Bruno");
escreverOla("Marcelle");

/**
 * EXERCÍCIO 1 - MÉDIA
 */
function media(num1,num2){
  var aux_media = (num1 + num2) / 2;
  console.log("A Média dos números " + "primeiro número : " + num1 + " segundo número : " + num2 + " é :" +aux_media);
  
}

aux_1 = parseFloat(prompt("Informe o primeiro número: "));
aux_2 =parseFloat(prompt("Informe o segundo número : "));
media(aux_1,aux_2);


/**
 * EXERCÍCIO 3 - FOR
 */
function escreveNumerosAte(aux_ini, aux_qtde){
  for(var i=aux_ini; i < aux_qtde; i++){

    console.log("os numero são " + i);
    
    }
}
aux_numinicial = parseFloat(prompt("Informe o Inicio para Sequencia: "));
aux_numqtde = parseFloat(prompt("Informe a Quantidade de números :"));
escreveNumerosAte(aux_numinicial,aux_numqtde);

  /**
   * EXERCÍCIO 4 - DIVISIVEIS POR
   */
function divisiveisPor(numero,divisor){
  if ((numero % divisor) === 0){
    console.log("O número : " + numero + " é divisível por : " + divisor);
  }
  else{
    console.log("O número : " + numero + " NÃO é divisível por : " + divisor);
  }
}

   aux_numero = parseFloat(prompt("Informe o número: "));
   aux_divisor = parseFloat(prompt("Informe o número se é divisível :"));
   divisiveisPor(aux_numero,aux_divisor);
  
  /**
   * EXERCÍCIO 5 - MAIOR E MENOR
   */
  function maiorMenor (num1, num2){
    if (num1 > num2){
      console.log("O número " + num1 + " é maior que o número : " + num2);
    }
    else{
      console.log("O número " + num2 + " é maior que o número : " + num1);
    }
  }

  aux_num1 = parseFloat(prompt("Entre com o Primeiro número :"));
  aux_num2 = parseFloat(prompt("Entre com o segundo número :"));
  maiorMenor(aux_num1,aux_num2);