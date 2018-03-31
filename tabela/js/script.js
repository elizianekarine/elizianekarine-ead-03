window.addEventListener('load', iniciar);
 
function iniciar() {
 
  var btBackgroundAmarelo = document.querySelector('#btBackground');
  btBackgroundAmarelo.addEventListener('click', trocarBackground);
 
  var chkTextoVermelho = document.querySelector('#chkMudarTexto');
  chkTextoVermelho.addEventListener('change', trocarCorDoTexto);
 
  var chkTextoVermelho = document.querySelector('#chkMudarTamanho');
  chkTextoVermelho.addEventListener('change', habilitarMudarTamanho);

  var chkTextoVermelho = document.querySelector('#chkTituloItalico');
  chkTextoVermelho.addEventListener('change', trocarParaItalico);

  var chkTextoVermelho = document.querySelector('#chkInverterDiaMes');
  chkTextoVermelho.addEventListener('change', MudarDiaDoMes);
}


function trocarParaItalico(){

  var celulas = document.querySelectorAll("td");
  console.log(celulas);
 
  if(this.checked) {
    for(var i = 0; i < celulas.length; i++) {
      celulas[i].addEventListener('mouseover', MudarParaItalico);
      celulas[i].addEventListener('mouseout', NaoMudar);
    }
  }
  else {
    for(var i = 0; i < celulas.length; i++) {
      celulas[i].removeEventListener('mouseover', MudarParaItalico);
      celulas[i].removeEventListener('mouseout', NaoMudar);
    }  
  }

}

function MudarDiaDoMes(){
    var data = new Date();
    var dia = data.getDate();
    if (dia.toString().length == 1)
      dia = "0"+dia;
    var mes = data.getMonth()+1;
    if (mes.toString().length == 1)
      mes = "0"+mes;
    var ano = data.getFullYear();  
    return mes+"/"+dia+"/"+ano;
}


function habilitarMudarTamanho() {
 
  var celulas = document.querySelectorAll('td');
  console.log(celulas);
 
  if(this.checked) {
    for(var i = 0; i < celulas.length; i++) {
      celulas[i].addEventListener('mouseover', aumentarTexto);
      celulas[i].addEventListener('mouseout', diminuirTexto);
    }
  }
  else {
    for(var i = 0; i < celulas.length; i++) {
      celulas[i].removeEventListener('mouseover', aumentarTexto);
      celulas[i].removeEventListener('mouseout', diminuirTexto);
    }  
  }
}


 
function MudarParaItalico() {
  this.classList.add('MudarItalico');
}
 
function NaoMudar() {
  this.classList.remove('MudarItalico');
}


function aumentarTexto() {
  this.classList.add('textoMaior');
}
 
function diminuirTexto() {
  this.classList.remove('textoMaior');
}
 
function trocarCorDoTexto() {
   
  var classe = 'novaCorTexto';
  var tabela = document.querySelector('#dadosBanda');  
  var texto  = document.querySelector('#chkTexto');
 
  //Aqui, this é o checkbox!
  if(this.checked) {
    tabela.classList.add(classe);
    texto.textContent = 'Texto padrão';    
  }
  else {
    tabela.classList.remove(classe);    
    texto.textContent = 'Texto vermelho';    
  }
}
 
function trocarBackground() {
 
  var classeBG = 'novoBackground';
  var tabela   = document.querySelector('#dadosBanda');
 
  //Verificando se a classe já existe no body
  if(tabela.classList.contains(classeBG)) {
 
    //Se entrou aqui, significa que o background
    //já estava amarelo. Então removemos a classe
    //e alteramos o texto do botão
    tabela.classList.remove(classeBG);
 
    //'this' representa o elemento que invocou a
    //função. Neste caso, foi o botão cujo id é
    //'btBackgroundAmarelo'
    this.value = 'Background amarelo';
  }
  else {
 
    //Se entrou aqui, significa que o background
    //está com a cor padrão. Então adicionamos a classe
    //e alteramos o texto do botão
    tabela.classList.add(classeBG);
    this.value = 'Background padrão';
  }
}