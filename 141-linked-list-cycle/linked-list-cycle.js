/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let sett= new Set();
    let curr= head;

    while(curr!=null){
     if(sett.has(curr)){
        return true;;
     }
     sett.add(curr);
     curr=curr.next;

        
    }
    return false;
   
};