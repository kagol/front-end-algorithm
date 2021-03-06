/**
 * 用一个'x'和'.'两个字符组成的字符串代表内存，'x'代表内存被占用，'.'代表内存空闲，
 * 最多释放cnt个内存（将'x'变成'.'），使连续的空闲内存最长
 * 返回这个最长的连续内存的长度
 */
const maxFreeMemoryLen = (memory, cnt) => {

}

const memory = '..x..x..xx...'
const cnt = 2
/**
 * 释放第一个和第二个内存地址（'x'变成'.'），变成'........xx...'
 * 最长空闲内存长度为8
 */
const result = maxFreeMemoryLen(memory, cnt)
console.log('result:', result) // 8
