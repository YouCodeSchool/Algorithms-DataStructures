class Queue {
    elements = []
    
    constructor(obj){
        if(obj !== undefined){
            this.enqueue(obj)
        }
    }

    enqueue(obj){
        this.elements.push(obj)
        // return 
    }

    dequeue(){
        //First method using array slicing with slice()
        // this.elements = this.elements.slice(1)

        //second method swapping elements and popping last element
        for(let i = 0; i < this.elements.length - 1; i++){
            this.elements[i] = this.elements[i+1]
        }
        this.elements.pop()
        console.log(this.elements)
    }

    display(){
        console.log(this.elements)
        // this.elements.forEach(elem => console.log(elem))
    }
}

const queue = new Queue(6)


queue.enqueue(9)
queue.enqueue(3)
queue.enqueue(5)
queue.display()

queue.dequeue()
queue.dequeue()
// queue.display()