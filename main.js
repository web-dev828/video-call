$(document).ready(function() {
  console.log(data)
  $("button").on("click", function(e) {
    var dataIdx = $(this).data("index");
    $("#topic").html($(this).html());
    if (data.hasOwnProperty(dataIdx)) {
      $("#answer").html(data[dataIdx]);
    }
    else {
      $("#answer").html("#####################");
    }
  });
});