/**
 * Created by tasnim.reza on 17-Apr-16.
 */

function Stack(maxSize) {
    var items = [],
        top = 0,
        maxSize = maxSize;

    this.push = function (item) {

    }

    this.pop = function () {
        return items[top];
    }

    this.peek = function () {
        if(!this.isEmpty())
            return items[top];
    }

    this.isFull = function () {
        return top === maxSize;
    }

    this.isEmpty = function () {
        return top === 0;
    }
}