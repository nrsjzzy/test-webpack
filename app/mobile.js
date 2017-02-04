import './main.scss';
import './plugin.js';
$(function(){
	let app=document.createElement('div');
	app.innerHTML='<h1>hello world</h1>';
	document.body.appendChild(app);
	$('h1').greenify();
	
	
});
