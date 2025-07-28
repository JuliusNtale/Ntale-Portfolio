"use client";

import Image from "next/image";
import { useState } from "react";

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  priority = false,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Convert PNG to WebP if available
  const optimizedSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"
          style={{ width, height }}
        />
      )}
      <Image
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setIsLoading(false)}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
