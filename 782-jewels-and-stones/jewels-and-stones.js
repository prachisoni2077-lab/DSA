/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
   let jset= new Set();
   for(let i=0;i<jewels.length;i++){
    jset.add(jewels[i]);
   }

   let x=0;
   for(let j=0;j<stones.length;j++){
    if(jset.has(stones[j])){
        x++;
    }
   }
    
    return x;
};