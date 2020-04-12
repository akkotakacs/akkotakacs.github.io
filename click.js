console.log('Nice to see a button :)')

// -- counter.html --
let counter = 0
$('h3').text(counter)
$('#increase').click(() => {
  counter++
  $('h3').text(counter)
});

$('#decrease').click(() => {
  counter--
  $('h3').text(counter)
});


// -- click.html --

$('#first').click(() => {
  console.log('Yeah, you clicked me.')
});

$('#second').click(() => {
    $('#first').text('Other text than click me....')
});
  
// $('#third').click(() => {
//     $('button').css('background', 'yellow')
// });

$('#third').click(() => {
  let szin = $("#myInput").val();
  if (confirm('You chose the following button background color: ' + szin)) {
    $('button').css('background', szin)
    console.log(szin)
  } else {
    console.log(szin + ' cancelled.')
  }
});

// only the first input is read..
// let szin = $("#myInput").val();
        // alert(szin);
// alert( "You have " + $(".overdue").size() + " books overdue." );

// -- Confirm Box operation --
// if (confirm("Press a button!")) {
//   txt = "You pressed OK!";
// } else {
//   txt = "You pressed Cancel!";
// }