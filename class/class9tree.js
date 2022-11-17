//now we do trees
//constructor
//func

//comapre to class code


class Tree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        if (this.root === null) {
            this.root = new Node(val);
        } else {
            this.root.insert(val);
        }
    }

    travel() {
        this.root.travel();
    }

    min(){
        let n = this.root;
        while(n.left !== null){
            n = n.left
        }
        return n.val
    }

    max(){
        let n = this.root;
        while(n.right !== null){
            n = n.right
        }
        return n.val
    }

    search(val) {
        if(val === this.val)return true;

        if (val > this.val) {
            if (this.right === null) {
                //this.right = new Node(val);
            } else {
               return this.right.search(val);
            }

        } else {
            if (this.left === null) {
                //this.left = new Node(val);
            } else {
                return this.left.search(val);
            }


        }
    }


}


class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
    
    insert(val) {
        //if(val === this.val)return;
        if (val > this.val) {
            if (this.right === null) {
                this.right = new Node(val);
            } else {
                this.right.insert(val);
            }

        } else {
            if (this.left === null) {
                this.left = new Node(val);
            } else {
                this.left.insert(val);
            }


        }
    }

    travel() {
        
        if (this.left !== null) {
            this.left.travel();
        }
        console.log(this.val)
        if (this.right !== null) {
            this.right.travel()
        }
    }

}

let t = new Tree();
t.insert(11);
t.insert(7)
t.insert(15)
t.insert(5)
t.insert(9)
t.insert(13)
t.insert(20)
t.travel()
console.log(JSON.stringify(t));
console.log(t.min())
console.log(t.max())
console.log(t.search(5))
console.log(t.search(98))