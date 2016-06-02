/**
 * Created by tasnim.reza on 17-Apr-16.
 */

function bubbleSort(data, x, y) {
    //move from left to right
    if (data[x] > data[x + 1]) {
        swipe(data, x + 1, x)
    }

    if (x < y)
        bubbleSort(data, ++x, y);
    else if (y > 0) {
        bubbleSort(data, 0, --y)
    }

}

function swipe(data, left, right) {
    var temp = data[left];
    data[left] = data[right];
    data[right] = temp;
}

(function () {
    var data = [57, 12, 3, 55, 34, 66, 45];
    console.log('default array: ', data)

    bubbleSort(data, 0, data.length - 1);

    console.log('sorted array: ', data)
})();