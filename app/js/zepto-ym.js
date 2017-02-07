var Zepto=(function(){
	var $,zepto={};
	zepto.init=function(selector,context){
		var dom=[];
		
		var a=document.getElementById(selector.substring(1));
		dom.push(a);
		return zepto.Z(dom,selector);
	}
	zepto.Z=function(dom,selector){
		dom=dom||[];
		dom.__proto__=$.fn;
		dom.selector=selector||'';
		return dom;
	}
	
	$=function(selector,context){
		return zepto.init(selector,context);
	}
	$.fn={
		ver:"1.0.0",
		version:function(){
			console.log(this.ver);
		},
		html:function(){
			if(arguments.length>0){
				
				this[0].innerHTML=arguments[0];
			}else{
				console.log(this[0].innerHTML);
			}
			console.log(this)
			return this;
			
			
			
		}
	}
	return $;
})();
window.Zepto=Zepto;
window.$===undefined&&(window.$=Zepto);//判断$是不是没有被赋值，才进行赋值
//zepto的整个骨架
