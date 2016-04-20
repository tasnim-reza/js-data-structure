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

function findMinimumWayToGetTotal(coins, noOfCoin, total) {

    // table[i] will be storing the minimum number of coins
    // required for i value.  So table[V] will have result
    var table = [];

    // Initialize all table values as Infinite
    for (var i = 0; i <= total; i++) {
        table[i] = Number.MAX_VALUE;
    }

    // Base case (If given value is 0)
    table[0] = 0;

    // Compute minimum coins required for all
    // values from 1 to total
    for (var i = 1; i <= total; i++) {
        // Go through all coins smaller than i
        for (var j = 0; j <= noOfCoin; j++) {
            if (coins[j] <= i) {
                var coin = coins[j],
                    subResult = table[i - coin];
                if (subResult != Number.MAX_VALUE && (subResult + 1) < table[i])
                    table[i] = subResult + 1;
            }
        }

    }

    return table[total];
}

function bottomUpDp(dp, n) {
    dp[1] = 0;  // trivial case

    for (i = 2; i <= n; i++) {
        dp[i] = 1 + dp[i - 1];

        if (i % 2 == 0)
            dp[i] = Math.min(dp[i], 1 + dp[i / 2]);

        if (i % 3 == 0)
            dp[i] = Math.min(dp[i], 1 + dp[i / 3]);
    }
    return dp[n];
}

function findAllPossibleWayToMakeChange(coins, noOfCoin, total) {
    // table[i] will be storing the number of solutions for
    // value i. We need n+1 rows as the table is consturcted
    // in bottom up manner using the base case (n = 0)
    var table = [];

    // Initialize all table values as 0
    for (var i = 0; i <= total; i++) {
        table[i] = 0;
    }

    // Base case (If given value is 0)
    table[0] = 1;

    // Pick all coins one by one and update the table[] values
    // after the index greater than or equal to the value of the
    // picked coin
    for (var i = 0; i < noOfCoin; i++) {
        var coin = coins[i];

        for (var j = coin; j <= total; j++)
            table[j] += table[j - coin];
    }

    return table[total];
}


// Driver program to test above function
(function () {
    var i, j;
    var coins = [1, 2, 3];

    var total = 4;


    //console.log("result: ", count(coins, coinSize, total));

    // console.log('result: ', dpWithLoop(total, coins))

    //console.log('result', bottomUpDp(coins, 5));

    console.log('result: ', findMinimumWayToGetTotal(coins, coins.length, total));

    //console.log('result: ', findAllPossibleWayToMakeChange(coins, coins.length, total));
})();

