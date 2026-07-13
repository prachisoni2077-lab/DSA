/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let temp=0;
    let max=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            max++;
            
        }else{
           temp=Math.max(max,temp);
            max=0;
        }
    }
    return Math.max(temp,max) ;
};