/*
    VsCode 运行 JavaScript 文件方法：
    1、安装 Node.js 环境：https://nodejs.org/en/download/。确保安装成功，可以在终端运行 "node -v" 查看版本号。
    2、在 VsCode 终端（快捷键 Ctrl+` 调出）中运行命令：node 文件名.js

    或者 使用 VsCode 的 "运行和调试" 来运行：
    1、点击左侧栏的 "运行和调试" 图标 (或使用快捷键 Ctrl+Shift+D)。
    2、点击 "创建 launch.json 文件" 链接，选择 "Node.js" 环境，会创建 .vscode/launch.json 文件，不用修改。示例：
        {
            "version": "0.2.0",
            "configurations": [
                {
                    "type": "node",
                    "request": "launch",
                    "name": "启动程序",
                    "skipFiles": [
                        "<node_internals>/**"
                    ],
                    "program": "${workspaceFolder}\\jsBasics.js" // 这里是当前打开的文件，可以修改为自己要运行的文件
                }
            ]
        }
    3、点击 "运行和调试" 里面的 顶部的绿色三角形 "运行" 按钮即可运行当前文件。
    4、可以在 VsCode 编辑器里面添加断点，点击行号左边，添加红点即添加了断点，至少有一个断点的时候，运行起来后就可以单步调试运行。
*/

/*
 * JavaScript 全面基础与快速复习指南
 * 包含基本用法、语法特性、对象、函数、类及高级特性等。
 * 每个部分都通过分割线区分，并附带详细注释。
 *
 * 这里面包含了：
 *  基础语法：变量、数据类型、运算符、流控制（if/switch/for/while）。
 *  核心对象：String, Number, Array, Date, Math, RegExp。
 *  函数与作用域：定义、参数、闭包、this 指向、箭头函数。
 *  面向对象：Prototype、Class、继承、静态方法。
 *  现代特性：let/const、模板字符串、JSON、Promise、Async/Await。
 *  其他：错误处理、调试、严格模式、常见的误区等。
 */

// 参考
// https://www.runoob.com/js/js-tutorial.html
// https://www.runoob.com/nodejs/nodejs-tutorial.html
// https://www.w3cschool.cn/ecmascript

"use strict"; // 启用严格模式，推荐使用。具体看后面的章节。

// 代码规范 参考 https://www.runoob.com/js/js-conventions.html

// ==========================================================================
// 1. JavaScript 输出
// ==========================================================================
/* JavaScript 主要通过以下方式输出数据 */

// 1. 使用 console.log() 写入控制台 (最常用)
console.log("Hello, World! (Console)");

// 2. 浏览器环境：使用 window.alert() 弹出警告框
// window.alert("Hello, World! (Alert)");

// 3. 浏览器环境：使用 document.write() 写入 HTML 文档
// document.write("Hello, World! (Document Write)");

// 4. 浏览器环境：使用 innerHTML 写入 HTML 元素
// document.getElementById("demo").innerHTML = "Hello HTML";


// ==========================================================================
// 2. JavaScript 语法 & 3. 语句
// ==========================================================================
/* JavaScript 程序由语句组成，语法是编写这些语句的规则 */

var x, y, z;    // 声明语句。声明了变量 x, y, z
x = 5;          // 赋值语句
y = 6;          // 赋值语句
z = x + y;      // 表达式语句，计算 x + y 并赋值给 z
console.log("语法示例 z:", z); // 输出 11

// JavaScript语言有多种类型的运算符：
// 参考 https://www.runoob.com/jsref/jsref-operators.html
// 类型                           实例	               描述
// 赋值，算术和位运算符             =  +  -  *  /	    在 JS 运算符中描述
// 条件，比较及逻辑运算符           ==  != <  > 	    在 JS 比较运算符中描述

// 分号 ; 用于分隔 JavaScript 语句
let a = 1; let b = 2; //在一行中编写多条语句


// ==========================================================================
// 4. JavaScript 注释
// ==========================================================================

// 这是单行注释，用于解释代码

/*
 * 这是多行注释
 * 可以跨越多行
 * 用于详细的说明
 */


// ==========================================================================
// 5. JavaScript 变量 & 33. let 和 const
// ==========================================================================
/* 变量是存储数据的容器 */

// var 声明特点：
//     变量可以重复声明（覆盖原变量）。
//     变量未赋值时，默认值为 undefined。
//     var 声明的变量会提升（Hoisting），但不会初始化。

