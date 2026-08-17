class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};

        for (const number of nums) {
            map[number] = (map[number] || 0) + 1;
        }

        const pairs = Object.entries(map).sort((a, b) => b[1] - a[1]);

        const result = [];
        for (let i = 0; i < k; i++) {
            result.push(Number(pairs[i][0]));
        }
        return result;
    }
}
