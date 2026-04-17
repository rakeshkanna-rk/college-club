import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Pencil, 
  Eraser, 
  Square, 
  Circle, 
  Trash2, 
  Download, 
  ArrowLeft, 
  Settings2,
  Undo2,
  Type
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GlassCard, SectionHeader } from "@/components/UIElements";
import { cn } from "@/lib/utils";

type Tool = "brush" | "pencil" | "eraser" | "rect" | "circle";

export default function Whiteboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#a855f7");
  const [brushSize, setBrushSize] = useState(5);
  const [activeTool, setActiveTool] = useState<Tool>("brush");
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [canvasData, setCanvasData] = useState<ImageData | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Make canvas full size of its container
    const container = canvas.parentElement;
    if (container) {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    }

    const context = canvas.getContext("2d");
    if (context) {
      context.lineCap = "round";
      context.lineJoin = "round";
      context.strokeStyle = color;
      context.lineWidth = brushSize;
      contextRef.current = context;
      
      // Fill background with white/transparent
      context.fillStyle = "rgba(255,255,255,0.05)";
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = activeTool === "eraser" ? "#000" : color;
      contextRef.current.lineWidth = activeTool === "eraser" ? brushSize * 4 : brushSize;
      // Eraser behavior in canvas is tricky on transparent. 
      // We'll use destination-out for real erasing if needed, or just draw bg color.
      if (activeTool === "eraser") {
        contextRef.current.globalCompositeOperation = "destination-out";
      } else {
        contextRef.current.globalCompositeOperation = "source-over";
      }
    }
  }, [color, brushSize, activeTool]);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas || !contextRef.current) return;

    const rect = canvas.getBoundingClientRect();
    const x = ("touches" in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = ("touches" in e ? e.touches[0].clientY : e.clientY) - rect.top;

    setStartPos({ x, y });
    setCanvasData(contextRef.current.getImageData(0, 0, canvas.width, canvas.height));
    
    if (activeTool === "brush" || activeTool === "pencil" || activeTool === "eraser") {
      contextRef.current.beginPath();
      contextRef.current.moveTo(x, y);
    }
    
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || !contextRef.current || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = ("touches" in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = ("touches" in e ? e.touches[0].clientY : e.clientY) - rect.top;

    if (activeTool === "brush" || activeTool === "pencil" || activeTool === "eraser") {
      contextRef.current.lineTo(x, y);
      contextRef.current.stroke();
    } else if (activeTool === "rect" || activeTool === "circle") {
      // Restore previous state to redraw shape
      if (canvasData) {
        contextRef.current.putImageData(canvasData, 0, 0);
      }
      contextRef.current.beginPath();
      if (activeTool === "rect") {
        contextRef.current.rect(startPos.x, startPos.y, x - startPos.x, y - startPos.y);
      } else {
        const radius = Math.sqrt(Math.pow(x - startPos.x, 2) + Math.pow(y - startPos.y, 2));
        contextRef.current.arc(startPos.x, startPos.y, radius, 0, 2 * Math.PI);
      }
      contextRef.current.stroke();
    }
  };

  const stopDrawing = () => {
    if (contextRef.current) {
        contextRef.current.closePath();
    }
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;
    if (canvas && context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "rgba(255,255,255,0.05)";
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Create a temporary canvas with white background for download
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return;
    
    tempCtx.fillStyle = "#0a0a0a"; // Match our dark theme
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(canvas, 0, 0);
    
    const link = document.createElement("a");
    link.download = "gtech-whiteboard.png";
    link.href = tempCanvas.toDataURL();
    link.click();
  };

  return (
    <main className="pt-32 pb-20 bg-mesh min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <Link to="/tools" className="inline-flex items-center gap-2 text-white/50 hover:text-neon-purple transition-colors mb-8 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Tools
        </Link>

        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-8">
            <div className="max-w-2xl">
                <SectionHeader 
                    title="G-Tech"
                    subtitle="A professional brainstorming space with shape recognition and instant export support."
                    gradient="Whiteboard"
                />
            </div>
            
            <div className="flex gap-4">
                <Button onClick={clearCanvas} variant="outline" className="glass border-white/10 text-red-400 hover:text-red-300">
                    <Trash2 className="w-5 h-5 mr-2" /> Clear All
                </Button>
                <Button onClick={downloadImage} className="btn-primary">
                    <Download className="w-5 h-5 mr-2" /> Export Visual
                </Button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8">
          {/* Toolbar */}
          <GlassCard className="p-4 flex flex-row lg:flex-col gap-4 items-center justify-center">
            <ToolButton active={activeTool === "brush"} onClick={() => setActiveTool("brush")} icon={Pencil} label="Brush" />
            <ToolButton active={activeTool === "rect"} onClick={() => setActiveTool("rect")} icon={Square} label="Square" />
            <ToolButton active={activeTool === "circle"} onClick={() => setActiveTool("circle")} icon={Circle} label="Circle" />
            <div className="h-px w-full bg-white/10 my-2 hidden lg:block" />
            <ToolButton active={activeTool === "eraser"} onClick={() => setActiveTool("eraser"} icon={Eraser} label="Eraser" />
            
            <div className="flex flex-col gap-4 mt-auto">
              <input 
                type="color" 
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-10 h-10 rounded-xl bg-transparent border border-white/10 cursor-pointer"
              />
              <div className="relative group/size">
                 <Settings2 className="w-6 h-6 text-white/40 group-hover/size:text-neon-purple transition-colors mx-auto" />
                 <input 
                    type="range" 
                    min="1" max="20" 
                    value={brushSize}
                    onChange={(e) => setBrushSize(parseInt(e.target.value))}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 -rotate-90 origin-bottom mb-12 w-32 hidden group-hover/size:block accent-neon-purple"
                 />
              </div>
            </div>
          </GlassCard>

          {/* Canvas Area */}
          <div className="glass-dark border border-white/10 rounded-[32px] overflow-hidden min-h-[600px] cursor-crosshair relative">
            <canvas 
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function ToolButton({ active, onClick, icon: Icon, label }: { active: boolean, onClick: () => void, icon: any, label: string }) {
  return (
    <button 
      onClick={onClick}
      title={label}
      className={cn(
        "p-4 rounded-2xl transition-all duration-300 group",
        active ? "bg-neon-purple text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]" : "text-white/40 hover:text-white hover:bg-white/5"
      )}
    >
      <Icon className={cn("w-6 h-6 transition-transform", active ? "scale-110" : "group-hover:scale-110")} />
    </button>
  );
}
