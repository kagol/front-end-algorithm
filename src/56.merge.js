/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-intervals
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var merge = function(intervals) {
  // 先排序
  const sortIntervals = intervals.sort((a, b) => a[0] - b[0]);

  let result = [];

  // 临时变量，用来记录当前数组项，以判断是否需要合并
  let ints = sortIntervals[0];

  for (let i = 1, len = sortIntervals.length; i < len; i++) {
    let [start, end] = sortIntervals[i];

    if (ints[1] >= start) {
      // 临时变量的 end 和 当前数组项的 start 比较，前者大则存在重叠，则要重新设置 end 的值
      ints[1] = Math.max(ints[1], end)
    } else {
      // 不存在重叠，则将合并好的数据存在 result 中，并重新设置 ints 的值
      result.push(ints)
      ints = sortIntervals[i];
    }
  }

  result.push(ints);
  return result;
};

/**
 * 示例 1：

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-intervals
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
