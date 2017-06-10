

$(document).ready();
var origInput,
	obj = {
		"add": [],
		"multiply": [],
		"division": []
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
	if(currentObj == "division"){
		obj.multiply.push(1/origInput);
	}
	if(currentOperator == "negative"){
		obj.multiply.push(-origInput);
		
	} else {
		obj.multiply.push(origInput);
	}
	
	currentOperator = operators.multiply;
	currentObj = "multiply";
	$("#display").val(""); 	
	// console.log(arr);
	

});

$("#division").on("click", function(){
	if(currentObj == "division"){
		obj.multiply.push(1/origInput);
	}
	if(currentOperator == "negative"){
		obj.multiply.push((-origInput));
	} else {
		obj.multiply.push(origInput);
	}


	currentOperator = "division";
	currentObj = "multiply";
	$("#display").val(""); 
// 	currentObj = "division";
// 	obj.division.push(origInput);
// 	console.log(obj.division);
// 	$("#display").val(""); 	
// 	// console.log(arr);
// 	$("#subDisplay").val(origInput);
});

$("#add").on("click", function(){
	console.log(origInput);
	// if(obj.multiply !== []){
	if(currentOperator == "division"){
		obj.multiply.push(1/origInput);
		origInput = operators.multiply(obj.multiply);
		obj.multiply = [];
	} else {
		obj.multiply.push(origInput);
		origInput = operators.multiply(obj.multiply);
		obj.multiply = [];
	}
	if(currentOperator == "negative"){
		obj.add.push(-origInput);
		origInput = operators.add(obj.add);
		obj.add = [];
	} else {
		obj.add.push(origInput);
		origInput = operators.add(obj.add);
		obj.add = [];
	}
	currentOperator = operators.add;
	currentObj = "add";
	obj.add.push(origInput);

	$("#display").val(""); 	
	$("#subDisplay").val(origInput);
});

$("#minus").on("click", function(){
	if(currentOperator == "division"){
		obj.multiply.push(1/origInput);
		origInput = operators.multiply(obj.multiply);
		obj.multiply = [];
	} else {
		obj.multiply.push(origInput);
		origInput = operators.multiply(obj.multiply);
		obj.multiply = [];
	}
	
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
	if(currentOperator == "division"){
		obj.multiply.push(1/origInput);
		origInput = operators.multiply(obj.multiply);
		obj.multiply = [];
		currentOperator = operators.multiply;
	}
	obj[currentObj].push(origInput);
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
	obj.division = [];
});