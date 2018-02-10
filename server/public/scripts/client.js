console.log('js');

$(document).ready(function(){
  console.log('JQ');
  testRun ();

});//end ready




function testRun(){
  $.ajax({
    type: 'GET',
    url: '/calc'
  }).done(function(response){
    console.log('get was successful', response);
    printTest();
  }).fail(function(response){
    console.log('get /calc failed', response);
  });
}//end testRun Function


function printTest(){
  console.log('inPrintTest');
}
