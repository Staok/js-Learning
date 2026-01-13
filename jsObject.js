// JavaScript 对象概念
// https://www.runoob.com/js/js-objects.html

// !!! 各种数据类型对象的方法
// 参考 https://www.runoob.com/jsref/jsref-tutorial.html

// ==============================================================

// String 对象用于处理文本（字符串）。

// String 专题：https://www.runoob.com/js/js-obj-string.html
// String 属性和方法 https://www.runoob.com/jsref/jsref-obj-string.html

// String 对象属性
// 属性          描述
// constructor   对创建该对象的函数的引用
// length        字符串的长度
// prototype     允许您向对象添加属性和方法

// String 对象方法
// 方法                  描述
// charAt()              返回在指定位置的字符。
// charCodeAt()          返回在指定的位置的字符的 Unicode 编码。
// concat()              连接两个或更多字符串，并返回新的字符串。
// endsWith()            判断当前字符串是否是以指定的子字符串结尾的（区分大小写）。
// fromCharCode()        将 Unicode 编码转为字符。
// indexOf()             返回某个指定的字符串值在字符串中首次出现的位置。
// includes()            查找字符串中是否包含指定的子字符串。
// lastIndexOf()         从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。
// match()               查找找到一个或多个正则表达式的匹配。
// repeat()              复制字符串指定次数，并将它们连接在一起返回。
// replace()             在字符串中查找匹配的子串，并替换与正则表达式匹配的子串。
// replaceAll()          在字符串中查找匹配的子串，并替换与正则表达式匹配的所有子串。
// search()              查找与正则表达式相匹配的值。
// slice()               提取字符串的片断，并在新的字符串中返回被提取的部分。
// split()               把字符串分割为字符串数组。
// startsWith()          查看字符串是否以指定的子字符串开头。
// substr()              从起始索引号提取字符串中指定数目的字符。
// substring()           提取字符串中两个指定的索引号之间的字符。
// toLowerCase()         把字符串转换为小写。
// toUpperCase()         把字符串转换为大写。
// trim()                去除字符串两边的空白。
// toLocaleLowerCase()   根据本地主机的语言环境把字符串转换为小写。
// toLocaleUpperCase()   根据本地主机的语言环境把字符串转换为大写。
// valueOf()             返回某个字符串对象的原始值。
// toString()            返回一个字符串。

// ==============================================================

// Boolean 对象表示 true 和 false 两个值。

// Boolean 专题：https://www.runoob.com/js/js-obj-boolean.html
// Boolean 属性和方法 https://www.runoob.com/jsref/jsref-obj-boolean.html

// Boolean 对象属性
// 属性          描述
// constructor   返回对创建此对象的 Boolean 函数的引用
// prototype     使您有能力向对象添加属性和方法。

// Boolean 对象方法
// 方法          描述
// toString()    把布尔值转换为字符串，并返回结果。
// valueOf()     返回 Boolean 对象的原始值。

// ==============================================================

// Number 对象用于表示数值。

// Number 专题：https://www.runoob.com/js/js-obj-number.html
// Number 属性和方法 https://www.runoob.com/jsref/jsref-obj-number.html

// Number 对象属性
// 属性                  描述
// constructor           返回对创建此对象的 Number 函数的引用。
// MAX_VALUE             可表示的最大的数。
// MIN_VALUE             可表示的最小的数。
// NEGATIVE_INFINITY     负无穷大，溢出时返回该值。
// NaN                   非数字值。
// POSITIVE_INFINITY     正无穷大，溢出时返回该值。
// prototype             允许您可以向对象添加属性和方法。

// Number 对象的方法
// 方法                                  描述
// isFinite                              检测指定参数是否为无穷大。
// isInteger                             检测指定参数是否为整数。
// isNaN                                 检测指定参数是否为 NaN。
// isSafeInteger                         检测指定参数是否为安全整数。
// toExponential(x)                      把对象的值转换为指数计数法。
// toFixed(x)                            把数字转换为字符串，结果的小数点后有指定位数的数字。
// toLocaleString(locales, options)      返回数字在特定语言环境下的表示字符串。
// toPrecision(x)                        把数字格式化为指定的长度。
// toString()                            把数字转换为字符串，使用指定的基数。
// valueOf()                             返回一个 Number 对象的基本数字值。

