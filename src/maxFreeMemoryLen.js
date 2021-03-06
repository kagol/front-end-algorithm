/**
 * 用一个'x'和'.'两个字符组成的字符串代表内存，'x'代表内存被占用，'.'代表内存空闲，
 * 最多释放cnt个内存（将'x'变成'.'），使连续的空闲内存最长
 * 返回这个最长的连续内存的长度
 */
const maxFreeMemoryLen = (memory, cnt) => {
  let maxMemoryLen = 0
  const freeMemoryGroup = memory.split('x')
  let memoryQueue = [] // 用队列存储释放cnt个内存后的当前空闲内存（用于计算最大内存）
  freeMemoryGroup.forEach(groupItem => {
    if (memoryQueue.length < cnt + 1) {
      memoryQueue.push(groupItem)
    } else {
      const sumMemoryInQueue = sum(memoryQueue)
      if (sumMemoryInQueue > maxMemoryLen) {
        maxMemoryLen = sumMemoryInQueue
      }
      memoryQueue.shift() // 出队
      memoryQueue.push(groupItem)
    }
    const lastSumMemoryInQueue = sum(memoryQueue)
    if (lastSumMemoryInQueue > maxMemoryLen) {
      maxMemoryLen = lastSumMemoryInQueue
    }
  })

  // 释放的内存需要计算进来
  const realFreeMemoryNum = cnt > freeMemoryGroup.length - 1 ? freeMemoryGroup.length - 1 : cnt

  return maxMemoryLen + realFreeMemoryNum
}

// 计算内存总长度
const sum = (arr) => {
  let total = 0
  arr.forEach(item => {
    total += item.length
  })
  return total
} 

const memory = '..x..x..xx...'
const cnt = 2
/**
 * 释放第一个和第二个内存地址（'x'变成'.'），变成'........xx...'
 * 最长空闲内存长度为8
 */
const result = maxFreeMemoryLen(memory, cnt)
console.log('result:', result) // 8
