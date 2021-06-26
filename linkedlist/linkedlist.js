class Node {
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.count = 0;
        this.head = null;
    }
add_end(element){
    var node = new Node(element);

    var current;
    if(this.head == null){
        this.head = node;
    }
    else{
        current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }
    this.count =this.count+1;
}

add_front(element){
    var node = new Node(element);
    var current;
    if(this.head == null){
        this.head = node;
    }
    else{
        current = this.head;
        node.next = current;
        this.head = node;

    }
    this.count = this.count+1;
}

remove_front() {
 
      if(!this.head) {
        console.log("empty LIST")
      }
      else{
      let nodeToRemove = this.head;
      this.head = nodeToRemove.next;
      nodeToRemove.next = null;
      if(nodeToRemove === this.tail) {
        this.tail = null;
      }
    }
    
  }

  remove_last() {
    if(!this.head) {
      console.log("empty LIST")
    }
    else{
    let current = this.head;
    let temp = this.head;
    while(current.next) {
        temp = current;
       current = current.next;
    }
    temp.next = null;
    }   
  }
  



printList()
{
    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.element + " ";
        curr = curr.next;
    }
    console.log(str);
}

}

var ll = new LinkedList();
 

ll.add_front(10);

ll.printList();
 
 
ll.add_front(20);
ll.add_end(30);
ll.add_end(40);
ll.add_front(50);
 
ll.printList();

ll.remove_front();
ll.remove_last();
ll.printList();