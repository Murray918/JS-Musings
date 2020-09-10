// const list = {
//   head: {
//     value: 6,
//     next: {
//       value: 10,
//       next: {
//         value: 12,
//         next: {
//           value: 3,
//           next: null,
//         },
//       },
//     },
//   },
// };

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      node = node.next;
      count++;
    }
    return count;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode.next) {
      while (lastNode.next) lastNode = lastNode.next;
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }

  add(newNodeData) {
    const lastNode = this.getLast()
    lastNode.next = newNodeData //?
    return this
  }

  removeNode() {
    let current = this.head
    let prev = null
    if (prev) this.head.next = null
    while(current) {
        prev = current
        current = current.next
    }
  }
}


let node1 = new ListNode(6);
let node2 = new ListNode(10);
let node3 = new ListNode(12);
let node4 = new ListNode(3);

node1.next = node2;
node2.next = node3;
node3.next = node4;

let list = new LinkedList(node1);

list.getFirst(); //?
list.size(); //?
list.getLast(); //?
list.add(6)