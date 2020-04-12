console.log('Working on todoList..')

let lista = 0

$('#addItem').click(() => {
    lista++
    let buy= $("#myInput").val();
    $('ul').append('<li id="'+lista+'">' + buy + '</li>')
    $('li').attr('class', 'kurva');
  });

$('ul').css('cursor', 'pointer')

$(document).ready(function(){
    $("li").css("background-color", "yellow");
  });

$().click(() => {
    $('#id').css('text-decoration', 'line-through');
    
});