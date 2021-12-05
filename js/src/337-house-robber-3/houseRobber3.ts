export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

type T = TreeNode | null | undefined
export function rob(root: T, cache:  Map<T, number> = new Map<T, number>([[null, 0]])) {
  if (cache.has(root)) return cache.get(root)!;
  if (!root) return 0;
  const ans = Math.max([root.left?.left, root.left?.right, root.right?.right, root.right?.left]
    .reduce((acc: number, t: T) => acc + rob(t, cache), root.val), rob(root.left, cache) + rob(root.right, cache));
  cache.set(root, ans);
  return ans;
}

