function BFS(tree) {
  if (!tree.root) return [];

  const queue = [tree.root];
  const visited = [];
  let current;

  while (queue.length) {
    current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
    visited.push(current.value);
  }
  return visited;
}
