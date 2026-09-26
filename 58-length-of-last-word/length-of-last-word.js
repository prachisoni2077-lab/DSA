/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n= s.length-1;
    let count=0;
    while(n>=0){
    if(count!=0 && s[n]==" "){
        break;
    }else if(s[n]==" " && count==0){
        n--;
    }else{
        count++;
        n--;
    }
    }
    return count;
    };