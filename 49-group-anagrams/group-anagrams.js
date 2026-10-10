/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map={};
    for(let i=0; i<strs.length;i++){
        let s=strs[i].split("").sort().join("");

        if(!map[s]){
            map[s]=[strs[i]];
        }else{
           map[s].push(strs[i])
        }
    }

    return [...Object.values(map)]
};