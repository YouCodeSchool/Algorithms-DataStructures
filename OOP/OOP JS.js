// FUNCTIONS TO IMPLEMENT FOR LINKED LISTS : 
  // ADDATFIRST, ADDATLAST, ADDAT, REMOVEAT, SIZE, ISEMPTY, REMPLACE, SORT, SEARCH, CLEAR, REVERSE, INDEXOFELEMENT, GETLAST, GETLAST, GETAT









class List{
    constructor(head = null){
      this.head = head;
    }
  }
  class Node {
    constructor (data, previous){
      this.data = data;
      this.next = null;
      this.previous = previous;
    }
  }
  
  let node1 = new Node(40);
  let node2 = new Node(78);
  
  let linkedList = new List(node1);
  
  node1.previous = linkedList;
  node1.next = node2;
  node2.previous = node1;
  
  console.log(linkedList.head.data)
  console.log(linkedList.head.next)
  console.log(linkedList.head.next.data)