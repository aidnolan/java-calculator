$(document).ready();
var origInput;
var storedInput = 1;

$(".numbBtn").on("click", function(){
	origInput = $("input").val();
	var btnId = $(this).attr("id");
	origInput += $("input").val(($("#" + btnId).text())).val();
	$("input").val(origInput);
});

// $("#multiply").on("click", function(){
// 	storedInput *= origInput;
// 	$("input").val(""); 
	
// 	$("#equals").on("click", function(){
// 		storedInput *= origInput;
// 		$("input").val(storedInput);

// 	});
// });

$("#add").on("click", function(){
	console.log(typeof origInput);
	console.log(typeof storedInput);
	storedInput = parseFloat(storedInput) + parseFloat(origInput);
	$("input").val(""); 
	
	$("#equals").on("click", function(){
		storedInput += parseFloat(origInput);
		console.log(storedInput);
		$("input").val(storedInput);

	});
});

// $(document).ready();
// var origInput;

// $(".numbBtn").on("click", function(){
// 	origInput = $("input").val();
// 	var btnId = $(this).attr("id");
// 	origInput += $("input").val(($("#" + btnId).text())).val();
// 	$("input").val(origInput);
// });

// $(".multiBtn").on("click", function(){
// 	var storedInput = $("input").val();
// 	$("input").val("");
// 	storedInput *=origInput;
// 	console.log(storedInput);
// 	$(".equalsBtn").on("click", function(){
// 		$("input").val(storedInput);

// 	});
// });