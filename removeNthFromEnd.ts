class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function findNeedRemovedNode(
  head: ListNode | null,
  k: number
): ListNode | null {
  if (!head) return null;

  let point1 = head;
  // 让指针point1走k步

  for (let i = 0; i < k; i++) {
    if (!point1.next) return head;
    point1 = point1.next;
  }

  // 这时候再申请一个指针point2 指向头节点
  let point2 = head;

  //让point1和point2同时走length-k步。也就是让point1走向链表的尾指针null
  while (point1 !== null) {
    //@ts-ignore
    point1 = point1.next;
    //@ts-ignore
    point2 = point2.next;
  }
  // point2就是指向的length - k + 1的要删除的节点
  return point2;
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  //创建虚拟头节点
  let dummy = new ListNode(-1);
  dummy.next = head;

  //要删除倒数第n个节点，就要先找到倒数第n+1个节点,也就是要删除节点的前一个节点
  //注意这里一定要从dummy开始查找。这样即使要删除的是头节点，也能找到正确的前驱节点
  let targetNode = findNeedRemovedNode(dummy, n + 1);
  //删除倒数第n个节点

  //@ts-ignore
  targetNode.next = targetNode.next.next;

  return dummy.next;
}

const list = [1];

const arrToNodeList = (list: number[]) => {
  const dummy = new ListNode(-1);
  let point = dummy;
  for (const value of list) {
    point.next = new ListNode(value);
    point = point.next;
  }
  return dummy.next;
};
const switchedNodeList = arrToNodeList(list);
removeNthFromEnd(switchedNodeList, 1);
