import { ChangeEvent, MouseEvent, useRef, useState } from 'react';
import { LuUpload } from 'react-icons/lu';
import * as S from '@/pages/study-room/components/imageUpload/ImageUpload.style';

interface ImageUploadButtonProps {
  onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
}

export default function ImageUpload({ onKeyDown }: ImageUploadButtonProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <>
      <S.ImageInput
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <S.UploadWrapper>
        <S.UploadButton onClick={handleButtonClick} onKeyDown={onKeyDown}>
          <LuUpload /> 사진 업로드
        </S.UploadButton>
        {fileName && <S.FileName>{fileName}</S.FileName>}
      </S.UploadWrapper>
    </>
  );
}
