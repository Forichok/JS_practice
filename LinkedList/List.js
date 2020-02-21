class List {
    constructor() {
        this.head = null;
    }
}

(function () {
    List.prototype.push = function (data) {
        const newNode = new Node(data);

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

    List.prototype.getAt = function (index) {
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

    List.prototype.getByIndex = function (index) {
        const node = this.getAt(index);

        return node === null ? null : node.data;
    };


    List.prototype.insertAt = function (data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return this;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return this;
        }

        const previous = this.getAt(index - 1);
        const newNode = new Node(data);
        newNode.next = previous.next;
        previous.next = newNode;

        return this;
    };

    List.prototype.first = function () {
        return this.head;
    };

    List.prototype.last = function () {
        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        return tail;
    };

    List.prototype.next = function (node) {
        if (node.next) {
            return node.next;
        }
        return null;
    };

    List.prototype.prev = function (node) {
        let tmp = this.head;
        while (tmp.next !== null) {
            if (tmp.next === node) {
                return tmp;
            }
            tmp = tmp.next;
        }
        return null;
    };

    List.prototype.find = function (data) {
        let tmp = this.head;
        while (tmp.next !== null) {
            if (tmp.data === data) {
                return tmp;
            }
            tmp = tmp.next;
        }
        return -1;
    };

    List.prototype.deleteAt = function (index) {
        if (!this.head) {
            this.head = new Node();
            return this;
        }

        if (index === 0) {
            this.head = this.head.next;
            return this;
        }

        const previous = this.getAt(index - 1);

        if (!previous || !previous.next) {
            return this;
        }

        previous.next = previous.next.next;
        return this;
    };

    List.prototype.clear = function () {
        this.head = null;
    };

    List.prototype.toString = function () {
        let tmp = this.head;

        let out = '';
        while (tmp && tmp.next !== null) {
            out += `${tmp.data}, `;
            tmp = tmp.next;
        }
        tmp && (out += tmp.data);
        return out;
    };

    List.prototype.print = function () {
        console.log(this.toString());
    };

    List.prototype.mergeSort = function (head) {
        this._mergeSort(this.head);
        return this;
    };

    List.prototype._mergeSort = function (head) {
        if (head == null || head.next == null) {
            return head;
        }

        const middle = this.getMiddle(head);
        const left_head = head;
        const right_head = middle.next;
        middle.next = null;

        return this.merge(this._mergeSort(left_head), this._mergeSort(right_head));
    };


    List.prototype.merge = function (a, b) {
        const dummyHead = new Node();

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

    List.prototype.getMiddle = function (head) {
        if (head == null) return head;

        let slow = head;
        let fast = head;

        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    };

    List.prototype.reverse = function () {
        let current = this.head;
        let previous = null;
        while (current) {
            const { next } = current;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
        return this;
    };

    List.prototype.mergeWithList = function (list) {
        this._mergeTwoSortedHead(this.head, list.head);
        return this;
    };

    // eslint-disable-next-line no-underscore-dangle
    List.prototype._mergeTwoSortedHead = function (l1, l2) {
        const mergedListHead = new Node();
        let runner = mergedListHead;
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
        return mergedListHead.next;
    };
}());
