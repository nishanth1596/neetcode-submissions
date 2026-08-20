class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let codedStrs = "";

        for (let i = 0; i < strs.length; i++) {
            const length = strs[i].length;
            codedStrs += length + "#" + strs[i];
        }

        return codedStrs;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    let decodedStrs = []

    for (let i =0; i < str.length;  i++){
        const hashIndex = str.indexOf("#", i)
        const number = Number(str.slice(i, hashIndex))
        const codedKey = number + '#'

        if (str.slice(i, hashIndex+1) === codedKey){
            decodedStrs.push(str.slice(hashIndex+1, hashIndex + number+ 1))
            i = number+ hashIndex
        };
    }

    return decodedStrs
    }
}
