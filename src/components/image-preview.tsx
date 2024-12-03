import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImagePreviewProps {
  file: File | null;
  className?: string;
}

export function ImagePreview({ file, className = '' }: ImagePreviewProps) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    // Free memory when component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  if (!preview) {
    return null;
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={preview}
        alt="Preview"
        width={200}
        height={200}
        className="object-contain rounded-md"
      />
    </div>
  );
} 