let numX = 9.656;
console.log(numX.toExponential(2)); // 指数计数法
console.log(numX.toFixed(2));       // 指定小数位数
console.log(numX.toPrecision(2));   // 指定总位数

console.log(parseInt("10.33"));     // 10
console.log(parseFloat("10.33"));   // 10.33

// ==============================================================

// Math 对象提供数学常数和函数的属性和方法。

// Math 专题：https://www.runoob.com/js/js-obj-math.html
// Math 属性和方法 https://www.runoob.com/jsref/jsref-obj-math.html

console.log(Math.PI);            // 圆周率
console.log(Math.round(4.7));    // 四舍五入: 5
console.log(Math.pow(8, 2));     // 8的平方: 64
console.log(Math.sqrt(64));      // 开根号: 8
console.log(Math.abs(-4.7));     // 绝对值: 4.7
console.log(Math.ceil(4.4));     // 向上取整: 5
console.log(Math.floor(4.7));    // 向下取整: 4
console.log(Math.min(0, 150, 30, 20, -8, -200));  // 最小值
console.log(Math.random());      // 0 到 1 之间的随机数

// Math 对象属性
// 属性       描述
// E          返回算术常量 e，即自然对数的底数（约等于2.718）。
// LN2        返回 2 的自然对数（约等于0.693）。
// LN10       返回 10 的自然对数（约等于2.302）。
// LOG2E      返回以 2 为底的 e 的对数（约等于 1.4426950408889634）。
// LOG10E     返回以 10 为底的 e 的对数（约等于0.434）。
// PI         返回圆周率（约等于3.14159）。
// SQRT1_2    返回 2 的平方根的倒数（约等于 0.707）。
// SQRT2      返回 2 的平方根（约等于 1.414）。

// Math 对象方法
// 方法                  描述
// abs(x)                返回 x 的绝对值。
// acos(x)               返回 x 的反余弦值。
// asin(x)               返回 x 的反正弦值。
// atan(x)               以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。
// atan2(y,x)            返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。
// ceil(x)               对数进行上舍入。
// cos(x)                返回数的余弦。
// exp(x)                返回 Ex 的指数。
// floor(x)              对 x 进行下舍入。
// log(x)                返回数的自然对数（底为e）。
// max(x,y,z,...,n)      返回 x,y,z,...,n 中的最高值。
// min(x,y,z,...,n)      返回 x,y,z,...,n中的最低值。
// pow(x,y)              返回 x 的 y 次幂。
// random()              返回 0 ~ 1 之间的随机数。
// round(x)              四舍五入。
// sin(x)                返回数的正弦。
// sqrt(x)               返回数的平方根。
// tan(x)                返回角的正切。
// tanh(x)               返回一个数的双曲正切函数值。
// trunc(x)              将数字的小数部分去掉，只保留整数部分。

// ==============================================================

// Array 对象表示一个具有动态大小的、可以存储不同类型元素的有序集合。

// Array 专题：https://www.runoob.com/js/js-obj-array.html
// Array 属性和方法 https://www.runoob.com/jsref/jsref-obj-array.html

// Array 属性
// 属性          描述
// constructor   返回创建数组对象的原型函数。
// length        设置或返回数组元素的个数。
// prototype     允许你向数组对象添加属性或方法。

