console.log('js');

$(document).ready(function(){
  console.log('JQ');
  testGet ();
  testPost ();

});//end ready




function testGet(){
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

function testPost(){
  let input = 'testPostInput';
  console.log(input, 'in testpost - input');

  $.ajax({
    type: 'POST',
    url: '/calc/store',
    data: {test: input}
  }).done(function(response){
    console.log('testPost success', response);
  }).fail(function(response){
    console.log('testPost fail', response);
  });
}//end testPost


function printTest(){
  console.log('inPrintTest');
}
