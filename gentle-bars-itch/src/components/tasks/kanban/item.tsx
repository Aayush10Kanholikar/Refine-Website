import {
  DragOverlay,
  UseDraggableArguments,
  useDraggable,
} from "@dnd-kit/core";
import React from "react";

interface Props {
  id: string;
  data?: UseDraggableArguments;
}

const KanbanItem = ({ children, id, data }: React.PropsWithChildren<Props>) => {
  const { attributes, Listners, setNodeRef, active } = useDraggable({
    id: "",
    data: "data",
  });
  return (
    <div style={{ position: "relative" }}>
      <div
        ref={setNodeRef}
        {...attributes}
        {...Listners}
        style={{
          opacity: active ? (active.id === id ? 1 : 0.5) : 1,
          borderRadius: "8px",
          position: "relative",
          cursor: "grab",
        }}
      >
        {active?.id === id && (
          <DragOverlay zIndex={1000}>
            <div
              style={{
                borderRadius: "8px",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                cursor: "grab",
              }}
            >
              {children}
            </div>
          </DragOverlay>
        )}
      </div>
    </div>
  );
};

export default KanbanItem;
