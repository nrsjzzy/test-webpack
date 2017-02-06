//import '../css/index.scss';
//es6新特性
//1、默认参数
var opts = function(height = 50, width = 100) {
	return height + width;
}
console.log(opts()); //输出结果150
console.log(opts(1000, 500)); //输出结果1500

//2、模板对象,直接在对象里面用反引号可以加入变量${name},支持换行,尤其对于拼接字符串很有帮助
var str1 = 'a';
var str2 = 'b';
/*var str3 = `${str1}${str2}是个大帅哥`;
var str4 = `<div>${str1}${str2}是个大帅哥，这是真的</div>
             <div>以上评论我很赞同ssd</div>`;

console.log(str3);
document.getElementById('app').innerHTML=str4;*/

//3、多行字符串，在2中以演示过
/*var roadPoem = `Then took the other, as just as fair,

    And having perhaps the better claim

    Because it was grassy and wanted wear,

    Though as for that the passing there

    Had worn them really about the same,`;*/
    
    
//4、解析构值
//5、增强的对象字面量
var obj01={
	name:'0',
	sex:'男',
	a:function(){
		alert("obj01")
	}
}
var obj3=[1,2];
var obj02={
	__proto__:obj01,
	sing(){
		alert("w")
	},
	obj3
	
}
console.log(obj02.obj3);
//6、箭头函数，箭头函数好处就是this还是原来的this,箭头函数没有执行上下文一说
//7、for of循环用于遍历数组，不同的是遍历出来的是数组的值；
/*var num = 0;
const i = 12;
for(let i = 0, len = 100; i < len; i++) {
	num = num + i;
}
var arry = [1, 2, 3]
for(let v of arry) {
	console.log(v)
}*/
import '../css/index.scss';
