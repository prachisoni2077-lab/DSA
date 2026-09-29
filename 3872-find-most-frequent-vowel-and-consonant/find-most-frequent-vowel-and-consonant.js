/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map={};
     
     for(let i=0; i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]]=1;
        }else{
            map[s[i]]++;
        }
     }
    let vowel=["a","e","i","o","u"];
    let v=0;
    let c=0;
    let keys=Object.keys(map);
     for(let i=0;i<keys.length;i++){
        if(vowel.includes(keys[i])){
           if(map[keys[i]]>v){
            v=map[keys[i]];
           }
        }else{
            if(map[keys[i]]>c){
                c=map[keys[i]];
            }
        }
     }
     return v+c;
};