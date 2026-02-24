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
