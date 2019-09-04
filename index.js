function inOrder(currentNode) {
    if (currentNode.left) {
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if (currentNode.right) {
        inOrder(currentNode.right)
    }
}

function findOrAdd(rootNode, newNode) {
    let result
    if (newNode.data < rootNode.data) {

        let currentNode = rootNode.left
        if (currentNode) {
            findOrAdd(currentNode, newNode)
        } else {
            rootNode.left = newNode
            result = newNode
        } 
    } else if (newNode.data > rootNode.data) {
        let currentNode = rootNode.right
        if (currentNode) {
            findOrAdd(currentNode, newNode)
        } else {
            rootNode.right = newNode
            result = newNode
        }
    } else if (newNode.data === rootNode.data) {
        result = true
    }
    return true
}

function max(rootNode) {
    let maxNode = rootNode
    let rightNode = rootNode.right 

    if (rightNode) {
        if (rootNode.data < rightNode.data) {
            maxNode = rightNode
            max(rightNode)
        }
    } else {
      maxNode = rootNode
    }

    return maxNode.right
}

function min(rootNode) {
    let minNode = rootNode

    let leftNode = rootNode.left 

    if (leftNode) {
        if (leftNode.data < rootNode.data) {
            minNode = leftNode
            min(leftNode)
        }
    } else {
        minNode = rootNode
    }

    return minNode
}