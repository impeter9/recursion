// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
	var arr = [];
	var node = document;
	var getNodes = function(node, className){
		// stopping case
		if (node.childNodes.length === 0){

		} else {
			for (var i = 0; i<node.childNodes.length; i++){
				if (_.contains(node.childNodes[i].classList, className)){
					arr.push(node.childNodes[i]);
				}
			getNodes(node.childNodes[i], className);
			}
		}
	}
	getNodes(node,className)
	return arr
};