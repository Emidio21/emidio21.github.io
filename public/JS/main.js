$('#NavBar a').on('click', function (e) {
  e.preventDefault();
  $('a.active').removeClass('active');
  $(this).addClass('active');
  $('#middleSec .div').hide();
  $($(this).attr('href')).show();
})


var unisaCollapse = document.getElementById('Unisa')
unisaCollapse.addEventListener('show.bs.collapse', function () {
  $('#UnisaArrow').addClass("fa-chevron-up");
  $('#UnisaArrow').removeClass("fa-chevron-down")
})
unisaCollapse.addEventListener('hide.bs.collapse', function () {
  $('#UnisaArrow').addClass("fa-chevron-down");
  $('#UnisaArrow').removeClass("fa-chevron-up")
})

var superioriCollapse = document.getElementById('Superiori')
superioriCollapse.addEventListener('show.bs.collapse', function () {
  $('#SuperioriArrow').addClass("fa-chevron-up");
  $('#SuperioriArrow').removeClass("fa-chevron-down")
})
superioriCollapse.addEventListener('hide.bs.collapse', function () {
  $('#SuperioriArrow').addClass("fa-chevron-down");
  $('#SuperioriArrow').removeClass("fa-chevron-up")
})
