class Stack extends List {
    constructor() {
        super();
    }
}

(function () {

    Stack.prototype.pop = function () {
        const current = Stack.prototype.first.call(this);
        Stack.prototype.deleteAt.call(this, 0);
        return current.data;
    }

    Stack.prototype.push = function (data) {
        Stack.prototype.insertAt.call(this, data, 0);
    }

    Stack.prototype.top = function () {
        var current = this.head;
        if (this.head !== null) {
            while (current.next !== null) {
                current = current.next;
            }
            const prev = this.prev(current);
            if (this.head === prev) {
                this.head = null;
            } else {
                prev.next = null;
            }
            return current.data;
        } else {
            return null;
        }
    }

    Stack.prototype.isEmpty = function () {
        return (size < 1) ? true : false;
    }

})();