/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。



作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/array-and-string/cxqdh/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
var searchInsert = function(nums, target) {
  let len = nums.length;
  let left = 0, right = len - 1;

  // 如果目标值比最大的还大，就直接返回 len
  if (target > nums[len - 1]) {
    return len;
  }

  // 二分查找
  while (left <= right) {
    const mid = Math.ceil((left + right) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return left;
};

/**
 * 示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2
示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1

作者：力扣 (LeetCode)
链接：https://leetcode-cn.com/leetbook/read/array-and-string/cxqdh/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
