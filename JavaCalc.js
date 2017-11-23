
(function(){
$(document).ready();

var doublePressStopper = true;

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

function multDiv() {
	if(doublePressStopper){
		return;
	}

	if(!origInput){
		return $("#display").val("");
	};
	if(currentOperator == "division"){
		obj.multiply.push(1/origInput);
	} else if(currentOperator == "negative"){
		obj.multiply.push((-origInput));
	} else {
		obj.multiply.push(origInput);
	}
	if(obj.multiply.length > 1){
		$("#subDisplay").val(operators.multiply(obj.multiply));
	}
	currentObj = "multiply";
	$("#subDisplay").val(origInput);
	errorDisplay();
	$("#display").val(""); 	
	doublePressStopper = true;
};

function addMinus() {
	if(doublePressStopper){
		return;
	}

	if(!origInput){
		return $("#display").val("");
	};
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
	currentObj = "add";
	obj.add.push(origInput);
	$("#subDisplay").val(origInput);
	errorDisplay();
	$("#display").val(""); 	
	doublePressStopper = true;

}

function errorDisplay() {
	if(!origInput && origInput !== 0){
		$("#subDisplay").val("ERROR");
	}
};


$(".numbBtn").on("click", function(){
	doublePressStopper = false;
	origInput = $("#display").val();
	var btnId = $(this).attr("id");
	origInput += $("#display").val(($("#" + btnId).text())).val();
	$("#display").val(origInput);

});

$("#multiply").on("click", function(){
	multDiv();
	currentOperator = operators.multiply;
});

$("#division").on("click", function(){
	multDiv();
	currentOperator = "division";
});

$("#add").on("click", function(){
	addMinus();
	currentOperator = operators.add;
});

$("#minus").on("click", function(){
	addMinus();
	currentOperator = "negative";
});

$("#equals").on("click", function(){
	if(!origInput){
		return $("#display").val("");
	};
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
	errorDisplay();
});

$("#plusMinus").on("click", function(){
	if(!origInput){
		return $("#display").val("");
	};
	if(!origInput !== ""){
		origInput = -origInput;
		$("#display").val(origInput);
		errorDisplay();
	}
});

$("#clear").on("click", function(){
	console.log(obj.add);
	$("#display").val("");
	doublePressStopper = true;
});

$("#allClear").on("click", function(){
	$("#display").val("");
	$("#subDisplay").val("");
	origInput = "";
	obj.add = [];
	obj.multiply = [];
});
})();