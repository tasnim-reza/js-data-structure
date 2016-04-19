/**
 * Created by tasnim.reza on 17-Apr-16.
 */

function bfsPrintAllNodes(graph, startNode, endNode) {
    var queue = new Queue();
    var visited = []
    visited.push(startNode);
    while (startNode) {
        console.log(startNode);

        for (var i = 0; i < graph[startNode].length; i++) {
            var currentNode = graph[startNode][i];
            if (visited.indexOf(currentNode) === -1) {
                visited.push(currentNode);
                queue.enqueue(currentNode);
            }
        }

        startNode = queue.dequeue();
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

    bfsPrintAllNodes(graph, 'b', 'e');

    //bfsPrintAllPaths(graph, 'b', 'e');
})();