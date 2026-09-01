/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let sentinal =new ListNode();
    sentinal.next=head;
    let prev=sentinal;
    let curr=head;

    while(curr){
        if(curr.val===val){
           prev.next=curr.next;
           
        }else{
            prev=prev.next;
        } 
        curr=curr.next;
    }
    return sentinal.next;
};