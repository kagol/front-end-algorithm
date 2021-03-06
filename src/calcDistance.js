/**
 * 两个数组arr1和arr2，从arr1中找满足以下条件的元素：
 * |a - b| < distance
 * 返回满足条件的元素数量
 */
const calcDistance = (arr1, arr2, distance) => {
  let count = 0;
  arr1.forEach(item1 => {
    if (arr2.every(item2 => getDistance(item1, item2) < distance)) {
      count++
    }
  })
  return count
}

const getDistance = (item1, item2) => {
  const distance = item1 - item2
  return distance > 0 ? distance : -distance
}

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
