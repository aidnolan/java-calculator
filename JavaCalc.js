$(document).ready();
var origInput;

$(".numbBtn").on("click", function(){
	origInput = $("input").val();
	var btnId = $(this).attr("id");
	origInput += $("input").val(($("#" + btnId).text())).val();
	$("input").val(origInput);
});

$(".multiBtn").on("click", function(){
	var storedInput = $("input").val();
	$("input").val("");
	
	$(".equalsBtn").on("click", function(){
		$("input").val(origInput * storedInput);

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