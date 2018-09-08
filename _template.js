$(document).ready(function(){

var myTemplate = _.template($("#template").html());

$("#clickMe").click(function() {

var listValues = {
addItem : $("#item").val();
}

$("#appendHere").append(myTemplate(listValues));

console.log(myTemplate);

$("#item").val("");

});

});
