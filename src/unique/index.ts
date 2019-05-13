// import ranNum from "../random-number";

/**    
 * [unique hash算法 数组去重 效率最高]
 * @params {object Array} arr [要去重的数组]
 * @return {object Array}     [新的去重后的数组]
 */

const unique = (arr:any[]):any[]=>{
    let result:any[] = [],hash:any[] = [];
 
    for(let i = 0; i < arr.length; i++){
        if(!hash[arr[i]]){
            result.push(arr[i]);
            hash[arr[i]] = true;
        }
    }
    return result
 }
 
 export default unique
 
 
//  let arr :any[] = [];

//  for(let i = 0; i < 10000000; i++){
//     arr[i] = ranNum(0,1001)
//  }
 // unit test hash unique

//  console.time('unique')
//  let newArr = unique(arr);
//  console.log(newArr.sort((a,b) => a-b))
//  console.timeEnd('unique') //unique: 27.180908203125ms

//  console.time('set')
//  const resArr = new Set(arr);
//  console.log(Array.from(resArr))
//  console.timeEnd('set') //set: 206.840087890625ms