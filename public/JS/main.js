// $('#middleSec').html(
//   `
//   <h3>HELLO</h3>
//   <hr />
//   <p>
//   Hey
//   </p>
//   `
// );


$('#NavBar a').on('click', function (e) {
  e.preventDefault();
  $('a.active').removeClass('active');
  $(this).addClass('active');
  $('#middleSec .div').hide();
  $($(this).attr('href')).show();
})
