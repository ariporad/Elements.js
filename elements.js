for(var i=0;i<document.childNodes.length;i++){
	var node = document.childNodes.item(i);
	if(typeof window[node.nodeName] == "array"){
		window[node.nodeName][window[node.nodeName].length] = node;
	}else {
		window[node.nodeName] = [ node ];
	}
	if(node.id!=""){
		window[node.id] = node;
	}
	if(node.className!=""){
		window[node.className] = node;
	}
}