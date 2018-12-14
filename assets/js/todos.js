//checking of the specific todos
$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});

//removal of list item
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//creating todos
$("input[type = 'text']").keypress(function(event){
    if(event.which === 13)
    {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
})