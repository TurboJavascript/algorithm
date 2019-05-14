"use strict";
// import ranNum from "../random-number";
Object.defineProperty(exports, "__esModule", { value: true });
/**
  * [bubbleSort 冒泡排序算法]
  * @param  {[object Array]} arr    [要进行排序的数组]
  * return {void}
  */
var basicBubbleSort = function (arr) {
    for (var i = 1; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = [arr[j + 1], arr[j + 1] = arr[j]][0];
            }
        }
    }
};
/*
* 优化后的冒泡算法
  [时间复杂度  最好O(n) 最差 O(n^2)]
  [空间复杂度  O(1)]
  [稳定性  稳定]
*/
var bubbleSort = function (arr) {
    var len = arr.length, change = true;
    for (var i = 1; i < len && change; i++) {
        change = false;
        for (var j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = [arr[j + 1], arr[j + 1] = arr[j]][0];
                change = true;
            }
        }
    }
};
exports.default = bubbleSort;
// let basicBubbleArr:any[] = [],bubbleArr:any[] = [];
// for(let i = 0;i < 10000; i++){
//    basicBubbleArr[i] = ranNum(0,1001);
//    bubbleArr[i] = ranNum(0,1001);
// }
// unit test basicBubbleSort
// console.time('basicBubbleSort')
// basicBubbleSort(basicBubbleArr);
// console.log(basicBubbleArr)
// console.timeEnd('basicBubbleSort') // bubbleSort: 156.927978515625ms
// unit test bubbleSort
// console.time('bubbleSort')
// // console.log(bubbleArr1)`
// bubbleSort(bubbleArr);
// console.log(bubbleArr)
// console.timeEnd('bubbleSort') // bubbleSort: 108.702880859375ms
//# sourceMappingURL=index.js.map