// 使用 let 和 const (ES6)
//     在 2015 年以前，我们使用 var 关键字来声明 JavaScript 变量。
//     在 2015 后的 JavaScript 版本 (ES6) 允许我们使用 const 关键字来定义一个常量，
//      使用 let 关键字定义的限定范围内作用域的变量。

// let 和 var 的区别：
// 1. 作用域不同：var 是函数作用域，let 是块级作用域。参考 后面 "9. JavaScript 作用域" 章节。
// 2. 变量提升：var 声明的变量会提升，let 不会。
//      var 关键字定义的变量可以在使用后声明，也就是变量可以先使用再声明。
//      let 关键字定义的变量则不可以在使用后声明，也就是变量需要先声明再使用。
//      变量提升含义：就是变量先用再声明，js 引擎会把声明提升到最前面去处理。不推荐这么做，尽量所有变量都先声明。
//      参考后面 "25. JavaScript 变量提升 (Hoisting)" 章节。
// 3. 重复声明：var 允许重复声明，let 不允许。

// 参考 https://www.runoob.com/js/js-let-const.html

// var (ES5): 函数作用域，存在变量提升
var oldVar = "我是旧时代的变量";

// let (ES6): 块级作用域，推荐使用
let newVar = "我是新时代的变量";

// const (ES6): 块级作用域，声明常量，值不可改变
const PI = 3.141592653589793;
// PI = 3.14; // 这行代码会报错：Assignment to constant variable.

console.log(oldVar, newVar, PI);

let city = "北京";
const age0 = 30;
console.log(`City: ${city}, Age: ${age0}`); // 输出: "City: 北京, Age: 30"
// 注意必须是 `` 反引号，而不是 '' 或 ""。参考后面的字符串模板章节。

// JavaScript 变量的生存期
//  JavaScript 变量的生命期从它们被声明的时间开始。
//  局部变量会在函数运行以后被删除。
//  全局变量会在页面关闭后被删除。

var var1 = 1; // 不可配置全局属性。浏览器环境下，自动作为 window 的一个属性。
// var2 = 2; // 没有使用 var 声明，可配置全局属性 (Strict mode不允许)
console.log("var1:", var1);
// console.log(this.var1); // 浏览器环境下 this 即 window。关于 this 见后面章节。
// console.log(window.var1); // 浏览器环境下

// delete var1; // false，不能删除

// delete var2; // true，可以删除。在严格模式下，无法对标识符调用 "delete"
// console.log("var2:", typeof var2); // undefined


// ==========================================================================
// 6. JavaScript 数据类型
// ==========================================================================

// JavaScript 数据类型
// 值类型(基本类型)：
//  字符串（String）、数字(Number)、布尔(Boolean)、
//  空（Null）、未定义（Undefined）、
//  Symbol。
// 引用数据类型（对象类型）：
//  数组(Array)、对象(Object)、函数(Function)，
//  正则（RegExp）和日期（Date）。

// let length = 16;                               // Number (数字)
// let lastName = "Johnson";                      // String (字符串)
// let isActive = true;                           // Boolean (布尔)
// let cars = ["Saab", "Volvo", "BMW"];           // Array (数组 - 一种特殊的对象)
// let personObj = {firstName:"John", age:50};    // Object (对象)
// let emptyValue = null;                         // Null (空值)
// let notDefined;                                // Undefined (未定义)

// console.log("数据类型:", typeof length, typeof lastName, typeof isActive, typeof cars, typeof personObj);

var lastName = "Johnson";                         // String 通过字符串字面量赋值
// 字符串中类似 C，使用反斜杠 \ 的转义字符，比如：\n (换行), \t (制表符), \\ (反斜杠), \' (单引号), \" (双引号)
var greeting = "He said, \"Hello!\"";

// 不推荐使用 new String() 构造函数来创建字符串对象。它会拖慢执行速度，并可能产生其他副作用：
var x = "John";
var y = new String("John"); // new 关键字将字符串定义为一个对象
// typeof x     // 返回 String
// typeof y     // 返回 Object
// (x === y)    // 结果为 false，因为 x 是字符串，y 是对象。=== 为绝对相等，即数据类型与值都必须相等。


var length = 16;                                  // Number 通过数字字面量赋值
var points = x * 10;                              // Number 通过表达式字面量赋值
var floatNum = 5.99;                              // Number 通过浮点数字面量赋值

