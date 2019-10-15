// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // base cases
  if (typeof(obj) === "string") {
  	return '"' + obj + '"'
  } else if (typeof(obj) === "number") {
  	return obj.toString()
  } else if (typeof(obj) === "boolean"){
  	return obj.toString()
  } else if (obj === null){
  	return "null"
  } else if (typeof(obj) === "undefined"){
  	return ""
  } else if (typeof(obj) === "function"){
  	return ""
  }

  //check if it's an array
  if (Array.isArray(obj)) {
  	var str = "";
  	for (var i = 0; i < obj.length; i++){
  		if (i === (obj.length - 1)) {
  			str += stringifyJSON(obj[i]);
  		} else {
  			str += stringifyJSON(obj[i]) + ",";
  		}
  	}
  	return "[" + str + "]"
  } 
  //check if it's an object
  else if (typeof(obj) === "object") {
  	var str = "";
  	for (var key in obj){
  		if (stringifyJSON(obj[key]) === ""){
  			str += "";
  		} else {
  			str += ('"' + key + '":' + stringifyJSON(obj[key]) + ",");
  		}
  	}
  	return "{" + str.slice(0,str.length-1) + "}"
  }
  
};
