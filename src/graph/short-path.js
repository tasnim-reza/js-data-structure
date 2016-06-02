/**
 * Created by tasnim.reza on 13-Apr-16.
 */
function Queue() {
  this.items = [];
  this.enqueue = function (item) {
    this.items.push(item);
  }
  this.dequeue = function () {
    return this.items.shift();
  }
  this.isEmpty = function () {
    return this.items.length === 0;
  }
}

function findShortPath(graph, source) {
  var queue = new Queue();
  var info = [];

  var keys = Object.keys(graph);
  for (var i = 0; i < keys.length; i++) {
    info[keys[i]] = {
      distance: null,
      prevNode: null
    };
  }
  queue.enqueue(source);
  info[source].distance = 0;

  while (!queue.isEmpty()) {
    var v = queue.dequeue();

    graph[v].forEach(function (w) {
      if (info[w].distance === null) {
        queue.enqueue(w);
        info[w].distance = info[v].distance + 1;
        info[w].prevNode = v;

      }
    });
  }
  return info;
}

(function () {
  var graph1 = {
    'a': ['b', 'c', 'd'],
    'b': ['a', 'c', 'f', 'e'],
    'c': ['a', 'b', 'f'],
    'd': ['a', 'g'],
    'e': ['b', 'g'],
    'f': ['c', 'b', 'g'],
    'g': ['d', 'f', 'e', 'h'],
    'h': ['g']
  };

  var graph = {
    'a': ['b'],
    'b': ['a', 'c', 'e'],
    'c': ['b', 'e', 'd'],
    'd': ['c', 'f'],
    'e': ['b', 'c'],
    'f': ['d']
  }

  var result = findShortPath(graph, 'a');
  console.log(result);
  var keys = Object.keys(graph);

  function calculateShortPath(currentIdx, shortPath) {

    if (result[currentIdx].prevNode != null)
      shortPath.push(result[currentIdx].prevNode)

    if (result[currentIdx].prevNode != null)
      calculateShortPath(result[currentIdx].prevNode, shortPath)

  }

  var shortPath = [];
  calculateShortPath(keys[keys.length - 1], shortPath);
  console.log('\n');
  console.log('\n');
  console.log('short path',  'h->' + shortPath.join('->'))
  console.log('\n');
})()