var isActive = true;                              // Boolean 通过布尔字面量赋值

var emptyValue = null;                           // Null 通过 null 赋值
var notDefined;                                  // Undefined 未赋值，默认值为 undefined。Undefined 这个值表示变量不含有值。

// console.log(theNewVar);                          // 直接使用一个新变量，会作为 undefined 的 变量，后面还可以重新声明和赋值。
                                                 // 严格模式下你不能使用未声明的变量。
                                                 //  严格模式通过在脚本或函数的头部添加 use strict; 表达式来声明。推荐使用。

var cars = ["Saab", "Volvo", "BMW"];              // Array  通过数组字面量赋值
var cars2 = new Array("Saab", "Volvo", "BMW");    // Array 通过 Array 构造函数赋值
var cars3 = new Array();
cars3[0] = "Saab";
cars3[1] = "Volvo";
cars3[2] = "BMW";                                 // Array 通过 Array 构造函数逐个赋值

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};                                                // Object 通过对象字面量多行赋值
var person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";                         // Object 通过 Object 构造函数逐个赋值
person2["age"] = 50;                              // Object 通过另一种方式赋值属性

cars = null;                                      // 将数组变量赋值为 null, 来清空变量
person = null;                                    // 将对象变量赋值为 null, 来清空变量

// 函数 和 正则表达式、日期 见后续章节

// ==========================================================================
// 7. JavaScript 对象
// ==========================================================================
/* 对象是拥有属性和方法的数据容器 */

const car = {
    type: "Fiat",           // 属性
    model: "500",           // 属性
    color: "white",         // 属性

    // 定义一个这个对象的方法
    start: function() {
        return this.type + " " + this.model + " started.";
    },

    // 带入参的方法
    startWithMessage: function(message) {
        return this.type + " " + this.model + " started with message: " + message;
    }
};

console.log(car.type);      // 访问属性：Fiat
console.log(car["model"]);  // 另一种访问方式：500
console.log(car.start());   // 调用方法
console.log(car.startWithMessage("Let's go!")); // 调用带参数的方法


// ==========================================================================
// 8. JavaScript 函数 & 41-43. 函数定义、参数、调用
// ==========================================================================

// 参考
// https://www.runoob.com/js/js-function-definition.html
// https://www.runoob.com/js/js-function-parameters.html
// https://www.runoob.com/js/js-function-invocation.html

// 函数声明
function myFunction(p1, p2) {
    return p1 * p2;
}

// 函数调用
let result = myFunction(4, 3);
console.log("函数结果:", result); // 12

// 默认参数 (ES6)
function greet(name = "Guest") {
    return "Hello " + name;
}
console.log(greet()); // Hello Guest

// 变参数
function sumAll() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

x = sumAll(1, 123, 500, 115, 44, 88);
console.log("变参数求和:", x); // 871


// ==========================================================================
// 9. JavaScript 作用域
// ==========================================================================

// 全局作用域
let globalScope = "我是全局的";

function scopeCheck() {
    // 函数作用域
    let functionScope = "我是函数内的";
    console.log(globalScope); // 可以访问全局

    if (true) {
        // 块级作用域 (通过 let/const 定义)
        let blockScope = "我是块内的";
        var notBlockScope = "我虽在块内，但我属于函数作用域(var)";
        console.log(blockScope);
    }
    // console.log(blockScope); // 报错：blockScope is not defined
    console.log(notBlockScope); // 可以访问。
    // var 不受块级作用域限制，属于函数作用域，因此不推荐使用 var 而 推荐使用 let/const。
}
scopeCheck();


// ==========================================================================
// 10. JavaScript 事件
// ==========================================================================
/* 事件是 HTML 元素上发生的事情。通常与 HTML 结合使用。
    参考 https://www.runoob.com/js/js-events.html
    例如：<button onclick="displayDate()">The time is?</button>
*/

// 在纯 JS 环境中模拟事件处理函数
// function onButtonClick() {
//     console.log("按钮被点击了！");
// }
// onButtonClick(); // 模拟触发


// ==========================================================================
// 11. JavaScript 字符串 & 12. 字符串模板
// ==========================================================================

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log("字符串长度:", text.length); // 打印 26

// 常用方法
console.log(text.slice(0, 5)); // 打印 "ABCDE"
console.log(text.replace("ABC", "123")); // 打印 "123DEF..."

