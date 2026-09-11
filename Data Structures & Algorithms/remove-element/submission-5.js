class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let left = 0;
        let right = nums.length - 1;
        let k = 0;

        while (left < right) {
            const leftValue = nums[left];
            const rightValue = nums[right];

            if (rightValue === val) {
                right--;
            } else if (leftValue === val) {
                const change = leftValue;
                nums[left] = rightValue;
                nums[right] = change;
                left++;
                right--;
            } else {
                left++;
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                k++;
            } else {
                return k
            }
        }
        return k
    }
}
