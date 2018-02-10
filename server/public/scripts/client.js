console.log('js');

$(document).ready(function(){
  console.log('JQ');

  $('#submitButton').on('click', function(){
    collectInput();

  });//end onclick submit button
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
  }).fail(function(response){
    console.log('get /calc failed', response);
  });
}//end calculateInput
