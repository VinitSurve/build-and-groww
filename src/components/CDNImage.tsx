"use client";

import { useState } from 'react';
import Image from 'next/image';

interface CDNImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fallbackSrc?: string;
  priority?: boolean;
  [key: string]: any;
}

/**
 * Image component with CDN support and automatic fallback to local images
 * Usage: <CDNImage src="https://cdn.jsdelivr.net/.../image.webp" alt="..." />
 * Falls back to /image.webp if CDN fails
 */
export default function CDNImage({ 
  src, 
  alt, 
  className = '',
  fallbackSrc,
  ...props 
}: CDNImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Extract filename from CDN URL or use fallbackSrc
      if (fallbackSrc) {
        setImgSrc(fallbackSrc);
      } else {
        // Extract filename from CDN URL: https://cdn.jsdelivr.net/gh/repo@branch/filename.webp -> /filename.webp
        const filename = src.split('/').pop() || '';
        const localPath = `/${decodeURIComponent(filename)}`;
        setImgSrc(localPath);
      }
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
}
