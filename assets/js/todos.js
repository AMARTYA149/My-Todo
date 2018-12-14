//checking of the specific todos
$("li").click(function(){
  $(this).toggleClass("completed");
});

//removal of list item
$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
