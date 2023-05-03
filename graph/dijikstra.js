class PQ {
    constructor() {
        this.values = [];
    }

    enqueue(val , priority) {
        this.values.push({val , priority});
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a,b) => a.priority - b.priority);
    }
}


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

    dijikstras(start , finish) {
        const nodes = new PQ();
        let distances = {};
        let previous = {};
        let path = [];
        let smallest;
        // build up initial state
        for(let vertex in this.adjacensyList) {
          if(vertex === start) {
            distances[vertex] = 0;
            nodes.enqueue(vertex , 0)
          } else {
            distances[vertex] = Infinity;
            nodes.enqueue(vertex , Infinity);
          }
          previous[vertex] = null;
        }

        // as long as there is something to visit
        while(nodes.values.length) {
            smallest = nodes.dequeue().val;
            if(smallest === finish) {
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
                // we are done
                // build the path and return
            }
            if(smallest || distances[smallest] !== Infinity) {
                for(let neighbour in this.adjacensyList[smallest]) {
                    // find neighbouring node
                    let nextNode = this.adjacensyList[smallest][neighbour];
                    console.log(nextNode);
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbour = nextNode.node;
                    if(candidate < distances[nextNeighbour]) {

                        // updating new smallest distance to neighbour
                         distances[nextNeighbour] = candidate ;
                         // updating previous - How we got to neighbout
                         previous[nextNeighbour] = smallest;
                         // enqueue in prioirity queue with new priotiy
                         nodes.enqueue(nextNeighbour , candidate);
                    } 
                }
            }
        }



        console.log( path.concat('A').reverse());
        

        // console.log(distances);
    }


}




let graph = new Graph();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')


graph.addEdge('A' , 'B' , 4)
graph.addEdge('A' , 'C' , 2)
graph.addEdge('B' , 'E' , 3)
graph.addEdge('C' , 'D' , 2)
graph.addEdge('C' , 'F' , 4)
graph.addEdge('D','E' , 3)
graph.addEdge('D', 'F' , 1)
graph.addEdge('E', 'F' , 1)

graph.dijikstras('A' , 'E');

console.log(graph)
