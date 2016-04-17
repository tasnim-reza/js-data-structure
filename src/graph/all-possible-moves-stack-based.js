/**
 * Created by Reza on 15-Apr-16.
 */

function findMoves(graph, currentNode, destination, allPath, currentPath) {
  allPath.push(currentNode);
  currentPath.push(currentNode);

  if (currentNode === destination) {
    console.log('Path: ', allPath.join('->'));
  }
  else {
    for (var i = 0; i < graph[currentNode].length; i++) {
      var neighbor = graph[currentNode][i];

      //avoid twice visit
      if (!(currentPath.indexOf(neighbor) > -1))
        findMoves(graph, neighbor, destination, allPath, currentPath);
    }
  }

  allPath.pop();
  currentPath.pop();

}

(function () {
  /*
  Solution based on stack type
   */
  var graph = {
      'a': ['b', 'c', 'd'],
      'b': ['a', 'c', 'f', 'e'],
      'c': ['a', 'b', 'f'],
      'd': ['a', 'g'],
      'e': ['b', 'g'],
      'f': ['c', 'b', 'g'],
      'g': ['d', 'f', 'e', 'h'],
      'h': ['g']
    },
    startNode = 'a',
    endNode = 'h',
    allPathStack = [],
    currentPathStack = [];

  console.log('stack based\n');
  findMoves(graph, startNode, endNode, allPathStack, currentPathStack)
})();