// 字符串相加
let str1 = "Hello,";
let str2 = "World!";
let str3 = str1 + " " + str2;
console.log(str3); // 打印 "Hello, World!"

console.log("Hello" + 2); // 打印 "Hello2"，字符串连接
console.log("5" + 20);    // 打印 "520"，字符串连接
console.log("5" - 2);     // 打印 3，字符串转换为数字后相减

// 模板字符串 (Template Literals) - 使用反引号 `
// 参考 https://www.runoob.com/js/js-string-templates.html

// 内部使用双引号
let text0 = `He's often called "Runoob"`;

// 多行字符串
const multiLineText = `
  This is
  a multi-line
  text.
`;

// 插入变量
let firstName = "Bill";
let message = `Welcome ${firstName}, the length is ${text.length}`;
console.log(message); // 输出: "Welcome Bill, the length is 26"

// 插入表达式
let a1 = 5;
let b1 = 20.252;
console.log(`${a1 + b1} and ${a1 + b1.toFixed(2)}.`);
// 打印 "25.252 and 520.25."

// ==========================================================================
// 13. JavaScript 运算符
// ==========================================================================

let op1 = 5;
let op2 = 2;
console.log(op1 + op2);  // 加，打印 7
console.log(op1 - op2);  // 减，打印 3
console.log(op1 * op2);  // 乘，打印 10
console.log(op1 / op2);  // 除，打印 2.5
console.log(op1 % op2);  // 取模 (余数)，打印 1
console.log(op1 ** op2); // 幂，打印 25
console.log(++op1);      // 前置递增，打印 6
console.log(op2--);      // 后置递减，打印 2 (先使用后减1)

// 自加、自乘
let op3 = 5;
let op4 = 2;
console.log(op3 += op4); // 等同于 op3 = op3 + op4; 打印 7
console.log(op3 *= op4); // 等同于 op3 = op3 * op4; 打印 14

// ==========================================================================
// 14. JavaScript 比较 & 15. 条件语句
// ==========================================================================

let age = 18;

// == (值相等) vs === (值和类型都相等)
console.log(5 == "5");  // true
console.log(5 === "5"); // false

if (age < 18) {
    console.log("未成年");
} else if (age >= 18 && age < 60) {
    console.log("成年人");
} else {
    console.log("老年人");
}

// 三元运算符
let voteable = (age < 18) ? "Too young" : "Old enough";

// 逻辑与或非
console.log((age > 18) && (age < 65));  // 逻辑与，打印 false
console.log((age < 18) || (age > 65));  // 逻辑或，打印 false
console.log(!(age < 18));               // 逻辑非，打印 true

// ==========================================================================
// 16. JavaScript switch 语句
// ==========================================================================

let dayString;
switch (new Date().getDay()) {
    case 0:
        dayString = "Sunday";
        break; // 重要：防止继续执行后续 case
    case 1:
        dayString = "Monday";
        break;
    default:
        dayString = "Unknown Day";
}
console.log("今天是:", dayString); // 打印：今天是: Monday (取决于实际日期)


// ==========================================================================
// 17. JavaScript for 循环 & 18. while 循环 & 19. break/continue
// ==========================================================================

// for 循环
console.log("For 循环:");
for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // 跳过 2
    if (i === 4) break;    // 到 4 停止
    console.log(i); // 输出 0, 1, 3
}

// for...in (遍历对象属性)
const personObjForLoop = {fname:"John", lname:"Doe", age:25};
for (let x in personObjForLoop) {
    console.log(personObjForLoop[x]); // 输出 values
}

// for...of (遍历可迭代对象，如数组)
let numbers = [10, 20, 30];
for (let x of numbers) {
    console.log(x); // 输出 10, 20, 30
}

// while 循环
let w = 0;
while (w < 3) {
    console.log(w); // 输出 0, 1, 2
    w++;
}

// do...while 循环
let d0 = 0;
do {
    console.log(d0); // 输出 0, 1, 2
    d0++;
} while (d0 < 3);


// ==========================================================================
// 20. JavaScript typeof & 21. 类型转换 & 35. void
// ==========================================================================

console.log(typeof "John");                 // string
console.log(typeof 3.14);                   // number
console.log(typeof NaN);                    // number (注意：NaN 的类型是 number)

console.log(typeof function(){});           // function

