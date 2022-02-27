/**
 * @param {number[]} nums
 * @return {number}
 * 给你一个下标从 0 开始的整数数组 nums ，请你找到 最左边 的中间位置 middleIndex （也就是所有可能中间位置下标最小的一个）。

  中间位置 middleIndex 是满足 nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1] 的数组下标。

  如果 middleIndex == 0 ，左边部分的和定义为 0 。类似的，如果 middleIndex == nums.length - 1 ，右边部分的和定义为 0 。

  请你返回满足上述条件 最左边 的 middleIndex ，如果不存在这样的中间位置，请你返回 -1 。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/find-the-middle-index-in-array
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var findMiddleIndex = function(nums) {
  let result = -1;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let sum1 = 0, sum2 = 0;

    for (let m = 0; m < i; m++) {
      sum1 += nums[m];
    }

    for (let n = i + 1; n < len; n++) {
      sum2 += nums[n];
    }

    if (sum1 === sum2) {
      result = i;
      break;
    }
  }
  return result;
};
/**
 * 示例 1：

输入：nums = [2,3,-1,8,4]
输出：3
解释：
下标 3 之前的数字和为：2 + 3 + -1 = 4
下标 3 之后的数字和为：4 = 4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-the-middle-index-in-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

