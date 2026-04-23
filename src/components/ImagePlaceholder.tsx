import { ImageOff } from 'lucide-react';

interface Props {
  label: string;
  className?: string;
}

export default function ImagePlaceholder({ label, className = '' }: Props) {
  return (
    <div className={`image-placeholder ${className}`}>
      <ImageOff size={32} strokeWidth={1.5} />
      <span className="image-placeholder__label">{label}</span>
    </div>
  );
}
