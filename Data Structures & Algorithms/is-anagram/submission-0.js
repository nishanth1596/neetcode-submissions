class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const map = {};

        for (let i = 0; i < s.length; i++) {
            if (!map[s[i]]) {
                map[s[i]] = 1;
            } else {
                map[s[i]] = map[s[i]] + 1;
            }
        }

        for (let j = 0; j < t.length; j++) {
            if (map[t[j]]) {
                map[t[j]] = map[t[j]] - 1;
            } else {
                return false;
            }
        }

        for (const key in map) {
            if (map[key] !== 0) return false;
        }

        return true;
    }
}
