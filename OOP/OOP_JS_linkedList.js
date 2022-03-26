// FUNCTIONS TO IMPLEMENT FOR LINKED LISTS : 
  // ADDATFIRST, ADDATLAST, ADDAT, REMOVEAT, SIZE, ISEMPTY, REMPLACE, SORT, SEARCH, CLEAR, REVERSE, INDEXOFELEMENT, GETLAST, GETLAST, GETAT, Display









  class List{
      constructor(head = null){
        this.head = head;
      }
    }
  class Node {
    constructor (data, previous = null, index= null){
      this.data = data;
      this.next = null;
      this.previous = previous;
      this.index = index;
      if(order != null){
        this.addAt(index);
      }
      
    }
    addAt(index){
      let node = this;
      if(this.next == null && this.previous == null){
        return;
      } else if (this.next == null ) {
        while(node.previous.index != index){
          node = node.previous;
        }
        //Choose add before this node or after node (call addAfterThis function)
        //this.addAfterThis(node.previous)
        this.addBeforeThis(node.previous);
      } else if (this.previous == null){
        while(node.next.index != index){
          node = node.next;
        }
        //this.addAfterThis(node.next)
        this.addBeforeThis(node.next);
      } else {
        if(node.index == index) {
          this.addBeforeThis(node);  //this.addAfterThis(node.next)
        } else if (node.index > index){
          while(node.next.index != index){
            node = node.next;
          }
        }
       
      }

    }

    addBeforeThis(node){
      this.next = node;
      this.previous = node.previous;
      node.previous = this;
    }
    addAfterThis(node){
      this.previous = node;
      this.next = node.next;
      node.next = this;
    }

    addNextTo(nextNode){
      this.next = nextNode;
      nextNode.next = null;
      nextNode.previous = this;
    }
    // addAtFirst(){
    //   let searchHead = this.previous;
    //   let addBefore; 
    //   while(searchHead != null){
    //     addBefore = searchHead;
    //     searchHead = searchHead.previous;
    //   }
    //   addBefore.previous = this;
    //   firstNode.next = addBefore;
    // }
    
    addAtFirst(head){
      this.next = head;
    }

    addAtLast(anyNode){
      while(anyNode.next != null){
        anyNode = anyNode.next;
      }
      anyNode.next = this;
      this.previous = anyNode;
      this.next = null;
    }

    deleteNext(){
      this.next.previous = this;
      this.next = this.next.next;
    }
   
  }
  
  let node1 = new Node(40);
  let node2 = new Node(78);
  let node3 = new Node("HELLO FROM NODE 3");
  let node0 = new Node("HELLO SPACE NODE 4 fIRST NODE");

  let nodeLast = new Node("Added as Last node on the list");


  let linkedList = new List(node1);
  
  // node1.previous = linkedList;
  // node1.next = node2;
  // node2.previous = node1;
  
  // console.log(linkedList.head.data)
  // console.log(linkedList.head.next)
  // console.log(linkedList.head.next.data)

  node1.addNextTo(node2);
  node2.addNextTo(node3);
  // console.log(node1.next.data);
  // console.log(node1.next.previous);
  // node1.deleteNext();  //deletes node2 from the list
  // console.log(node1.next);
  // console.log(node2);

 //Add at first this node 
  node0.addAtFirst(linkedList.head);

  // console.log(node0.data);
  // console.log(node0.previous);
  // console.log(node0.next.data);
  // console.log(node0.next.next.data);

  
  //Add node on list end
  nodeLast.addAtLast(linkedList.head);
  console.log(nodeLast.next);
  console.log(nodeLast.previous);
  console.log(nodeLast);


