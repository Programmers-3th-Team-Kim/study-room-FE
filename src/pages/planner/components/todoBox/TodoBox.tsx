import CheckBox from '@/components/checkBox/CheckBox';
import { MouseEventHandler, useEffect } from 'react';
import { GetTodosRes } from '@/models/studyRoomTodos.model';
import * as S from './TodoBox.style';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchCheckBox } from '@/apis/planners.api';

interface TodoBoxProps extends GetTodosRes {
  onClick?: MouseEventHandler<HTMLDivElement>;
  color?: string | undefined;
  selectedDate: Date;
}

export default function TodoBox({
  _id,
  subject,
  todo,
  isComplete,
  color,
  selectedDate,
  onClick,
}: TodoBoxProps) {
  const queryClient = useQueryClient();
  const barColor = color;

  const mutation = useMutation({
    mutationFn: () => patchCheckBox(_id),
    onSuccess: () => {
      if (selectedDate) {
        queryClient.invalidateQueries({
          queryKey: ['getTodos', selectedDate],
        });
      }
    },
  });

  const handleCheckBoxClick = () => {
    mutation.mutate();
  };

  return (
    <S.TodoBoxStyle onClick={onClick}>
      <S.ColorBarStyle barColor={barColor} />
      <S.InfoArea>
        <S.TodoStyle>{todo}</S.TodoStyle>
        <S.SubjectStyle>{subject}</S.SubjectStyle>
      </S.InfoArea>
      <S.CheckBoxArea>
        <CheckBox
          defaultChecked={isComplete}
          onChange={handleCheckBoxClick}
          disabled={mutation.isPending}
        />
      </S.CheckBoxArea>
    </S.TodoBoxStyle>
  );
}
