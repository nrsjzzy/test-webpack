import './main.scss';
import './plugin.js';
import sub from './sub.js';
var app=document.createElement("div");
app.innerHTML="<h1>hello world</h1>";
app.appendChild(sub());
document.body.appendChild(app);
$("body").append("<p>liaobin</p>");
$("p").greenify();
$("p").on("click",function(){
	alert("w")
})
