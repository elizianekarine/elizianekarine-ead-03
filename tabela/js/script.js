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

function trocarParaItalico(){
  var classe = 'textoItalico';
  var cabecalho = document.querySelector('#cabecalhoBanda');  

  if(this.checked) {
    cabecalho.classList.add(classe);
  }
  else {
    cabecalho.classList.remove(classe);    
  }
}

function MudarDiaDoMes() {
 
  var aux_Data_Array = document.getElementsByClassName('nascimento');  
  var aux_data = "";
  if(this.checked) {
    for(var i = 1; i < aux_Data_Array .length; i++) {
      aux_data = aux_Data_Array[i].textContent;
      aux_Data_Array[i].textContent = aux_data.substring(3,5) + "/" + aux_data.substring(0,2) + aux_data.substring(5,10);
    }
    
  }
  else {
    for(var i = 1; i < aux_Data_Array .length; i++) {
      aux_data = aux_Data_Array[i].textContent;
      aux_Data_Array[i].textContent = aux_data.substring(3,5) + "/" + aux_data.substring(0,2) + aux_data.substring(5,10);
    }
  }
}