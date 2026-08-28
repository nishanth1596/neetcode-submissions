class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for (const word of strs) {
            const key = word.split("").sort().join("");
            if (!map[key]) {
                map[key] = [word];
            } else {
                map[key].push(word);
            }
        }

        return Object.values(map);
    }
}
