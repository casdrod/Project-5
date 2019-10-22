$('#search').change(function(){
  var searchStr = $(this).val().toLowerCase();
  $('.imgs').each(function(){
    var str = $(this).attr("data-title");
    if (str.indexOf(searchStr)) > -1 {
      $(this).show();
    } else {
      $(this).hide();
    }
  })
})