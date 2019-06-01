<p align="center">
    <img width="300" src="src/assets/img/yanyunchangfeng.png">
</p>

##  介绍
你好，我是徐晓东，笔名[燕云长风](https://www.yanyunchangfeng.com)。大漠穷秋于 2019-03-16 21:22 赠此笔名。   
寓意：结合李白著名的边塞诗《关山月》取【燕云长风】—— 长风几万里，吹度玉门关。

这是一系列的算法题，如下:

1. [冒泡算法](src/app/bubble-sort/index.ts)   

2. [快速排序](src/app/quick-sort/index.ts) 

3. [插入排序](src/app/insert-sort/index.ts)

4. [质数判定](src/app/is-prime/index.ts)

5. [数组去重](src/app/unique/index.ts)

5. [日历算法](src/app/calendar-algorithm/index.ts)

6. [生成随机数](src/app/random-number/index.ts)

7. [颜色轮训算法](src/app/color-util/index.ts)

7. [类的多重继承](src/app/multi-inherit/index.ts)

## 下载
```
  git clone  https://github.com/yanyunchangfeng/algorithm.git
```

## 安装
```
   npm  install yycf-algorithm
```
## 使用

```
 1. 以对象方式引入所有方法
 import algorithm from 'yycf-algorithm/algorithm';

  algorithm.bubbleSort();
  algorithm.insertSort();
  algorithm.quickSort();
  algorithm.unique();
  algorithm.isPrime();
  algorithm.getMonthData();
  algorithm.genColor();
  algorithm.copyProperities();
  algorithm.mix();

 2.按需引入

 import bubbleSort   from 'yycf-algorithm/algorithm/bubble-sort';
 import quickSort    from 'yycf-algorithm/algorithm/quick-sort';
 import insertSort   from 'yycf-algorithm/algorithm/insert-sort';
 import unique       from 'yycf-algorithm/algorithm/unique';
 import isPrime      from 'yycf-algorithm/algorithm/is-prime';
 import getMonthData from 'yycf-algorithm/algorithm/calendar-algorithm';
 import color        from 'yycf-algorithm/algorithm/color-util';
 import multiInherit from 'yycf-algorithm/algorithm/multi-inherit';
 import ranNum       from 'yycf-algorithm/algorithm/random-number';

 bubbleSort();
 quickSort();
 insertSort();
 unique();
 isPrime();
 getMonthData();
 color.genColor();
 multiInherit.copyProperties();
 multiInherit.mix();
 ranNum();

```
## Jest Unit 测试

### 安装
```
   npm install --save-dev jest typescript ts-jest @types/jest  or yarn add --dev jest typescript ts-jest @types/jest
```
### 创建测试ts类型的配置文件 jest config file
```
   npx ts-jest config:init or  yarn ts-jest config:init
```
### 具体配置参数文档 请参照官网：  
* https://jestjs.io/docs/en/configuration.html

### 运行测试
```
npm t  or yarn test
```

## cypress e2e 测试

### 安装
```
  npm install cypress --save-dev or  yarn add cypress --dev
```
### 打开cypress 测试
```
   npx cypress open  or  yarn run cypress open
```
### 添加 npm script in package.json
```
{
  "scripts": {
    "cypress:open": "cypress open"
  }
}

```

### typescript文件测试,需在cypress 目录文件夹下创建tsconfig.json
```
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": "../node_modules",
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress"]
  },
  "include": [
    "**/*.ts"
  ]
}
```

### 创建测试文件需要在cypress/integration 文件夹下创建
```
   touch {your_project}/cypress/integration/sample_spec.(j|t)s
```

### 打开测试,选择指定文件进行e2e测试 
```
    npm run cypress:open
```

### 具体配置参数文档 请参照官网：  
* https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements

### 运行测试
```
npm t  or yarn test
```

## 我的个人博客  

* [燕云长风](https://www.yanyunchangfeng.com) 

## 我参与的系列项目

1. [NiceFish]( https://gitee.com/mumu-osc/NiceFish)：美人鱼，这是一个微型Blog系统，前端基于Angular7.0 + PrimeNG7.1.0。（GVIP 码云最有价值的开源项目 3160 ☆)
2. [NiceFish-React]( https://gitee.com/mumu-osc/NiceFish-React)：这是React版的实现，和 NiceFish Angular 版本保持风格一致。采用React Hooks 16.8.3 版本，使用TypeScript、Ant Design组件库以及Bootstrap v4.2.1 开发。  (7 ☆)
3. [OpenWMS-Frontend](https://gitee.com/mumu-osc/OpenWMS-Frontend)：OpenWMS项目前端基于 Angular 7.0 + PrimeNG 7.1.0。  (已推荐 199 ☆)
4. [nicefish-spring-cloud](https://gitee.com/mumu-osc/nicefish-spring-cloud)：这是NiceFish的服务端代码，基于SpringCloud。已经完成了一些基本的功能，如 SpringSecurity+OAuth2+JWT 实现SSO，文章、用户、评论等的分页查询等。如果你需要与这个后端代码进行对接，请检出本项目的 for-spring-cloud 分支。 (已推荐 113 ☆)
 
## 我的社交主页  

1. [燕云长风知乎](https://zhihu.com/people/hbxyxuxiaodong)  
2. [燕云长风知乎专栏](https://zhuanlan.zhihu.com/yanyunchangfeng) 
3. [燕云长风github](https://github.com/yanyunchangfeng)  
4. [燕云长风gitee](https://gitee.com/yanyunchangfeng)  
5. [燕云长风twitter](https://twitter.com/yanyunchangfeng)  
6. [燕云长风medium](https://medium.com/@yanyunchangfeng)  
 
## 开源许可证

MIT