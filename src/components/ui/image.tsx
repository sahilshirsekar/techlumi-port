import React from "react";

type ImageProps = {
  src: string; 
  alt: string;
  className?: string; 
  width?: number; 
  height?: number; 
};

const Image: React.FC<ImageProps> = ({ src, alt, className, width, height }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy" 
    />
  );
};

export default Image;
