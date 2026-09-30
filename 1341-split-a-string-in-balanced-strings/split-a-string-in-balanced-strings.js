/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let output=0;
    let R=0;
    let L=0;

    for(let i=0;i<s.length;i++){
        if(s[i]=="R"){
            R++;
           
        }else{
            L++;
            
        }

         if(R==L){
                output++;
                R=0;
                L=0;
            } 
    }
    return output;
};