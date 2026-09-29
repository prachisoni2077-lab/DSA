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
     for(let i=0;i<s.length;i++){
        if(vowel.includes(s[i])){
           if(map[s[i]]>v){
            v=map[s[i]];
           }
        }else{
            if(map[s[i]]>c){
                c=map[s[i]];
            }
        }
     }
     return v+c;
};