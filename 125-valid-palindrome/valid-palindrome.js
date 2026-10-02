/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.toLowerCase();
    // let filteredString="";
    // for(let i=0;i<s.length;i++){
    //     if(s[i].match(/[a-z0-9]/i)){
    //         filteredString=filteredString + s[i];
    //     }
    // }
   
    //  let q=filteredString;
    //  let y=q.length-1;
    // for(let i=0;i<q.length/2;i++){
    //     if(q[i]===q[y]){
    //        y--;
    //     }else{
    //         return false;
    //     }
    // }
    let filter="";
    let rev="";
    let q=s.length-1;
    for(let i=0;i<s.length;i++){
        if(s[i].match(/[a-z0-9]/i)){
            filter=filter+s[i];
           

        }
        if(s[q].match(/[a-z0-9]/i)){
             rev=rev+s[q];
        }
        q--;
    }
    if(filter!=rev){
        return false;
    }

    return true;
};