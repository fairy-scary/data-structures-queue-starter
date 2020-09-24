// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(val, next = null) {
        this.value = val;
        this.next = next;
    } 
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.front) {
            this.front = newNode;
            this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }

        this.length++
        return this.size()
    }

    dequeue() {
      let removed;

      if (!this.front) return null

      if (this.length === 1) {
        removed = this.front
        this.front = null;
        this.back = null;
      }
      
      if (this.length >= 2) {
        removed = this.front;
        this.front = this.front.next;
      }
      
      this.length--
      return removed.value;
    }

    size() {
        return this.length
    }
}

exports.Node = Node;
exports.Queue = Queue;

// ✓ Should accept a single input parameter
// ✓ Should create a new node with the value provided as input
// 4) Should reassign both the front and back pointers when a new node is added to the back of an empty queue
// [1] [2] [3]=>null
// [1] <= [2][3] dequeue
// [2][3] <=[4] enqueue
// 5) Should reassign only the front pointer when new nodes are added to the back of the queue of size one or greater
 //6) Should point the next property of the front node to the node that follows it for queues of size one or greater
// 7) Should increment the queue's length by one each time a node is added to the queue
// 8) Should return the size of the queue after a new node is added to the queue
// dequeue
// 9) Should not accept any input parameters
// 10) Should not throw an error when calling dequeue on an empty queue
// 11) Should return null if called on an empty queue
// 12) Should reassign the front and back pointers to null if there is only one node in the queue
// 13) Should reassign the front pointer to the node just behind the front node for queues of size two or greater
// 14) Should decrement the queue's length by one each time a node is removed from the queue
// 15) Should return the value of the node removed from the queue