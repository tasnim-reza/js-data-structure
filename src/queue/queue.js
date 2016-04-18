/**
 * Created by tasnim.reza on 17-Apr-16.
 */

function Queue() {
    this.items = [];
    this.enqueue = function (item) {
            this.items.push(item);
    }

    this.dequeue = function () {
        return this.items.shift();
    }

    this.doEmpty = function () {
        this.items = [];
    }

    this.isEmpty = function () {
        return this.items.length === 0;
    }

    this.contains = function (item) {
        return this.items.indexOf(item) > -1;
    }

    this.copyTo = function (queue) {
        queue.doEmpty();

        for (var i = 0; i < this.items.length; i++) {
            queue.enqueue(this.items[i]);
        }
    }

    this.isEqual = function (other) {
        var haveSameLength = this.items.length === other.items.length;

        if (haveSameLength) {
            var haveSameItem = false;
            for (var i = 0; i < this.items.length; i++) {
                haveSameItem = this.items[i] === other.items[i];
                if (!haveSameItem) break;
            }

            return haveSameLength && haveSameItem;
        } else
            return false;
    }
}