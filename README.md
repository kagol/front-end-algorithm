# 前端算法

- getMaxContinuousSegment 最长连续片段
- calcDistance 计算距离
- sharedLetters 共享字符
- maxFreeMemoryLen 最大空闲内存

## getMaxContinuousSegment 最长连续片段

题目描述：

在一个无序整数数组中，找出连续增长片段最长的一段, 增长步长是1。

示例：

```
var array = [3, 2, 4, 5, 6, 1, 9];
var result = getMaxContinuousSegment(array);
console.log('result:', result); // [4,5,6]
```

## calcDistance 计算距离

题目描述：

两个数组arr1和arr2，从arr1中找满足以下条件的元素：

|a - b| < distance

返回满足条件的元素数量

示例：

```
const arr1 = [3, 5, 8]
const arr2 = [6, 12, 4, 7]
const distance = 6
const result = calcDistance(arr1, arr2, distance)
/**
 * |3-6|=3<6
 * |3-12|=9>6
 * |3-4|=1<6
 * |3-7|=4<6
 * 
 * |5-6|=1<6
 * |5-12|=7>6
 * |5-4|=1<6
 * |5-7|=2<6
 * 
 * |8-6|=2<6
 * |8-12|=4<6
 * |8-4|=4<6
 * |8-7|=3<6
 * 
 * 只有8满足条件，所以返回1
 */
console.log('result:', result) // 1
```

## sharedLetters 共享字符

题目描述：

多个单词组成的数组，找出所有单词都有的字符（可重复，顺序无关）

返回这些重复字符组成的字符串。

示例：

```
const wordArr = ['smooth', 'common', 'mooring']
/**
 * 三个单词都有'm'，并且都有两个'o'，返回'moo'（'omo', 'oom'也可）
 */
const result = sharedLetters(wordArr)
console.log('result:', result)
```

## maxFreeMemoryLen 最大空闲内存

题目描述：

用一个'x'和'.'两个字符组成的字符串代表内存，'x'代表内存被占用，'.'代表内存空闲，

最多释放cnt个内存（将'x'变成'.'），使连续的空闲内存最长

返回这个最长的连续内存的长度

示例：

```
const memory = '..x..x..xx...'
const cnt = 2
/**
 * 释放第一个和第二个内存地址（'x'变成'.'），变成'........xx...'
 * 最长空闲内存长度为8
 */
const result = maxFreeMemoryLen(memory, cnt)
console.log('result:', result) // 8
```
