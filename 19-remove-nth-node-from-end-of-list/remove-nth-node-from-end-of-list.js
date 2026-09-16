/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentinal= new ListNode();
    sentinal.next=head;

    let length =0;
    while(head){
        head=head.next;
        length++;
    }

    let prevPos=length-n;

    let prev=sentinal;;

    for(let i=0; i<prevPos;i++){
        prev=prev.next;
    }
    prev.next=prev.next.next;

    return sentinal.next;

};