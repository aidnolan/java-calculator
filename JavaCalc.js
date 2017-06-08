
$(document).ready();
var origInput,
	obj = {
		"add": [],
		"multiply": [],
		"division": [],
		"subtract": []
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
	minus: function(){},
	multiply: function(arr){
		var count = 1;
		for(var i = 0; i < arr.length; i++){
			count *= arr[i];
		}
		return count;
	},
	division: function(arr){
		var count = arr[0];
		for(var i = 1; i < arr.length; i++){
			count /= arr[i];	
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
	$("#subDisplay").val(origInput);

});

// $("#division").on("click", function(){
// 	currentOperator = operators.division;
// 	currentObj = "division";
// 	obj.division.push(origInput);
// 	console.log(obj.division);
// 	$("#display").val(""); 	
// 	// console.log(arr);
// 	$("#subDisplay").val(origInput);
// });

$("#add").on("click", function(){
	console.log(origInput);
	if(obj.multiply !== []){
		obj.multiply.push(origInput);
		origInput = operators.multiply(obj.multiply);
		obj.multiply = [];
	}
	// if(currentOperator == operators.minus){
	// 	obj.add.push(-origInput);
	// }
	// if(obj.division !== []){
	// 	obj.division.push(origInput);
	// 	origInput = operators.division(obj.division);
	// 	obj.division = [];
	// }
	// if(currentOperator == operators.subtract){
	// 	obj.add.push(-origInput);
	// 	origInput = operators.add(obj.add);
	// 	obj.add = [];
	// }
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
	// [origInput];

	$("#display").val(""); 	
	$("#subDisplay").val(origInput);
});

$("#minus").on("click", function(){
// 	console.log(origInput);
	// if(obj.multiply !== []){
		obj.multiply.push(origInput);
		origInput = operators.multiply(obj.multiply);
		obj.multiply = [];
	// }
// 	// if(obj.division !== []){
// 	// 	obj.division.push(origInput);
// 	// 	origInput = operators.division(obj.division);
// 	// 	obj.division = [];
// 	// }
// 	if(currentOperator == operators.subtract){
// 		obj.add.push(origInput);
// 		origInput = operators.subtract(obj.add);
// 		obj.add = [];
// 	}
	if(currentOperator == "negative"){
		obj.add.push(-origInput);
		origInput = operators.add(obj.add);
		obj.add = [];
	} else {
		obj.add.push(origInput);
		origInput = operators.add(obj.add);
		obj.add = [];
	}
	currentOperator = "negative";
	currentObj = "add";
	obj.add.push(origInput);

	$("#display").val(""); 	
	$("#subDisplay").val(origInput);
	console.log(obj.add);
});

$("#equals").on("click", function(){
	if(currentOperator == "negative"){
		origInput = -origInput;

		currentOperator = operators.add;
	}
	console.log(obj.add);
	obj[currentObj].push(origInput);
	console.log(obj.add);
	origInput = currentOperator(obj[currentObj]);
	
	if(currentObj !== "add"){
		origInput += operators.add(obj.add);
	}
	$("#display").val(origInput);
	$("#subDisplay").val(origInput);
	obj.add = [];
	obj.multiply = [];
});

$("#clear").on("click", function(){
	$("#display").val("");
});

$("#allClear").on("click", function(){
	$("#display").val("");
	$("#subDisplay").val("");
	origInput = "";
	obj.add = [];
	obj.multiply = [];
	obj.minus = [];
	obj.division = [];
});