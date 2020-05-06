

function Node(val) {
	this.data = val
	this.left = null
	this.right = null
}

function BinarySearchTree() {
	this.root = null
}

BinarySearchTree.prototype.insert = function(val) {
	const newNode = new Node(val)
	if (this.root === null) this.root = newNode
	this.insertNode(this.root, newNode)
}

BinarySearchTree.prototype.insertNode = function(node, newNode) {
	if (newNode.data > this.data) {
		// is current node null
		node.left === null //?
			? //if so put new node here
			  (node.left = newNode)
			: // otherwise call the function again on left node
			  this.insertNode(node.left, newNode)
		// if right is null insert node here
	} else {
		// check right node
		node.right === null//?
			? // put here
			  (node.right = newNode)
			: // or call function again with right node
			  this.insertNode(node.right, newNode)
	}
}

// Method to remove node with a
// given data
// it recurrs over the tree to find the
// data and removes it
BinarySearchTree.prototype.removeNode = function(node, key) {
	// if the root is null then tree is empty throw
	if (node === null) throw 'there are currently no nodes in the tree'
	// if data to be delete is less than roots data then move to left subtree
	if (key < node.data) {
		node.left = this.removeNode(node.left, key)
		return node
	}
	// if data to be delete is greater than roots data then move to right subtree
	if (key > node.data) {
		node.right = this.removeNode(node.right, key)
		return node
	}
	// if data is similar to the root's data then delete this node
	if (node.data === key) {
		// deleting node with no children
		if (node.left === null && node.right === null) {
			node = null
			return node
		}
		// deleting node with one children
		if (node.left === null) {
			node = node.right
			return node
		}
		if (node.right === null) {
			node = node.left
			return node
		}
		// Deleting node with two children
		// minimum node of the right subtree
		// is stored in aux
		let aux = this.findMinNode(node.right)
		node.data = aux.data

		node.right = this.removeNode(node.right, aux.data)
		return node
	}
}

BinarySearchTree.prototype.traverseBreadthFirst = function(func) {
	let queue = [this]

	while (queue.length) {
		let currentNode = queue.shift()

		if (currentNode.left) {
			queue.push(currentNode.left)
		}

		if (currentNode.right) {
			queue.push(currentNode.right)
		}

		func(currentNode.value)
	}
}

let newTree = new BinarySearchTree() //?
let node = new Node(1) //?
newTree.insert(21) //?
newTree.insert(16)//?

newTree

// helper method that calls the
// removeNode with a given data
remove(data)
{
	// root is re-initialized with
	// root of a modified tree.
	this.root = this.removeNode(this.root, data)
}
