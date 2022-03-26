// console.log('test')
class Stack {
    elements = []
    // count = 0

    constructor(element){  
        if(element !== undefined) {
            // this.elements.push(element)
            this.push(element)
        }
            
    }

    getValue() {
        // return this.#value;
    }

    push(value){
        this.elements.push(value)
        // return 
    }

    pop(){
        // let length = this.#elements.count()
        this.elements.pop()
        // return 
    }

    peek(){
        console.log(this.elements[this.elements.length - 1])
        return this.elements[this.elements.length - 1]
    }

    display(){
        this.elements.forEach(element => console.log(element))
    }

    size(){
        console.log(this.elements.length)
        return this.elements.length
    }

    isEmpty(){
        if(this.elements.length === 0){ 
            console.log(true)
            return true
        } else {
            console.log(false)
            return false
        }
    }
}

// const stack = new Stack(4,1)
const stack = new Stack()

stack.push(40, 1)
stack.push(48, 1)
stack.push(45, 1)
// stack.pop()
// stack.pop()
stack.peek()
// stack.pop()
// stack.pop()

// stack.display()

// console.log(stack.isEmpty())
// stack.isEmpty()
stack.size()