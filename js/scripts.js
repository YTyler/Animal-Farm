$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend('<li>Meow<img src="img/kitten.jpg" alt="cat"></li>');
    $("ul#webpage").prepend("<li>Grrr</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();





    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });



  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Schhhe!!!</li>");
    $("ul#webpage").prepend('<li>Woof!<img src="img/dog.jpg" alt="dog"></li>');
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").before("<p>Farmer becomes angrier</p>");
    $("ul#webpage").before("<p>Farmer becomes angrier</p>");

    $("ul#user").siblings("p").last().click(function() {
      // $(this).toggleClass("greenBackground");
      $(this).remove();
    });
    $("ul#webpage").siblings("p").last().click(function() {
      // $(this).toggleClass("greenBackground");
      $(this).remove();
    });
  });

  // GREEN BACKGROUND
  $("h1").click(function() {
    $(this).toggleClass("greenBackground");
  });

// REMOVE ELEMENT
  // $("p").click(function() {
  //   $(this).remove();
  // });



  // $("#myModal").modal();
  // $('#myModal').modal('show');
  // setTimeout(function() {
  //   $('#myModal').modal('hide');
  // }, 1000);


});
