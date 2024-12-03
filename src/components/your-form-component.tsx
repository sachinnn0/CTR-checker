import { useState } from 'react';
import { ImagePreview } from './image-preview';

export function YourFormComponent() {
  const [selectedImageA, setSelectedImageA] = useState<File | null>(null);
  const [selectedImageB, setSelectedImageB] = useState<File | null>(null);

  const handleImageAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImageA(e.target.files[0]);
    }
  };

  const handleImageBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImageB(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="imageA" className="block text-sm font-medium text-gray-700">
          Test Image A
        </label>
        <input
          type="file"
          id="imageA"
          accept="image/*"
          onChange={handleImageAChange}
          className="mt-1"
        />
        <ImagePreview file={selectedImageA} className="mt-2" />
      </div>

      <div>
        <label htmlFor="imageB" className="block text-sm font-medium text-gray-700">
          Test Image B
        </label>
        <input
          type="file"
          id="imageB"
          accept="image/*"
          onChange={handleImageBChange}
          className="mt-1"
        />
        <ImagePreview file={selectedImageB} className="mt-2" />
      </div>
    </div>
  );
} 