/**
 * Created by tasnim.reza on 17-Apr-16.
 */

http://code.tutsplus.com/articles/data-structures-with-javascript-tree--cms-23393

    function Tree(data) {
        var node = new Node(data);
        this.root = node;

        //1,2,3,4,5,6,7
        this.bfsQueue = function (tree, endNode) {

            var queue = new Queue();

            queue.enqueue(tree.root);
            var currentNode = queue.dequeue();

            while (currentNode) {
                for (var i = 0; i < currentNode.children.length; i++) {
                    var child = currentNode.children[i];
                    queue.enqueue(child);
                }
                console.log(currentNode.data);
                currentNode = queue.dequeue();
            }
        }

        //order: 1 4 7 3 2 6 5
        this.bfsStack = function (tree, endNode) {

            var stack = [];

            stack.push(tree.root);
            var currentNode = stack.pop();

            while (currentNode) {
                for (var i = 0; i < currentNode.children.length; i++) {
                    var child = currentNode.children[i];
                    stack.push(child);
                }
                console.log(currentNode.data);
                currentNode = stack.pop();
            }
        }

        //5,6,2,3,7,4,1
        this.dfs = function (tree) {
            recurse(tree.root);

            function recurse(currentNode) {
                for (var i = 0; i < currentNode.children.length; i++) {
                    recurse(currentNode.children[i]);
                }

                console.log(currentNode.data);
            }

        }

        this.dfsStack = function (tree) {
            var stack = [];
            stack.push(tree.root);

            recurse(tree.root);

            function recurse(currentNode) {
                for (var i = 0; i < currentNode.children.length; i++) {
                    stack.push(currentNode.children[i])
                    recurse(currentNode.children[i]);
                }

                var item = stack.pop();

                console.log(item.data);
            }

        }
    }


(function () {
    var tree = new Tree('1');

    tree.root.children.push(new Node('2'));
    tree.root.children[0].parent = tree;

    tree.root.children.push(new Node('3'));
    tree.root.children[1].parent = tree;

    tree.root.children.push(new Node('4'));
    tree.root.children[2].parent = tree;

    tree.root.children[0].children.push(new Node('5'));
    tree.root.children[0].children[0].parent = tree.root.children[0];

    tree.root.children[0].children.push(new Node('6'));
    tree.root.children[0].children[1].parent = tree.root.children[0];

    tree.root.children[2].children.push(new Node('7'));
    tree.root.children[2].children[0].parent = tree.root.children[2];

    console.log(tree);

    //tree.bfsQueue(tree);
    //tree.bfsStack(tree);

    //tree.dfs(tree);
    tree.dfsStack(tree)
})();