console.log(typeof [1,2,3,4]);              // object (数组是特殊的对象)
console.log(typeof {name:'John', age:34});  // object
// typeof [1,2,3,4] 返回 "object"，这是 JavaScript 早期设计的一个"缺陷"，数组本质上是特殊类型的对象。

var person00 = null;                        // 值为 null(空), 但类型为对象
console.log(typeof null);                   // object (历史遗留 Bug)
console.log(typeof person00);               // object

var person11; // = undefined;               // 值为 undefined, 类型为 undefined
console.log(typeof undefined);              // undefined
console.log(typeof person11);               // undefined

console.log(null === undefined);            // false
console.log(null == undefined);             // true

// undefined：是所有没有赋值变量的默认值，自动赋值。
// null：主动释放一个变量引用的对象，表示一个变量不再指向任何对象地址。
//  当使用完一个比较大的对象时，需要对其进行释放内存时，设置为 null。

// 垃圾回收 (Garbage Collection, GC)：
// 它是专门释放对象内存的一个程序。
//  （1）在底层，后台伴随当前程序同时运行；引擎会定时自动调用垃圾回收期；
//  （2）总有一个对象不再被任何变量引用时，才释放。

// 正确检测数组的方法：
//  Array.isArray([1,2,3]); // true
//  [1,2,3] instanceof Array; // true

// 检测未定义变量：
// if (typeof variable === "undefined") {...}

// 检测函数是否存在：
// if (typeof myFunction === "function") {...}

// 正确检测null
// if (myVar === null) {...}

// 精准的类型检查
// 参考 https://www.runoob.com/js/js-type-conversion.html
// 可以使用 constructor 属性来查看对象是否为数组 (包含字符串 "Array"):
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}
// 可以使用 constructor 属性来查看对象是否为日期 (包含字符串 "Date"):
function isDate(myDate) {
    return myDate.constructor.toString().indexOf("Date") > -1;
}

// 类型转换
let sNum = "123";
let nNum = Number(sNum); // 字符串转数字
let sStr = String(123);  // 数字转字符串
console.log((123).toString()); // 数字转字符串的另一种方式

// 尝试输出一个对象或一个变量时 JavaScript 会自动调用变量的 toString() 方法：
var myVar;
myVar = {name:"Fjohn"}  // toString 转换为 "[object Object]"
myVar = [1,2,3,4]       // toString 转换为 "1,2,3,4"
myVar = new Date()      // toString 转换为 "Fri Jul 18 2014 09:08:55 GMT+0200"

// void 操作符。用于指定一个表达式不返回值
// 参考 https://www.runoob.com/js/js-void.html

// void(0) 常用于 HTML 链接 <a href="javascript:void(0)">点击无反应</a>
console.log(void(0)); // undefined

function getValue(){
   var a,b,c;
   a = void ( b = 5, c = 7 ); // 参数 a 将为 undefined :
   document.write('a = ' + a + ' b = ' + b +' c = ' + c );
}

// ==========================================================================
// 22. JavaScript 正则表达式 & 55. RegExp 对象
// ==========================================================================

// 语法: /pattern/modifiers
let regStr = "Visit W3Schools!";
let n = regStr.search(/w3schools/i); // i 修饰符：不区分大小写
console.log("正则匹配位置:", n); // 打印 6

let res = regStr.replace(/w3schools/i, "Microsoft");
console.log(res); // 打印 "Visit Microsoft!"

let pattern = /e/;
console.log(pattern.test("The best things in life are free!")); // 打印 true


// ==========================================================================
// 23. JavaScript 错误 & 24. 调试
// ==========================================================================

try {
    // 尝试执行的代码
    // adddlert("Welcome guest!"); // 故意写错函数名
    throw "这是一个自定义错误";
} catch(err) {
    // 处理错误
    console.log("捕获到错误:", err);
} finally {
    // 无论是否报错都会执行
    console.log("Try-Catch 结束");
}

// 调试
//  1、使用 console.log() 打印信息
//  2、使用断点调试
//  3、debugger 关键字
let debugX = 15 * 5;
// debugger; // 解除前面 debugger; 的注释，如果浏览器调试器开启，代码会在这里暂停


// ==========================================================================
// 25. JavaScript 变量提升 (Hoisting)
// ==========================================================================

// 函数声明和 var 变量声明会被提升到作用域顶部（即 js 会把声明在前面全局的位置给你声明）。不推荐这么做，尽量用到的都先手动声明。
hoistedFunc(); // 可以调用，会执行 "console.log("函数被提升了");"

