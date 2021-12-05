import { addTwoNumbers, ListNode } from './addTwoNumbers';

const a = new ListNode(3, null);
const b = new ListNode(4, a);
const c = new ListNode(2, b);
const e = new ListNode(4, null);
const f = new ListNode(6, e);
const g = new ListNode(5, f);

it('should return true', () => {
  const result = addTwoNumbers(c, g);
  expect(result).toEqual({"next": {"next": {"next": null, "val": 8}, "val": 0}, "val": 7})
});
