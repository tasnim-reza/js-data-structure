/**
 * Created by tasnim.reza on 17-Apr-16.
 */

// Array A[] has the items to sort; array B[] is a work array.
function topDownMergeSort(A, B, n) {
    topDownSplitMerge(A, 0, n, B);
}

// iBegin is inclusive; iEnd is exclusive (A[iEnd] is not in the set).
function topDownSplitMerge(A, iBegin, iEnd, B) {
    if (iEnd - iBegin < 2)                       // if run size == 1
        return;                                 //   consider it sorted
    // recursively split runs into two halves until run size == 1,
    // then merge them and return back up the call chain
    var iMiddle = (iEnd + iBegin) / 2;              // iMiddle = mid point
    topDownSplitMerge(A, iBegin, iMiddle, B);  // split / merge left  half
    topDownSplitMerge(A, iMiddle, iEnd, B);  // split / merge right half

    topDownMerge(A, iBegin, iMiddle, iEnd, B);  // merge the two half runs
    copyArray(B, iBegin, iEnd, A);              // copy the merged runs back to A
}

//  Left half is A[iBegin :iMiddle-1].
// Right half is A[iMiddle:iEnd-1   ].
function topDownMerge(A, iBegin, iMiddle, iEnd, B) {
    var i = iBegin, j = iMiddle;

    // While there are elements in the left or right runs...
    for (var k = iBegin; k < iEnd; k++) {
        // If left run head exists and is <= existing right run head.
        if (i < iMiddle && (j >= iEnd || A[i] <= A[j])) {
            B[k] = A[i];
            i = i + 1;
        } else {
            B[k] = A[j];
            j = j + 1;
        }
    }
}

function copyArray(B, iBegin, iEnd, A)
{
    for (var k = iBegin; k < iEnd; k++)
        A[k] = B[k];
}

(function () {
    var data = [57, 12, 3, 55, 34, 66, 45, 13];
    var result = [];
    console.log('default array: ', data)

    topDownMergeSort(data, result, data.length);

    console.log('sorted array: ', result)
})();