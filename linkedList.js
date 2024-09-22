class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert a new node at the head (beginning of the list)
    insertAtHead(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Insert a new node at the end
    insertAtEnd(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Print the linked list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Usage example:
let list = new LinkedList();
list.insertAtHead(10);
list.insertAtHead(20);
list.insertAtEnd(30);
list.printList();  // Output: 20 10 30
