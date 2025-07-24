import React, { useRef, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

function App() {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawLine = ({ x0, y0, x1, y1 }) => {
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();
    };

    socket.on("draw", drawLine);

    return () => socket.off("draw");
  }, []);

  const startDrawing = (e) => {
    isDrawing.current = true;
    const { offsetX, offsetY } = e.nativeEvent;
    isDrawing.current = { x: offsetX, y: offsetY };
  };

  const draw = (e) => {
    if (!isDrawing.current.x) return;

    const { offsetX, offsetY } = e.nativeEvent;
    const newPoint = { x: offsetX, y: offsetY };

    socket.emit("draw", {
      x0: isDrawing.current.x,
      y0: isDrawing.current.y,
      x1: newPoint.x,
      y1: newPoint.y,
    });

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(isDrawing.current.x, isDrawing.current.y);
    ctx.lineTo(newPoint.x, newPoint.y);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    isDrawing.current = newPoint;
  };

  const stopDrawing = () => {
    isDrawing.current = {};
  };

  return (
    <div>
      <h1>Asfar's Whiteboard</h1>
      <canvas
        ref={canvasRef}
        width={800}
        height={500}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        style={{ border: "1px solid black" }}
      />
    </div>
  );
}

export default App;
