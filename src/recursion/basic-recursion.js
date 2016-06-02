/**
 * Created by Reza on 07-May-16.
 */

function stringReverse(string) {
    if (string === '') return '';


    var revStr = stringReverse(string.substring(1, string.length));
    return revStr + string.charAt(0);
}

//by index switching
function stringReverse1(string, idx) {
    if (string.length === idx) return '';


    var revStr = stringReverse1(string, ++idx);
    return revStr + string[idx - 1];
}

function countSpaceInString(string, idx, count) {
    if (!idx)  idx = 0;
    if (!count) count = 0;

    if (string[idx] === ' ')
        count++;

    if (string.length === idx)
        return count;

    var result = countSpaceInString(string, ++idx, count);

    return result;
}

function countSpaceInString1(string, idx) {
    if (string.length === idx) return 0;

    var result = countSpaceInString1(string, ++idx);

    return (string[idx - 1] === ' ' ? 1 : 0) + result;
}

function findLastOccurrence(string, search) {
    if (string[string.length - 1] === search)
        return string.length;
    else if (string.length === 0)
        return -1;
    else
        return findLastOccurrence(string.substr(0, string.length - 1), search);
}

function findLastOccurrence1(string, search, idx) {
    if (string[idx - 1] === search) return idx;
    else
        return findLastOccurrence1(string, search, --idx);
}

function isPalindrome(s) {
    if (s.length <= 1)return true;
    else return s[0] === s[s.length - 1]
        && isPalindrome(s.substr(1, s.length - 2))
}

var hanoi = function (disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        document.write("Move disc " + disc + " from " + src + " to " + dst + "<br />");
        hanoi(disc - 1, aux, src, dst);
    }
};
//hanoi(3,"src","aux","dst");

function DoubleString() {
    this.check = function (string) {
        if (string.length % 2 != 0) return 'not square';

        var part1 = string.slice(0, string.length / 2);
        var part2 = string.slice(string.length / 2, string.length);

        if (part1 === part2)
            return 'square';
        else
            return 'not square';
    }
}
/*
 console.log(new DoubleString().check('MAZAIMAZAI'));
 console.log(new DoubleString().check('MAMAZAIZAI'));
 console.log(new DoubleString().check('IOI'));
 console.log(new DoubleString().check('AA'));
 console.log(new DoubleString().check('ABCCBA'));
 console.log(new DoubleString().check('Y'));*/

function GerrymanderEasy() {
    this.getMax = function (a, b, k) {
        var j = 0, max;
        while ((a.length - j) >= (k + 1)) {
            var x = 0, y = 0;

            for (var i = j; i <= (k + j); i++) {
                y += a[i];
                x += b[i];
            }

            var result = x / y;
            if (!max) max = result;
            else if (result > max)
                max = result;
            j++;
        }
        return max;
    }
}
console.log(new GerrymanderEasy().getMax([5, 1, 2, 7], [4, 0, 2, 2], 2))
console.log(new GerrymanderEasy().getMax([12,34,56,78,90], [1,1,1,1,1], 1))
console.log(new GerrymanderEasy().getMax([10000,10000,10000,10000,10000,10000,10000,10000,10000,10000], [3,1,4,1,5,9,2,6,5,3], 5))