class Graph {
    constructor() {
       this.adjasencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjasencyList[vertex]) {
            this.adjasencyList[vertex] = [];
         }
    }

    addEdge(v1 , v2) {
        if(!this.adjasencyList[v1]) {
            this.adjasencyList[v1] = [];
        }
        if(!this.adjasencyList[v2]) {
            this.adjasencyList[v2] = [];
        }
        this.adjasencyList[v1].push(v2);
        this.adjasencyList[v2].push(v1);
    } 

    removeEdge(v1 , v2) { 
        if(!this.adjasencyList[v1] || !this.adjasencyList[v2]) {
            console.log('Vertex is invalid');
        } else {
            this.adjasencyList[v1] = this.adjasencyList[v1].filter(v => v != v2);
            this.adjasencyList[v2] = this.adjasencyList[v2].filter(v => v != v1);
        }
    }

    removeVertex(vertex) {
        if(!this.adjasencyList[vertex]) {
            console.log('Vertex is invalid');
        } else {
            for(let adjacentVertex of this.adjasencyList[vertex]) {
               this.removeEdge(vertex , adjacentVertex);
            }
            delete this.adjasencyList[vertex];
        }
    }

    findAllPaths(start , end) {
        let result = [];
        let visited = {};
        let adjList = this.adjasencyList ;
        function dfs(start , arr = []) {
           arr.push(start);
           visited[start] = true ;
           if(start === end) {
              result.push(arr);
           } 
           for(let vertex of adjList[start]) {
                if(!visited[vertex]) {
                    visited[vertex] = true;
                    dfs(vertex , [...arr])
                }
           }
           visited[start] = false;
        }
        dfs(start);
        console.log(result);
    }

}


const myGraph = new Graph();
// myGraph.addVertex('Tokyo');
// myGraph.addVertex('Paris');
// myGraph.addVertex('Malawi');
// console.log(myGraph);


// myGraph.addEdge('Tokyo' , 'paris');
// // console.log(myGraph);

// myGraph.addEdge('Tokyo' , 'malawi');
// // console.log(myGraph);

// myGraph.addEdge('paris' , 'malawi');
// console.log(myGraph);

// myGraph.removeVertex('Tokyo')

// console.log(myGraph)


// myGraph.removeEdge('Tokyo' , 'paris');
// myGraph.removeEdge('Tokyo' , 'malawi');

// console.log(myGraph)

myGraph.addEdge("A", "B")
myGraph.addEdge("A", "D")
myGraph.addEdge("C", "D")
myGraph.addEdge("B", "D")
myGraph.addEdge("E", "D")
myGraph.addEdge("E", "A")

// console.log(myGraph.findAllPaths("A", "E"))

// myGraph.hasCycle();




