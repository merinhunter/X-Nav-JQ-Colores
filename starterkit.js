// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//
jQuery(document).ready(function() {
  $("#faq").addClass("redbg");
  $("#rating").addClass("blue");
  $("#large").addClass("greenbg");
  $("#orderedlist2").addClass("bluebg");
  $("#orderedlist2 > li").addClass("red");
  $("#orderedlist2 > li:last").hover(function() {
    $(this).addClass("green");
  },function(){
    $(this).removeClass("green");
  });
});