function hoistedFunc() {
    console.log("函数被提升了");
}

// console.log(hoistVar); // undefined (声明被提升（即这么写，就是变量先用再声明）)。不推荐这么做，尽量用到的都先手动声明。
// var hoistVar = 5;

// let 和 const 不会被提升（暂时性死区）


// ==========================================================================
// 26. JavaScript 严格模式
// ==========================================================================
// "use strict"; // 在脚本或函数开头添加，强制更严格的解析和错误处理
// x = 3.14;       // 在严格模式下报错，因为 x 未声明

// 参考 https://www.runoob.com/js/js-strict.html

// 为什么使用严格模式:
//     消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为。
//     消除代码运行的一些不安全之处，保证代码运行的安全。
//     提高编译器效率，增加运行速度。
//     为未来新版本的Javascript做好铺垫。
// "严格模式"体现了Javascript更合理、更安全、更严谨的发展方向，包括IE 10在内的主流浏览器，都已经支持它，许多大项目已经开始全面拥抱它。
// 另一方面，同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。
// 掌握这些内容，有助于更细致深入地理解Javascript，让你变成一个更好的程序员。

// ==========================================================================
// 27. JavaScript 使用误区
// ==========================================================================

// 参考 https://www.runoob.com/js/js-mistakes.html

/*
 * 1. 赋值运算符 (=) 与 比较运算符 (==) 用错
 * 2. switch 语句默认使用 === 进行比较
 * 3. 浮点数运算精度问题: 0.1 + 0.2 !== 0.3
 * 4. 字符串断行需要反斜杠
 * 5. 分号决定语句结束；如果没加分号，js 会对每一行的行尾自动插入分号，这可能导致错误或意外行为
 * 6. 避免全局变量污染；善用变量作用域
 * 7. 忘记使用 var, let 或 const 声明变量
 * 8. null 不是 undefined；null 用于对象，undefined 用于变量
 */
console.log("浮点数精度, 0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004

// ==========================================================================
// 32. JavaScript this
// ==========================================================================

// 面向对象语言中 this 表示当前对象的一个引用。
// 但在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。
//    在方法中，this 表示该方法所属的对象。
//    如果单独使用，this 表示全局对象。
//    在函数中，this 表示全局对象。
//    在函数中，在严格模式下，this 是未定义的(undefined)。
//    在事件中，this 表示接收事件的元素。
//    类似 call() 和 apply() 方法可以将 this 引用到任何对象。

// 方法中的 this
const thisPerson = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName; // this 指向 thisPerson 对象
  }
};

// 单独使用 this
console.log("this 指向:", this); // 打印：this 指向: {}
// 在浏览器全局中指向 Window 全局对象，Node 中指向 {} 或 global
// 严格模式下，单独使用 this 也是指向全局(Global)对象。

// 函数中使用 this
function myFunctionThis() {
  return this; // 在非严格模式下，this 指向全局对象；严格模式下，this 是 undefined
}

// ==========================================================================
// 34. JavaScript JSON
// ==========================================================================

// JSON 语法规则：
//    数据为 键/值 对，键使用双引号。值的类型可以是字符串、数字、布尔值(true/false)、数组、对象或 null。
//    数据由逗号分隔。
//    大括号保存对象。
//    方括号保存数组。

// json 参考 https://www.runoob.com/json/json-tutorial.html

let jsonText = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

let jsonObj = JSON.parse(jsonText); // 将 JSON 字符串转换为 JavaScript 对象
console.log("JSON 解析, jsonObj.employees[0].firstName:", jsonObj.employees[0].firstName);

let backToJson = JSON.stringify(jsonObj); // 将 JavaScript 对象转换为 JSON 字符串
console.log("JSON 序列化:", backToJson);


// ==========================================================================
// 36. 异步编程 & 37. Promise & 38. async/await
// ==========================================================================

// 参考
// https://www.runoob.com/js/js-async.html
// https://www.runoob.com/js/js-promise.html
// https://www.runoob.com/js/js-async-await.html

// 1. 回调函数 (Callback)
// 设置 1 秒后执行 回调函数。内部启动一个新线程去执行。
console.log("开始调用 setTimeout (Callback)...");
let timeout_id = setTimeout(function() {
    console.log("setTimeout() 回调函数执行：1秒后了 (Callback)");
}, 1000);

