/**
 * Created by Reza on 13-Apr-16.
 */

function Queue(startNode, endNode) {
  this.items = [];
  this.enqueue = function (item) {
    if (this.items.indexOf(item) === -1 && item !== startNode && item != endNode)
      this.items.push(item);
  }

  this.dequeue = function () {
    return this.items.shift();
  }

  this.doEmpty = function () {
    this.items = [];
  }

  this.isEmpty = function () {
    return this.items.length === 0;
  }

  this.copyTo = function (queue) {
    queue.doEmpty();

    for (var i = 0; i < this.items.length; i++) {
      queue.enqueue(this.items[i]);
    }
  }

  this.isEqual = function (other) {
    var haveSameLength = this.items.length === other.items.length;

    if (haveSameLength) {
      var haveSameItem = false;
      for (var i = 0; i < this.items.length; i++) {
        haveSameItem = this.items[i] === other.items[i];
        if (!haveSameItem) break;
      }

      return haveSameLength && haveSameItem;
    } else
      return false;
  }
}

function findMoves(currentNode, startNode, endNode, graph, paths, currentStore, previousStore) {
  var neighborNodes = graph[currentNode],
    isEqualBothStore = false;

  for (var i = 0; i < neighborNodes.length; i++) {
    var neighbor = neighborNodes[i];

    //check if traverse is completed
    if (neighbor === endNode) {
      isEqualBothStore = currentStore.isEqual(previousStore)

      if (isEqualBothStore) {
        break;
      }

      currentStore.copyTo(previousStore)
    }

    if (neighbor !== startNode)
      calculatePossibleMove(currentStore, paths, currentNode, neighbor);
  }

  if (!isEqualBothStore)
    findMoves(currentStore.dequeue(), startNode, endNode, graph, paths, currentStore, previousStore)
}

function calculatePossibleMove(currentStore, paths, currentNode, neighbor) {
  currentStore.enqueue(neighbor);

  if (!paths[currentNode])
    paths[neighbor] = [currentNode + '->' + neighbor];

  for (var i = 0; i < (paths[currentNode] && paths[currentNode].length); i++) {
    var existingPath = paths[currentNode][i];
    var currentPath = existingPath + '->' + neighbor;
    //initialize path
    if (!paths[neighbor]) paths[neighbor] = [];

    if (isValidPath(paths, currentPath, neighbor)) {
      paths[neighbor].push(currentPath)
    }
  }

  function isValidPath(paths, currentPath, neighbor) {
    var isNotDuplicate = !paths[neighbor].find(function (path) {
      return path === currentPath;
    });
    var isNotVisited = currentPath.match(new RegExp(neighbor, 'g')).length === 1;

    return isNotDuplicate && isNotVisited;
  }
}

(function () {
  var graph = {
    'a': ['b', 'c', 'd'],
    'b': ['a', 'c', 'f', 'e'],
    'c': ['a', 'b', 'f'],
    'd': ['a', 'g'],
    'e': ['b', 'g'],
    'f': ['c', 'b', 'g'],
    'g': ['d', 'f', 'e', 'h'],
    'h': ['g']
  }

  var resultedPaths = {},
    currentNode = 'a',
    startNode = currentNode,
    endNode = 'h',
    store = new Queue(startNode, endNode),
    previousStore = new Queue(startNode, endNode);

  findMoves(currentNode, startNode, endNode, graph, resultedPaths, store, previousStore);

  console.log('Queue based\n');
  console.log('Possible Moves: ', resultedPaths[endNode].length, '\nPaths are :\n', resultedPaths[endNode].join('\n'));
  console.log('\n\n');
})();
