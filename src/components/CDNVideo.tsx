"use client";

import { useState, useRef, useEffect } from 'react';

interface CDNVideoProps {
  src: string;
  className?: string;
  fallbackSrc?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  [key: string]: any;
}

/**
 * Video component with CDN support and automatic fallback to local videos
 * Usage: <CDNVideo src="https://cdn.jsdelivr.net/.../video.mp4" autoPlay loop muted />
 * Falls back to /video.mp4 if CDN fails
 */
export default function CDNVideo({ 
  src, 
  className = '',
  fallbackSrc,
  autoPlay = false,
  loop = false,
  muted = false,
  playsInline = true,
  ...props 
}: CDNVideoProps) {
  const [videoSrc, setVideoSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Extract filename from CDN URL or use fallbackSrc
      if (fallbackSrc) {
        setVideoSrc(fallbackSrc);
      } else {
        // Extract filename from CDN URL
        const filename = src.split('/').pop() || '';
        const localPath = `/${decodeURIComponent(filename)}`;
        setVideoSrc(localPath);
      }
    }
  };

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, likely due to browser policy
      });
    }
  }, [autoPlay, videoSrc]);

  return (
    <video
      ref={videoRef}
      src={videoSrc}
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      onError={handleError}
      {...props}
    />
  );
}