// let interval_id = setInterval(function() {
//     console.log("每隔2秒执行一次 (Callback)");
// }, 2000);
// clearInterval(interval_id); // 停止定时器

// 2. Promise

// Promise 有三种状态：
//     pending：初始状态，既不是成功，也不是失败状态
//     fulfilled：意味着操作成功完成
//     rejected：意味着操作失败

// 忘记处理 Promise 的拒绝会导致"未捕获的 Promise 拒绝"错误。总是使用 .catch() 或 try/catch（在 async/await 中）来处理错误。
// 一旦创建，Promise 就无法取消。如果需要取消功能，可以考虑使用 AbortController 或其他模式。

let myPromise = new Promise(function(resolve, reject) {
    let x = 0;

    // 这里处理耗时操作
    // ...

    if (x == 0) {
        resolve("OK");    // 将 Promise 状态改为 fulfilled
    } else {
        reject("Error");  // 将 Promise 状态改为 rejected
    }
});

// then() 方法用于指定 Promise 状态变为 fulfilled 或 rejected 时的回调函数。
myPromise.then(
    function(value) { console.log("Promise 成功:", value); }, // 处理 fulfilled 的情况
    function(error) { console.log("Promise 失败:", error); }  // 处理 rejected 的情况
);

// 或者使用 => 箭头函数 写法
// myPromise.then(
//     (value) => {
//         console.log("Promise 成功 (箭头函数):", value)
//     },
//     (error) => {
//         console.log("Promise 失败 (箭头函数):", error)
//     }
// );

// 或使用 .then() 以及 .catch() 分别处理 fulfilled 和 rejected 的情况
// myPromise.then(function(value) {
//     console.log("Promise 成功 (then):", value);
// }).catch(function(error) {
//     console.log("Promise 失败 (catch):", error);
// });

// 使用 .finally() 方法，无论 Promise 状态如何，都会执行
myPromise.finally(function() {
    console.log("Promise 结束 (finally)");
});

// 最好按 then-catch-finally 的顺序编写程序。

// 3. Async / Await (ES2017)
// 基于 Promise 并提供更直观的语法来处理异步操作。
async function myAsyncFunction() {
    // 等待 Promise
    // let result = await myPromise;
    console.log("Async/Await: 这是一个异步函数");
    return "Async Result";
}
myAsyncFunction().then(console.log);


// ==========================================================================
// 44. JavaScript 闭包 (Closure)
// ==========================================================================
/* 闭包是指有权访问另一个函数作用域中变量的函数 */

// 参考 https://www.runoob.com/js/js-function-closures.html

let addClosure = (function () {
    let counter = 0; // 私有变量
    return function () {
        counter += 1;
        return counter;
    }
})();

console.log("闭包计数:", addClosure());
console.log("闭包计数:", addClosure());
console.log("闭包计数:", addClosure()); // counter 保持状态


// ==========================================================================
// 45 - 47. JavaScript 类 (ES6 Class)
// ==========================================================================

// 参考
// https://www.runoob.com/js/js-class-intro.html

// 类必须先声明后使用

// 定义类（class 关键字）
class CarClass {
    constructor(brand) { // 构造函数（constructor 关键字）
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
    // 静态方法：直接通过类调用，而不是实例（static 关键字）
    static staticMethod() {
        return "Static method called.";
    }
}

// 46. 类继承（extends 关键字）
class Model extends CarClass {
    constructor(brand, mod) {
        super(brand); // 调用父类构造函数（super 关键字）
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());              // 调用继承的方法，打印：I have a Ford, it is a Mustang
console.log(CarClass.staticMethod());   // 调用静态方法。对象实例不能调用静态方法，只能通过类名调用。

// 47. 类的 getter 和 setter（get 和 set 关键字），调用不需要加括号
class PersonClass {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    set fullName(name) {
        let parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}

let personClass = new PersonClass("John", "Doe");

console.log("Full Name (getter):", personClass.fullName); // 使用 getter
// 打印：Full Name (getter): John Doe

personClass.fullName = "Jane Smith"; // 使用 setter
console.log("Updated Full Name (getter):", personClass.fullName);
// 打印：Updated Full Name (getter): Jane Smith

// ==========================================================================
// 48. JavaScript prototype
// ==========================================================================

// 参考 "jsObject.js" 文件里面 的 prototype 章节


console.log("----- JavaScript 基础示例结束 -----");
