class Graph {
    constructor() {
        this.adjacensyList = {};
    }

    addVertex(vertex) {
       if(!this.adjacensyList[vertex]) {
          this.adjacensyList[vertex] = [];
       }
    }

    addEdge(vertexOne , vertexTwo, weight) {
        if(!this.adjacensyList[vertexOne]) {
            this.adjacensyList[vertexOne] = [];
        }
        if(!this.adjacensyList[vertexTwo]) {
            this.adjacensyList[vertexTwo] = [];
        }
        this.adjacensyList[vertexOne].push({node: vertexTwo , weight})
        this.adjacensyList[vertexTwo].push({node: vertexOne , weight})
    } 
}


const graph = new Graph();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

console.log(graph);


graph.addEdge('A' , 'B' , 10);
graph.addEdge('A' , 'C' , 20);
graph.addEdge('B' , 'C' , 30);
console.log(graph)
