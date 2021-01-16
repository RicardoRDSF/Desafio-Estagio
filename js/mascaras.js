$(document) .ready(function() {
    $('#referencia') .mask('00/00/0000');
});

$(function(){
    $("#preco").maskMoney({symbol:'R$ ', 
   showSymbol:true, thousands:'.', decimal:',', symbolStay: true});
    })