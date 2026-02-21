"use client";

import { useState } from "react";
import Image from "next/image";

const ProjectImageWithFallback = ({
  src,
  fallbackSrc = "/optimized/project1.webp",
  alt,
  sizes,
  className,
  fill = true,
  loading = "lazy",
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill={fill}
      sizes={sizes}
      loading={loading}
      className={className}
      onError={handleError}
    />
  );
};

export default ProjectImageWithFallback;
