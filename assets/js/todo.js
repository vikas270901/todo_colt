$("ul").on("mouseenter", "li", function(){
$(this).css("color", "rgb(255,0,0)");
});
$("ul").on("mouseleave", "li", function(){
	var colour = $(this).css("text-decoration");
if(colour === "none solid rgb(255, 0, 0)"){
	$(this).css("color", "black"); 
}else if (colour == "") { 
	$(this).css("color", "black");
}});
$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
$(this).parent().fadeOut(500, function(){
	//console.log("it faded out");
	$(this).remove();
}); 
event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
if(event.which === 13){
	var text = $(this).val();  //
	$(this).val("");
	//console.log("hello");
	$("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + text + "</li>");
}});