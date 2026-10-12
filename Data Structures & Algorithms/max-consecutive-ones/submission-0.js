class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        let oneCount=0
        let maxCount=0

        for(let i=0;i<nums.length;i++) {
            if (nums[i] === 1) {
                oneCount++
                if(oneCount>maxCount){
                    maxCount=oneCount
                }
            }
            else oneCount=0
        }

        return maxCount

    }
}
