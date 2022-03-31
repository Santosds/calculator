var memory = 0;
var memorycalc;
var c = false;
var flag = false;
var sceen = function(p){
  if(p == '.' && flag == true){return;
  }

  if(c == true){
    $('#screen').val('');
    c = false;
  }

  var r = $('$screen').val() + p;
  if(p == '.'){
    flag = true;
  }else{
    r = r * 1;
  }
  $('#screen').val(r);
}
var calculate = function(p){
  if(memory){
    result();
  }
  flag = false;
  c = true;
  memory = $('#screen').val();
  memorycalc = p;
}
$('#clear').click(function (){
  memory = 0;
  $('#screen').val("0");
});
$('#sign').click(function (){
  $('#screen').val($('#screen').val() * -1);
});
$('#backspace').click(function(){
  var len = $('#screen').val().length;
$('#screen').val($('#screen').val().substring(0, len -1));
  if($('#screen').val().length == 0)
    $('#screen').val(0);
});
var result = function(){
  if(memory == 0)
    return;
  c = true;
  var r;
  switch(memorycalc){
    case '+':
      r = memory + $('#screen').val();
    breack;
    case '-':
      r = memory - $('screen').val();
