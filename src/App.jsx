import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import "./App.css";
import CustomNode from "./CustomNode";

const initialNodes = [
  {
    id: "1",
    type: "customNode",
    data: { label: "Build", bi: false },
    position: { x: 100, y: 25 },
  },

  {
    id: "2",
    type: "customNode",
    // you can also pass a React component as a label
    data: { label: "Test", bi: true },
    position: { x: 350, y: 25 },
  },
  {
    id: "3",
    type: "customNode",
    data: { label: "Deploy", bi: false },
    position: { x: 600, y: 25 },
  },

  {
    id: "4",
    type: "customNode",

    data: { label: "Build", bi: false },
    position: { x: 100, y: 100 },
  },

  {
    id: "5",
    type: "customNode",
    // you can also pass a React component as a label
    data: { label: "Test", bi: true },
    position: { x: 350, y: 100 },
  },
  {
    id: "6",
    type: "customNode",
    data: { label: "Deploy", bi: true },
    position: { x: 600, y: 100 },
  },
];

const nodeTypes = {
  customNode: CustomNode,
};

const initialEdges = [
  { id: "e1", source: "1", target: "2" },
  { id: "e2", source: "2", target: "3", animated: "a" },
  { id: "e3", source: "4", target: "5" },
  { id: "e4", source: "5", target: "6", animated: "a" },
];

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div className="container">
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} />;
    </div>
  );
}

export default App;
