import { KeyboardEvent } from 'react';
import * as S from '@/pages/study-room/components/radio/Radio.style';

interface RadioProps {
  id: string;
  name: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export default function Radio({
  id,
  name,
  options,
  selectedValue,
  onChange,
  onKeyDown,
}: RadioProps) {
  return (
    <S.Radio>
      {options.map((option) => (
        <S.RadioLabel key={option.value}>
          <S.RadioButton
            id={id + option.value}
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            onKeyDown={onKeyDown}
          />
          {option.label}
        </S.RadioLabel>
      ))}
    </S.Radio>
  );
}
