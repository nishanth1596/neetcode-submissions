class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for (const word of strs) {
            const key = word.split()[0].split("").sort().join("");
            if (!map[key]) {
                map[key] = [word];
            } else {
                map[key] = [...map[key], word];
            }
        }

        const result = [];

        for (const array of Object.entries(map)) {
            result.push(array[1]);
        }

        return result;
    }
}
