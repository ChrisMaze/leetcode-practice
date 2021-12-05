 export class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

export  function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const result = new ListNode(0, null);
    if (l1 === null) l1 = new ListNode(0, null);
    if (l2 === null) l2 = new ListNode(0, null);
    if ((l1.val + l2.val) < 10)  {
        result.val = l1.val + l2.val;
    } else {
        result.val = l1.val + l2.val - 10;
        if (l1.next) l1.next = new ListNode(l1.next.val+1, l1.next.next);
        else l1.next = new ListNode(1, null)
    }
    if (l1.next !== null || l2.next !== null) {
        result.next = addTwoNumbers(l1.next, l2.next);
    }
    return result;
};

