import * as S from '@/pages/study-room/components/toggleButton/ToggleButton.style';

interface ToggleButtonProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function ToggleButton({
  id,
  checked,
  onChange,
  onKeyDown,
}: ToggleButtonProps) {
  return (
    <S.ToggleSwitch>
      <S.ToggleSwitchLabel>
        <S.Checkbox
          id={id}
          checked={checked}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <S.Slider />
      </S.ToggleSwitchLabel>
    </S.ToggleSwitch>
  );
}
