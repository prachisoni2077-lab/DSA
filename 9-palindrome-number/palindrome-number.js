/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xcopy=x;
    let rev=0;
    if(x<0) return false;
    while(x>0){
        rem=x%10;
        rev=(10*rev)+rem;
        x=Math.floor(x/10);
    }
    if(rev==xcopy){
        return true;
    }else{
        return false;
    }

};