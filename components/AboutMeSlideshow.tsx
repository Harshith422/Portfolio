"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = ["/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg"];

export function AboutMeSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3200); // 3.2s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full absolute inset-0">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="About Harshith Potnuri"
          fill
          className={`object-cover rounded-xl absolute inset-0 transition-opacity duration-700 ease-in-out ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          style={{transitionProperty: 'opacity'}}
          sizes="(max-width:768px) 100vw, 50vw"
          priority={i === 0}
        />
      ))}
    </div>
  );
}