// Array 对象方法
// 方法                    描述
// [...]                   创建一个新数组。
// concat()                连接两个或更多的数组，并返回结果。
// copyWithin()            从数组的指定位置拷贝元素到数组的另一个指定位置中。
// entries()               返回数组的可迭代对象。
// every()                 检测数值元素的每个元素是否都符合条件。
// fill()                  使用一个固定值来填充数组。
// filter()                检测数值元素，并返回符合条件所有元素的数组。
// find()                  返回符合传入测试（函数）条件的数组元素。
// findIndex()             返回符合传入测试（函数）条件的数组元素索引。
// forEach()               数组每个元素都执行一次回调函数。
// from()                  通过给定的对象中创建一个数组。
// fromAsync()             从异步可迭代对象、可迭代对象或类数组对象创建一个新的数组。
// includes()              判断一个数组是否包含一个指定的值。
// indexOf()               搜索数组中的元素，并返回它所在的位置。
// isArray()               判断对象是否为数组。
// join()                  把数组的所有元素放入一个字符串。
// keys()                  返回数组的可迭代对象，包含原始数组的键(key)。
// map()                   通过指定函数处理数组的每个元素，并返回处理后的数组。
// pop()                   删除数组的最后一个元素并返回删除的元素。
// push()                  向数组的末尾添加一个或更多元素，并返回新的长度。
// reduce()                将数组元素计算为一个值（从左到右）。
// reduceRight()           将数组元素计算为一个值（从右到左）。
// reverse()               反转数组的元素顺序。
// shift()                 删除并返回数组的第一个元素。
// slice()                 选取数组的一部分，并返回一个新数组。
// some()                  检测数组元素中是否有元素符合指定条件。
// sort()                  对数组的元素进行排序。
// splice()                从数组中添加或删除元素。
// toString()              把数组转换为字符串，并返回结果。
// toLocaleString()        根据当前环境的语言设置（locale）来格式化数组中的每个元素。
// unshift()               向数组的开头添加一个或更多元素，并返回新的长度。
// valueOf()               返回数组对象的原始值。
// Array.of()              将一组值转换为数组。
// Array.at()              用于接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。
// Array.flat()            创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
// Array.flatMap()         使用映射函数映射每个元素，然后将结果压缩成一个新数组。
// Array.with()            更新数组元素。
// Array.findLastIndex()   对数组中的每个元素执行一个函数。
// Array.lastIndexOf()     对数组中的每个元素执行一个函数。
// Array.findLast()        对数组中的每个元素执行一个函数。
// Array.toReversed()      反转数组中元素的顺序。
// Array.toSorted()        对数组中的元素按字母顺序进行排序。
// Array.toSpliced()       向数组中添加和/或移除元素。
// [Symbol.iterator]()     返回一个数组迭代器对象，该对象会产生数组中每个索引的值。

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());     // 转字符串
console.log(fruits.join(" * "));    // 自定义分隔符
fruits.pop();                       // 移除最后一个
fruits.push("Kiwi");                // 添加到最后
fruits.shift();                     // 移除第一个
fruits.unshift("Lemon");            // 添加到开头
console.log(fruits);

// 数组排序
fruits.sort();
console.log("排序后:", fruits);

// 数组迭代 map
const numArr = [1, 2, 3];
const mapArr = numArr.map(x => x * 2);
console.log("Map 结果:", mapArr); // [2, 4, 6]

// ==============================================================

// RegExp 对象用于匹配文本字符串中的字符组合。

// RegExp 专题：https://www.runoob.com/js/js-obj-regexp.html
// RegExp 属性和方法 https://www.runoob.com/jsref/jsref-obj-regexp.html

// ==============================================================

// Date 对象用于处理日期和时间。

// Date 专题：https://www.runoob.com/js/js-obj-date.html
// Date 属性和方法 https://www.runoob.com/jsref/jsref-obj-date.html

// Date 对象属性
// 属性          描述
// constructor   返回对创建此对象的 Date 函数的引用。
// prototype     使您有能力向对象添加属性和方法。

