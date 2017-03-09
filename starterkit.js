// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//
jQuery(document).ready(function() {
  $("#faq").addClass("redbg");
  $("#rating").addClass("blue");
  $("#large").addClass("greenbg");
  $("#orderedlist2").addClass("bluebg");
  $("#orderedlist").find("li").each(function(i) {
    $(this).append(" Line number " + i);
  });
  $("#orderedlist2 > li:last > ul > li").hover(function() {
    $(this).append(" Chao");
  }, function() {
    $(this).append(" pescao!");
  });
  $("#orderedlist2 > li").addClass("red");
  $("#orderedlist2 > li:last").hover(function() {
    $(this).addClass("green");
  },function(){
    $(this).removeClass("green");
  });
  $("#faq dd").hover(function() {
    old = $(this).html();
    $(this).html("Pou");
  }, function() {
    $(this).html(old);
  });
  $("#faq dt").click(function() {
    var nodo = $(this);
    nodo.fadeOut("slow", function() {
      $("h3").html(nodo.html());
    });
    $("h3").click(function() {
      nodo.fadeIn("slow");
    });
  });
});
