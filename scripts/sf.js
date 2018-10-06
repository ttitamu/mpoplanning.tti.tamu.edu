sfHover = function() {
	var sfEls = document.getElementById("mainnav").getElementsByTagName("li");
	for (var i=0; i < sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
}

/* only IE6 sees this? */
if (window.attachEvent) {
	window.attachEvent("onload", sfHover);
}