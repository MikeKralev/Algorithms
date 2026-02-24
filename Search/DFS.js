function DFSPreOrder(tree) {
  if (!tree.root) return [];
  const visited = [];

  function traverse(node) {
    visited.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  helper(tree.root);
  return visited;
}

function DFSInOrder(tree) {
  if (!tree.root) return [];
  const visited = [];

  function traverse(node) {
    if (node.left) traverse(node.left);
    visited.push(node.value);
    if (node.right) traverse(node.right);
  }

  helper(tree.root);
  return visited;
}

function DFSPostOrder(tree) {
  if (!tree.root) return [];
  const visited = [];

  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    visited.push(node.value);
  }

  helper(tree.root);
  return visited;
}
