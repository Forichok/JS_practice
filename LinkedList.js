class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}

(function () {
    LinkedList.prototype.push = function (data) {
        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        tail.next = newNode;
        return this.head;
    };

    LinkedList.prototype.getAt = function (index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    };

    LinkedList.prototype.getByIndex = function (index) {
        const node = this.getAt(index);

        return node === null ? null : node.data;
    };



    LinkedList.prototype.insertAt = function (data, index) {

        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1);
        let newNode = new Node(data);
        newNode.next = previous.next;
        previous.next = newNode;

        return this.head
    };

    LinkedList.prototype.first = function () {
        return this.head;
    };

    LinkedList.prototype.last = function () {

        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        return tail;
    };

    LinkedList.prototype.next = function (node) {
        if (node.next) {
            return node.next;
        }
        return null;
    };

    LinkedList.prototype.prev = function (node) {
        let tmp = this.head;
        while (tmp.next !== null) {
            if (tmp.next === node) {
                return tmp;
            }
            tmp = tmp.next;
        }
        return null;
    };

    LinkedList.prototype.find = function (data) {
        let tmp = this.head;
        while (tmp.next !== null) {
            if (tmp.data === data) {
                return tmp;
            }
            tmp = tmp.next;
        }
        return -1;
    };

    LinkedList.prototype.deleteAt = function (index) {

        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);

        if (!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next;
        return this;
    };

    LinkedList.prototype.clear = function () {
        this.head = null;
    };

    LinkedList.prototype.toString = function () {
        let tmp = this.head;

        let out = '';
        while (tmp && tmp.next !== null) {
            out += tmp.data + ', ';
            tmp = tmp.next;
        }
        tmp && (out += tmp.data);
        return out;
    };

    LinkedList.prototype.print = function () {
        console.log(this.toString());
    };

    LinkedList.prototype.mergeSort = function (head) {
        this._mergeSort(this.head);
        return this;
    };

    LinkedList.prototype._mergeSort = function (head) {
        if (head == null || head.next == null) {
            return head;
        }

        let middle = this.getMiddle(head);
        let left_head = head;
        let right_head = middle.next;
        middle.next = null;

        return this.merge(this._mergeSort(left_head), this._mergeSort(right_head));
    };


    LinkedList.prototype.merge = function (a, b) {
        let dummyHead = new Node();

        for (var current = dummyHead; a != null && b != null; current = current.next) {
            if (a.data <= b.data) {
                current.next = a;
                a = a.next;
            } else {
                current.next = b;
                b = b.next;
            }

        }
        current.next = (a === null) ? b : a;
        return dummyHead.next;
    };

    LinkedList.prototype.getMiddle = function (head) {
        if (head == null)
            return head;

        let slow = head;
        let fast = head;

        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    };

    LinkedList.prototype.reverse = function () {
        let current = this.head,
            previous = null;
        while (current) {
            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
        return this;
    };

    LinkedList.prototype.mergeWithList = function (list) {
        this._mergeTwoSortedHead(this.head, list.head);
        return this;
    };

    LinkedList.prototype._mergeTwoSortedHead = function (l1, l2) {
        let mergedLinkedListHead = new Node();
        let runner = mergedLinkedListHead;
        while (l1 && l2) {
            if (l1.data > l2.data) {
                runner.next = l2;
                l2 = l2.next;
            } else {
                runner.next = l1;
                l1 = l1.next;
            }
            runner = runner.next;
        }
        runner.next = l1 || l2;
        return mergedLinkedListHead.next;
    };

})()