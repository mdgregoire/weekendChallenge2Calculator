$(document).ready(function(){
  $('#submitButton').on('click', function(){
    collectInput();
  });//end onclick submit button
  $('#clearButton').on('click', function(){
    clearInputs()
    clearOutputs()
  });//end onclick clear button
  $('.xInputButton').on('click', function(){
    xButtonInput($(this).val());
  })//end xInputButton click
  $('.yInputButton').on('click', function(){
    yButtonInput($(this).val());
  })//end yInputButton click
  $('.operatorButton').on('click', function(){
    operatorButtonClick($(this).val())
  })//end operatorButton click
  $('#outputField').on('click', '.individualOutput', function(){
    rerunHistory($(this).index('.individualOutput'));
  })//end individualOutput click
});//end ready

function collectInput(){
  $.ajax({
    type: 'POST',
    url: '/calc/store',
    data: {
        x: $('#x').val(),
        y: $('#y').val(),
        operator: $('#operator').val()
          }
  }).done(function(response){
    console.log('collectInputPost success', response);
    calculateInput();
  }).fail(function(response){
    console.log('collectInputPost fail', response);
  });
}//end collectInput

function calculateInput(){
  $.ajax({
    type: 'GET',
    url: '/calc'
  }).done(function(response){
    console.log('get was successful', response);
    writeToDom(response);
  }).fail(function(response){
    console.log('get /calc failed', response);
  });
}//end calculateInput

function clearInputs(){
  $('#x').val('');
  $('#y').val('');
  $('#operator').val('');
}//end clearInputs

function clearOutputs(){
  $('#outputField').empty();
}//end clear outputs

function operatorButtonClick(operator){
  $('#operator').val(operator);
}//end operatorButtonClick

function rerunHistory(index){
  $.ajax({
    type: 'POST',
    url: '/calc/rerun',
    data: {index: index
          }
  }).done(function(response){
    console.log('collectInputPost success', response);
    calculateInput();
  }).fail(function(response){
    console.log('collectInputPost fail', response);
  });
}//end rerunHistory

function writeToDom(array){
  console.log('in writeToDom', array);
  clearInputs();
  $('#outputField').empty();
  for (i=0; i<array.length; i++){
    let stringToAppend = '<li class = "individualOutput">';
    stringToAppend += array[i].x+' '+array[i].operator+' '+array[i].y;
    stringToAppend += ' = '+array[i].total+'</li>';
    $('#outputField').append('<div class= "output">' + stringToAppend + '</div>');
  }//end for loop
}//end write to DOM

function xButtonInput(xInputNumber){
  if(xInputNumber == 'C'){
    $('#x').val('');
  }//end if
  else if ($('#x').val()){
    $('#x').val($('#x').val() + xInputNumber);
  }  //end elseif
  else{
    $('#x').val(xInputNumber);
  }//end else
}//end xButtonInput

function yButtonInput(yInputNumber){
  if(yInputNumber == 'C'){
    $('#y').val('');
  }//end if
  else if ($('#y').val()){
    $('#y').val($('#y').val() + yInputNumber);
  }  //end elseif
  else{
    $('#y').val(yInputNumber);
  }//end else
}//end yButtonInput
