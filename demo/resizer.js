var parentNode = document.getElementById("Wrapper");
console.log(parentNode);
var childNode = document.getElementById("CTV.Widget.Iframe");
console.log(childNode);
var resizer = new window.Libre.Plugins.Responsive(parentNode, childNode);