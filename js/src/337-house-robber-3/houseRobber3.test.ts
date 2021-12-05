import { rob, TreeNode } from './houseRobber3';

const nodeC = new TreeNode(1, null, null);
const nodeD = new TreeNode(1);
const nodeE = new TreeNode(1);
const nodeF = new TreeNode(100);
const nodeG = new TreeNode();
const nodeH = new TreeNode();
const nodeB = new TreeNode(5, nodeE, nodeF);
const nodeA = new TreeNode(4, nodeC, nodeD);
const rootTreeNode: TreeNode = new TreeNode(1, nodeA, nodeB);

it('should return true', () => {
  expect(rob(rootTreeNode)).toBe(105)
});
