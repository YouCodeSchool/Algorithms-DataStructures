// FUNCTIONS TO IMPLEMENT FOR LINKED LISTS : 
  // ADDATFIRST, ADDATLAST, ADDAT, REMOVEAT, SIZE, ISEMPTY, REMPLACE, SORT, SEARCH, CLEAR, REVERSE, INDEXOFELEMENT, GETLAST, GETLAST, GETAT









class List{
    constructor(head = null){
      this.head = head;
    }
  }
  class Node {
    constructor (data, previous = null){
      this.data = data;
      this.next = null;
      this.previous = previous;
    }
    addNode(nextNode){
      this.next = nextNode;
      nextNode.next = null;
      nextNode.previous = this;
    }
    deleteNext(){
      this.next.previous = this;
      this.next = this.next.next;
    }
  }
  
  let node1 = new Node(40);
  let node2 = new Node(78);
  
  let linkedList = new List(node1);
  
  // node1.previous = linkedList;
  // node1.next = node2;
  // node2.previous = node1;
  
  // console.log(linkedList.head.data)
  // console.log(linkedList.head.next)
  // console.log(linkedList.head.next.data)

  node1.addNode(node2);
  // console.log(node1.next.data);
  // console.log(node1.next.previous);
  node1.deleteNext();  //deletes node2 from the list
  console.log(node1.next);
  console.log(node2);

  