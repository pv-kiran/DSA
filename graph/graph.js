class Graph {
    constructor() {
        this.adjasencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjasencyList[vertex]) {
            this.adjasencyList[vertex] = new Set();
        }
    }

    addEdge(vertexOne , vertexTwo) {
       if(!this.adjasencyList[vertexOne]) {
          this.adjasencyList[vertexOne] = new Set();
       }
       if(!this.adjasencyList[vertexTwo]) {
          this.adjasencyList[vertexTwo] = new Set();
       }

       this.adjasencyList[vertexOne].add(vertexTwo);
    //    this.adjasencyList[vertexTwo].add(vertexOne);
    }

    hasEdge(vertexOne , vertexTwo) {
        return this.adjasencyList[vertexOne].has(vertexTwo) && this.adjasencyList[vertexTwo].has(vertexOne);
    }

    removeEdge(vertexOne , vertexTwo) {
          this.adjasencyList[vertexOne].delete(vertexTwo);
          this.adjasencyList[vertexTwo].delete(vertexOne);
    }

    removeVertex(vertex) {
        if(!this.adjasencyList[vertex]) {
            return ;
        }
        for(let adjacentVertex of this.adjasencyList[vertex]) {
            this.removeEdge(vertex , adjacentVertex);
        }
        delete this.adjasencyList[vertex];
    } 

    display() {
        for(let vertex in this.adjasencyList) {
            console.log(vertex + '-->' + [...this.adjasencyList[vertex]]);
        }
    }


    allValidPaths(start, end) {
        let visited = {}
        let result = []
        let adjList = this.adjasencyList
        function DFSearch(start, arr = []) {
            arr.push(start)
            visited[start] = true
            if (start === end) {
                result.push(arr)
            }
            for (let item of adjList[start]) {
                if (!visited[item]) {
                    visited[item] = true
                    DFSearch(item, [...arr])
                }
            }
            visited[start] = false
        }
        DFSearch(start)
        return result
    }
}


const myGraph = new Graph();
// myGraph.addVertex('A');
// myGraph.addVertex('B');
// myGraph.addVertex('C');

// myGraph.addEdge('D' , 'E');
// myGraph.addEdge('F' , 'G');c
// myGraph.addEdge('H' , 'I');

// myGraph.addEdge('A' , 'B');
// myGraph.addEdge('B' , 'C');

// myGraph.display()

// console.log(myGraph.hasEdge('A' , 'B'));
// console.log(myGraph.hasEdge('B' , 'A'));

// myGraph.removeVertex('B');
// myGraph.addEdge("A", "B")
// myGraph.addEdge("A", "D")
// myGraph.addEdge("C", "D")
// myGraph.addEdge("B", "D")
// myGraph.addEdge("E", "D")
// myGraph.addEdge("E", "A")

// console.log(myGraph.allValidPaths("A", "E"))

console.log(myGraph);


// myGraph.removeEdge('A' , 'B');

// console.log(myGraph);

myGraph.addEdge('A' , 'B')
myGraph.addEdge('B' , 'C')
myGraph.addEdge('C' , 'D')
myGraph.addEdge('B' , 'D')
myGraph.addEdge('D' , 'A')

console.log(myGraph)
console.log(myGraph.allValidPaths('A' , 'C'))