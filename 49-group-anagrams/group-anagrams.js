/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   let map = {};

    for (let i = 0; i < strs.length; i++) {
        let freqArr = Array(26).fill(0);
        let s = strs[i];

        for (let j = 0; j < s.length; j++) {
            let index = s[j].charCodeAt(0) - 'a'.charCodeAt(0);
            freqArr[index]++;
        }

        let key = freqArr.join("#");

        if (!map[key]) {
            map[key] = [s];
        } else {
            map[key].push(s);
        }
    }

    return Object.values(map);
};