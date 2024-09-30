import { ChangeEvent, forwardRef, KeyboardEvent } from 'react';
import * as S from '@/pages/study-room/components/radio/Radio.style';

interface RadioProps {
  id: string;
  name: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ id, name, options, selectedValue, onChange, onKeyDown }, ref) => {
    return (
      <S.Radio>
        {options.map((option) => (
          <S.RadioLabel key={option.value}>
            <S.RadioButton
              ref={ref}
              id={id + option.value}
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={onChange}
              onKeyDown={onKeyDown}
            />
            {option.label}
          </S.RadioLabel>
        ))}
      </S.Radio>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
