/**   
 * [genColor 根据指定的颜色值和数据集合，生成颜色集合 多用于Echarts条状图的颜色替换等，NiceFish系列的可视化图，就是基于当前的颜色基础值及其轮训算法]
 * @param {[object Array]} arr [传入的数据集合]
 * @return {[object Array]}    [返回生成好的颜色集合]
 */

const baseColor = [
    '#25859e',
    '#6acece',
    '#e78816',
    '#eabc7f',
    '#12619d',
    '#ad2532',
    '#15938d',
    '#b3aa9b',
    '#042d4c']

const genColor = (arr:any[]):string[]=>{
  let color:string [] = [];
  let num:number = 0; //指定从哪一个颜色下标处开始轮训
  for(let i = 0; i < arr.length; i++){
       if(num < baseColor.length){
           color[i] = baseColor[num++]
       }else{
           num = 0 ;
           color[i] = baseColor[num++]
       }
  }
  return color
}
export default {
    baseColor,
    genColor
}