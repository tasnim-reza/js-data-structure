/**
 * Created by tasnim.reza on 17-Apr-16.
 */

//find shortest path using dfs

function dfs(graph, startNode, endNode) {
    var stack = [],
        keys = Object.keys(graph);

    recurse(startNode, stack);

    function recurse(node, stack) {
        for (var i = 0; i < graph[node].length; i++) {
            if (stack.indexOf(node) === -1) {
                stack.push(node);
                recurse(graph[node][i], stack)
            }
        }
        console.log(stack.pop());
    }
}

(function () {
    var graph = {
        'a': ['b', 'd'],
        'b': ['a', 'd'],
        'c': ['b', 'd'],
        'd': ['a', 'b', 'c', 'f', 'e'],
        'e': ['d'],
        'f': ['c', 'd']
    };

    dfs(graph, 'a', 'e');
})();