// Date 对象方法
// 方法                      描述
// getDate()                 从 Date 对象返回一个月中的某一天 (1 ~ 31)。
// getDay()                  从 Date 对象返回一周中的某一天 (0 ~ 6)。
// getFullYear()             从 Date 对象以四位数字返回年份。
// getHours()                返回 Date 对象的小时 (0 ~ 23)。
// getMilliseconds()         返回 Date 对象的毫秒(0 ~ 999)。
// getMinutes()              返回 Date 对象的分钟 (0 ~ 59)。
// getMonth()                从 Date 对象返回月份 (0 ~ 11)。
// getSeconds()              返回 Date 对象的秒数 (0 ~ 59)。
// getTime()                 返回 1970 年 1 月 1 日至今的毫秒数。
// getTimezoneOffset()       返回本地时间与格林威治标准时间 (GMT) 的分钟差。
// getUTCDate()              根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。
// getUTCDay()               根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。
// getUTCFullYear()          根据世界时从 Date 对象返回四位数的年份。
// getUTCHours()             根据世界时返回 Date 对象的小时 (0 ~ 23)。
// getUTCMilliseconds()      根据世界时返回 Date 对象的毫秒(0 ~ 999)。
// getUTCMinutes()           根据世界时返回 Date 对象的分钟 (0 ~ 59)。
// getUTCMonth()             根据世界时从 Date 对象返回月份 (0 ~ 11)。
// getUTCSeconds()           根据世界时返回 Date 对象的秒钟 (0 ~ 59)。
// getYear()                 已废弃。 请使用 getFullYear() 方法代替。
// parse()                   返回1970年1月1日午夜到指定日期（字符串）的毫秒数。
// setDate()                 设置 Date 对象中月的某一天 (1 ~ 31)。
// setFullYear()             设置 Date 对象中的年份（四位数字）。
// setHours()                设置 Date 对象中的小时 (0 ~ 23)。
// setMilliseconds()         设置 Date 对象中的毫秒 (0 ~ 999)。
// setMinutes()              设置 Date 对象中的分钟 (0 ~ 59)。
// setMonth()                设置 Date 对象中月份 (0 ~ 11)。
// setSeconds()              设置 Date 对象中的秒钟 (0 ~ 59)。
// setTime()                 setTime() 方法以毫秒设置 Date 对象。
// setUTCDate()              根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。
// setUTCFullYear()          根据世界时设置 Date 对象中的年份（四位数字）。
// setUTCHours()             根据世界时设置 Date 对象中的小时 (0 ~ 23)。
// setUTCMilliseconds()      根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。
// setUTCMinutes()           根据世界时设置 Date 对象中的分钟 (0 ~ 59)。
// setUTCMonth()             根据世界时设置 Date 对象中的月份 (0 ~ 11)。
// setUTCSeconds()           setUTCSeconds() 方法用于根据世界时 (UTC) 设置指定时间的秒字段。
// setYear()                 已废弃。请使用 setFullYear() 方法代替。
// toDateString()            把 Date 对象的日期部分转换为字符串。
// toGMTString()             已废弃。请使用 toUTCString() 方法代替。
// toISOString()             使用 ISO 标准返回字符串的日期格式。
// toJSON()                  以 JSON 数据格式返回日期字符串。
// toLocaleDateString()      根据本地时间格式，把 Date 对象的日期部分转换为字符串。
// toLocaleTimeString()      根据本地时间格式，把 Date 对象的时间部分转换为字符串。
// toLocaleString()          根据本地时间格式，把 Date 对象转换为字符串。
// toString()                把 Date 对象转换为字符串。
// toTimeString()            把 Date 对象的时间部分转换为字符串。
// toUTCString()             根据世界时，把 Date 对象转换为字符串。
//                           实例：
//                           var today = new Date();
//                           var UTCstring = today.toUTCString();
// UTC()                     根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。
// valueOf()                 返回 Date 对象的原始值。
// now()                     返回当前时间的毫秒数。

const d = new Date();
console.log("当前时间:", d);
console.log("年份:", d.getFullYear());
console.log("时间戳:", d.getTime());

// ==============================================================

// JavaScript 全局属性
// 属性          描述
// Infinity      代表正的无穷大的数值。
// NaN           指示某个值是不是数字值。
// undefined     指示未定义的值。

// JavaScript 全局函数
// 函数                      描述
// decodeURI()               解码某个编码的 URI。
// decodeURIComponent()      解码一个编码的 URI 组件。
// encodeURI()               把字符串编码为 URI。
// encodeURIComponent()      把字符串编码为 URI 组件。
// escape()                  对字符串进行编码。
// eval()                    计算 JavaScript 字符串，并把它作为脚本代码来执行。
// isFinite()                检查某个值是否为有穷大的数。
// isNaN()                   检查某个值是否是数字。
// Number()                  把对象的值转换为数字。
// parseFloat()              解析一个字符串并返回一个浮点数。
// parseInt()                解析一个字符串并返回一个整数。
// String()                  把对象的值转换为字符串。
// unescape()                对由 escape() 编码的字符串进行解码。

// ==============================================================

// prototype 原型链继承。使用 类 和 类继承 会更清晰。
// 参考 https://www.runoob.com/js/js-object-prototype.html
// 类继承，以及和 prototype 的对比 https://www.runoob.com/js/js-class-inheritance.html

// 所有的 JavaScript 对象都会从一个原型（prototype）中继承属性和方法

function PrototyePerson(first, last) {
    this.firstName = first;
    this.lastName = last;
}
// 向构造函数添加新属性
PrototyePerson.prototype.nationality = "English";

// 添加新方法
PrototyePerson.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};

let p1 = new PrototyePerson("John", "Doe");
console.log("原型继承属性:", p1.nationality);
console.log("原型继承方法:", p1.fullName());
