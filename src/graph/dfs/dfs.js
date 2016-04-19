/**
 * Created by tasnim.reza on 17-Apr-16.
 */

//find shortest path using dfs

//print all connected nodes
function dfsPrintAllNodes(graph, startNode, endNode) {
    var stack = [],
        keys = Object.keys(graph);

    recurse(startNode, stack);

    function recurse(node, stack) {
        console.log('visited ', node);
        for (var i = 0; i < graph[node].length; i++) {
            var currentNode = graph[node][i];

            if (stack.indexOf(currentNode) === -1) {
                stack.push(node);
                recurse(currentNode, stack)
            }
        }
    }
}

function dfsPrintAllPaths(graph, startNode, endNode) {
    var stack = [],
        paths = [],
        keys = Object.keys(graph);
    var count = 0;
    recurse(startNode, stack);
    console.log(paths);

    function recurse(node, stack) {
        console.log(stack, count++);
        stack.push(node);

        if (node === endNode) {
            paths.push('-')
            stack.forEach(function(p){
                paths.push(p);
            });

            console.log('path no ', stack);
        }

        for (var i = 0; i < graph[node].length; i++) {
            var currentNode = graph[node][i];
            console.log(stack, count++);
            if (stack.indexOf(currentNode) === -1) {
                recurse(currentNode, stack)
            }
        }

        stack.pop();
    }
}

(function () {
    var graph = {
        'a': ['b', 'd'],
        'b': ['a', 'd', 'c'],
        'c': ['b', 'd', 'f'],
        'd': ['a', 'b', 'c', 'f', 'e'],
        'e': ['d'],
        'f': ['c', 'd']
    };

    /*var graph = {
     'a': ['d'],
     'b': ['a', 'd', 'c'],
     'c': ['d', 'f'],
     'd': ['e'],
     'e': ['d'],
     'f': [ 'd']
     };*/

    //dfsPrintAllNodes(graph, 'b', 'e');

    dfsPrintAllPaths(graph, 'b', 'e');
})();