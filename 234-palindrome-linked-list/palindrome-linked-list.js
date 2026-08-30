/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //finding the middle element

    let slow = fast =head;

    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }

    //reverse the second half of list

    let prev =null;
    let curr=slow;

    while(curr!=null){
        let temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
        
    }

    //checking for palindrome

    first= head;
    second=prev;

    while(second!=null){
      if(first.val!=second.val){
        return false;
      }

        first=first.next;
        second=second.next;
    }
    return true;
    
    };