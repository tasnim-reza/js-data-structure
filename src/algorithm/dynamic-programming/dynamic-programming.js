/**
 * Created by tasnim.reza on 17-Apr-16.
 */

function count(S, m, n) {
    // If n is 0 then there is 1 solution (do not include any coin)
    if (n == 0)
        return 1;

    // If n is less than 0 then no solution exists
    if (n < 0)
        return 0;

    // If there are no coins and n is greater than 0, then no solution exist
    if (m <= 0 && n >= 1)
        return 0;

    // count is sum of solutions (i) including S[m-1] (ii) excluding S[m-1]
    return count(S, m - 1, n) + count(S, m, n - S[m - 1]);
}

function dpWithLoop(total, coins) {
    var t = [], r = [];
    t[0] = 0;

    for(var i =0; i<=total; i++){
        t[i] = Number.MAX_SAFE_INTEGER - 1;
        r[i] = -1;
    }

    for (var j = 0; j < coins.length; j++) {
        for (var i = 1; i <= total; i++) {
            if(i>= coins[j]) {
                if ( (t[i - coins[j]] + 1)  < t[i]) {
                    t[i] = 1 + t[i-coins[j]];
                    r[i] = j;
                }
            }
        }
    }

    return t[total];
}

// Driver program to test above function
(function () {
    var i, j;
    var coins = [1, 2, 3, 4];

    var coinSize = coins.length / coins[0],
        total = 5;



    //console.log("result: ", count(coins, coinSize, sumValue));

    console.log('result: ', dpWithLoop(total, coins))
})();

var result = (function a() {
    function b(msg) {
        console.log('print msg', msg);
    }

    return b;
})();

