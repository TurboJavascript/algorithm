"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var random_number_1 = require("../random-number");
/*函数记忆: 让函数记住曾经处理过的参数及其对应的处理结果
* 为什么： 避免重复计算
* 何时： 只要一个函数，有可能处理大量重复的数据时
* 如何: 利用闭包，为函数添加一个受保护的关联数组
*       关联数组中保存曾经计算过的参数和处理结果*/
/**
 * [isPrime 判断是否为质数的方法]
 * @param  {number} num [传入的参数]
 * @return {boolean}
*/
var isPrime = function (num) {
    if (num <= 3)
        return true;
    else {
        for (var i = 2; i < Math.sqrt(num); i++) {
            if (num % i === 0)
                return false;
        }
        return true;
    }
};
/**
 * [isMemoryPrime 带有记忆功能的判断质数方法]
 * @params {number} num 传入的参数
 * @return {boolean}
*/
var isMemoryPrime = (function () {
    var hash = [];
    return function (num) {
        if (num <= 3)
            return true;
        else if (hash[num] !== undefined) {
            return true;
        }
        else {
            for (var i = 2; i < Math.sqrt(num); i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            hash[num] = true;
            return true;
        }
    };
})();
exports.default = {
    isPrime: isPrime,
    isMemoryPrime: isMemoryPrime
};
var resArr = [];
for (var i = 0; i < 1000000; i++) {
    resArr[i] = random_number_1.default(0, 1001);
}
// unit test isPrime
// console.time('isPrime')
// for(let i = 0; i < resArr.length;i++){
//     isPrime(resArr[i]);
// }
// console.timeEnd('isPrime') //isPrime: 39.343017578125ms
// // unit test isMemoryPrime
// console.time('isMemoryPrime')
// for(let i = 0; i < resArr.length;i++){
//     isMemoryPrime(resArr[i]);
// }
// console.timeEnd('isMemoryPrime')   //isMemoryPrime: 34.153076171875ms
//# sourceMappingURL=index.js.map