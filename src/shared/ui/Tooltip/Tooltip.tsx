import { type ReactNode } from "react";

export interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

export function Tooltip({ children, content, position = "top" }: TooltipProps) {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div className="group/tooltip relative inline-block z-50!">
      {children}
      <div
        className={`absolute ${positionClasses[position]} z-50! px-3! py-2! bg-base-100/95 backdrop-blur-sm border border-primary/30 rounded-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 pointer-events-none shadow-lg shadow-primary/20 min-w-40`}
      >
        {content}
        {/* Arrow */}
        <div
          className={`absolute w-3! h-3! bg-base-100/95 border-r border-b border-primary/30 rotate-45
            ${position === "top" ? "bottom-1.5 left-1/2 -translate-x-1/2 translate-y-1/2 border-l border-t border-r-0 border-b-0" : ""}
            ${position === "bottom" ? "top-1.5 left-1/2 -translate-x-1/2 -translate-y-1/2 border-r-0 border-t-0" : ""}
            ${position === "left" ? "right-1.5 top-1/2 -translate-y-1/2 translate-x-1/2 border-t-0 border-l-0" : ""}
            ${position === "right" ? "left-1.5 top-1/2 -translate-y-1/2 -translate-x-1/2 border-r-0 border-b-0" : ""}
          `}
        />
      </div>
    </div>
  );
}
