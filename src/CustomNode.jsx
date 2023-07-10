import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import { FaCheckCircle, FaRedo } from "react-icons/fa";

const handleStyle = { left: 10 };

function CustomNode({ data, isConnectable }) {
  return (
    <div className="text-updater-node">
      <Handle type="source" position={Position.Right} />
      <div className="circle">
        <FaCheckCircle />

        <span>{data.label}</span>
      </div>
      <Handle type="target" position={Position.Left} />
    </div>
  );
}

export default CustomNode;
