/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let n=nums.length;
  let sum=n*(n+1)/2;
   let summ=0;
  for(let i=0;i<nums.length;i++){
    summ=summ+nums[i]
  }
   return sum-summ;
};