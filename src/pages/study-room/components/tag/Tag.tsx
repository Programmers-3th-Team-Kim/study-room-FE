import { KeyboardEvent, useState } from 'react';
import * as S from '@/pages/study-room/components/tag/Tag.style';
import { IoClose } from 'react-icons/io5';
import { FormInput } from '../form/CreateStudyRoomForm.style';

export default function TagInput({ id }: { id: string }) {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ' && inputValue.trim()) {
      e.preventDefault();
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const removeTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <S.TagInputWrapper>
      {tags.map((tag, index) => (
        <S.Tag key={index}>
          {tag}
          <S.RemoveButton onClick={() => removeTag(index)}>
            <IoClose />
          </S.RemoveButton>
        </S.Tag>
      ))}
      <FormInput
        id={id}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        placeholder="태그를 작성해 주세요. (띄어쓰기로 입력)"
      />
    </S.TagInputWrapper>
  );
}
