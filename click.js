console.log('Nice to see a button :)')
// click.html

$('#first').click(() => {
  console.log('Yeah, you clicked me.')
});

$('#second').click(() => {
    $('#first').text('Other text than click me....')
});
  
$('#third').click(() => {
    $('button').css('background', 'yellow')
});