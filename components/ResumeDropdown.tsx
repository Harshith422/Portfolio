"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, FileText } from "lucide-react";

export function ResumeDropdown({ variant = "solid", size = "lg" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <Button
        variant={variant}
        size={size}
        className="rounded-full px-8 py-2 flex items-center gap-2"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        type="button"
      >
        <FileText className="w-5 h-5 mr-2" />
        Download CV
        <ChevronDown className="ml-2 w-4 h-4" />
      </Button>
      {open && (
        <div className="absolute z-50 mt-2 right-0 w-56 rounded-lg shadow-xl bg-black/95 border border-purple-700 animate-fade-in">
          <a
            href="/Resume_Harshith_New.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-3 text-sm text-white hover:bg-purple-800/40 transition-colors rounded-t-lg"
            onClick={() => setOpen(false)}
            download
          >
            Resume (SD Role)
          </a>
          <a
            href="/Ai.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-3 text-sm text-white hover:bg-purple-800/40 transition-colors rounded-b-lg"
            onClick={() => setOpen(false)}
            download
          >
            Resume (AI Role)
          </a>
        </div>
      )}
    </div>
  );
}
