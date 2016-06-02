/**
 * Created by tasnim.reza on 17-Apr-16.
 */

function bsIndexSwitching(data, targetValue, mid) {
    var foundIdx = -1;

    if (data[mid] === targetValue)
        return mid;
    else if (targetValue > data[mid]) { //right side
        mid = Math.floor((data.length - mid) / 2);
        foundIdx = bsIndexSwitching(data, targetValue, mid);
    } else if (targetValue < data[mid]) {
        mid = Math.floor(mid / 2);
        foundIdx = bs(data, targetValue, mid);
    }

    return foundIdx;
}

//creating new array
function bs(data, value) {
    var mid = Math.floor(data.length / 2);
    var midVal = data[mid];
    var foundIdx = -1;
    if (midVal === value)
        return mid;
    else if (value > midVal) { //right side
        var rightData = data.slice(mid + 1, data.length);
        foundIdx = bs(rightData, value);
    } else if (value < midVal) {
        var lefData = data.slice(0, mid);
        foundIdx = bs(lefData, value);
    }

    return foundIdx;
}


(function () {
    var data = [1, 4, 2, 5, 6, 7, 3, 8];
    data = data.sort(function (x, y) {
        return x > y;
    })

    //var foundIdx = bs(data, 3);

    var foundIdx = bsIndexSwitching(data, 3, Math.floor(data.length/2));
    console.log('found idx: ', foundIdx);
})();