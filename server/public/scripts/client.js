console.log('js');

$(document).ready(function(){
  console.log('JQ');

  $('#submitButton').on('click', function(){
    collectInput();
  });//end onclick submit button
  $('#clearButton').on('click', function(){
    clearInputs()
  });//end onclick clear button
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
  $('#x').val(''),
  $('#y').val(''),
  $('#operator').val('')
}//end clearInputs

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
