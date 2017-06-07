
$(document).ready();
var origInput,
	obj = {
		"add": [],
		"multiply": []
	},
	currentObj = "add";

var operators = {
	add: function(arr){
		var count = 0;
		for(var i = 0; i < arr.length; i++){
			count += parseFloat(arr[i]);
		}
		return count;
	},

	multiply: function(arr){
		var count = 1;
		for(var i = 0; i < arr.length; i++){
			count *= arr[i];
		}
		return count;
	}
}

var currentOperator = operators.add;

$(".numbBtn").on("click", function(){
	origInput = $("#display").val();
	var btnId = $(this).attr("id");
	origInput += $("#display").val(($("#" + btnId).text())).val();
	$("#display").val(origInput);
});

$("#multiply").on("click", function(){
	currentOperator = operators.multiply;
	currentObj = "multiply";
	obj.multiply.push(origInput);
	console.log(obj.multiply);
	$("#display").val(""); 	
	// console.log(arr);
	// $("#subDisplay").val(origInput);

});

$("#add").on("click", function(){
	$("#subDisplay").val(origInput);
	console.log(origInput);
	if(obj.multiply !== []){
		obj.multiply.push(origInput);
		origInput = operators.multiply(obj.multiply);
		obj.multiply = [];
		
	}
	if(obj.add !== []){
		obj.add.push(origInput);
		origInput = operators.add(obj.add);
		obj.add = [];
	}
	console.log(origInput);
	console.log(obj.add);
	currentOperator = operators.add;
	currentObj = "add";
	obj.add.push(origInput);
	// $("#subDisplay").val(origInput);

	// arr.push(origInput);
	// currentOperator = operators.add;
	// console.log(arr);
	// if(arr.length > 1){
	// 	origInput = currentOperator(arr[0], arr[1]);
	// 	arr = [origInput];
	// }
	$("#display").val(""); 	
	// console.log(arr);
	

});


$("#equals").on("click", function(){
		obj[currentObj].push(origInput);
		origInput = currentOperator(obj[currentObj]);
		$("#display").val(origInput);
		$("#subDisplay").val(origInput);
		obj.add = [];
		obj.multiply = [];
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