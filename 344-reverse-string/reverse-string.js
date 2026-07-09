/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
      let x=s.length - 1;
    for(let i=0;i<x;i++){
        let temp=s[i];
        s[i]=s[x];
        s[x]=temp;
        x--;
    }
    return;
    
};