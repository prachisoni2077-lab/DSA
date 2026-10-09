/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   let w=s.split("").sort().join("");
   let  d=t.split("").sort().join("");
    if(w.length!=d.length){
        return false;
    }
   for(let i=0;i<w.length;i++){
    
    if(w[i]==d[i]){
        continue;
    }else{
        return false;
    }
   }
   return true;
};