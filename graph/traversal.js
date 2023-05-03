class Graph {
    constructor() {
        this.adjacensyList = {};
    }

    addVertex(vertex) {
       if(!this.adjacensyList[vertex]) {
         this.adjacensyList[vertex] = [];
       }
    }

    addEdge(v1 , v2) {
        if(!this.adjacensyList[v1]) {
            this.adjacensyList[v1] = []
        }
        if(!this.adjacensyList[v2]) {
            this.adjacensyList[v2] = []
        }
        this.adjacensyList[v1].push(v2)
        this.adjacensyList[v2].push(v1);
    }

    depthFirstRecursive(start) { 
       let result = [];
       let visited = {};
       let adjacensyList = this.adjacensyList;
       function dfs(vertex) {

        //  if(!vertex) {
        //     return null;
        //  } 
         visited[vertex] = true;
         result.push(vertex);
         adjacensyList[vertex].forEach(neighbour => {
            if(!visited[neighbour]) {
                return dfs(neighbour)
            }
         })
       }
       dfs(start)
       console.log(result)
    }

    depthFirstItretive(start) {
        let stack = [start];
        let result = [];
        let visted = {};
        visted[start] = true ;
        while(stack.length) {
            let currentVertex = stack.pop();
            result.push(currentVertex)
            this.adjacensyList[currentVertex].forEach(neighbour => {
                if(!visted[neighbour]) {
                    visted[neighbour] = true;
                    stack.push(neighbour); 
                }
            })
        }
        console.log(result);
    }


    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currentVertex ;
        while(queue.length) {
            currentVertex = queue.shift();
            visited[currentVertex] = true;
            result.push(currentVertex);
            this.adjacensyList[currentVertex].forEach(neighbour => {
                if(!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            })
        }

        console.log(result);

    }
    

    display() {
        for(let vertex in this.adjacensyList) {
            console.log(vertex);
        }
    }
}

const myGraph = new Graph();
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addVertex('D');
myGraph.addVertex('E');
myGraph.addVertex('F');

myGraph.addEdge('A' , 'B')
myGraph.addEdge('A' , 'C')
myGraph.addEdge('B' , 'D')
myGraph.addEdge('C' , 'E')
myGraph.addEdge('D' , 'E')
myGraph.addEdge('D' , 'F')
myGraph.addEdge('F' , 'E')

myGraph.depthFirstRecursive('A')
myGraph.depthFirstItretive('A');
myGraph.breadthFirst('A');
myGraph.display();

// console.log(myGraph);
