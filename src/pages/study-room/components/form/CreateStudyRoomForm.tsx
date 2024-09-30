import * as S from '@/pages/study-room/components/form/CreateStudyRoomForm.style';
import { AiOutlinePlus } from 'react-icons/ai';
import Button from '@/components/button/Button';
import { KeyboardEvent, useState } from 'react';
import TagInput from '../tag/Tag';
import Radio from '../radio/Radio';
import ToggleButton from '../toggleButton/ToggleButton';
import ImageUpload from '../imageUpload/ImageUpload';

export default function CreateStudyRoomForm() {
  const [isPrivate, setIsPrivate] = useState(false);
  const [isChatEnabled, setIsChatEnabled] = useState(false);

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement | HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <S.CreateFormWrapper>
      <S.CreateTitle>스터디방 추가</S.CreateTitle>

      <S.CreateForm>
        <S.FormInputField>
          <S.FormLabel htmlFor="title">스터디 이름</S.FormLabel>
          <S.FormInput
            id="title"
            placeholder="스터디 이름을 작성해 주세요."
            onKeyDown={handleKeyDown}
          />
        </S.FormInputField>
        <S.FormInputField>
          <S.FormLabel htmlFor="tag">태그</S.FormLabel>
          <TagInput id="tag" />
        </S.FormInputField>
        <S.FormInputField>
          <S.FormLabel htmlFor="notice">공지사항</S.FormLabel>
          <S.FormInput
            id="notice"
            placeholder="공지사항을 작성해 주세요."
            onKeyDown={handleKeyDown}
          />
        </S.FormInputField>
        <S.FormInputField>
          <S.FormLabel htmlFor="maxNum">최대 인원</S.FormLabel>
          <S.FormInput
            id="maxNum"
            type="number"
            placeholder="최대 12명"
            onKeyDown={handleKeyDown}
          />
        </S.FormInputField>
        <S.FormInputField>
          <S.FormLabel htmlFor="isPublic">공개 여부</S.FormLabel>
          <S.RadioGroupWrapper>
            <Radio
              id="isPublic"
              name="privacy"
              selectedValue={isPrivate ? 'private' : 'public'}
              onChange={(value) => setIsPrivate(value === 'private')}
              onKeyDown={handleKeyDown}
              options={[
                { value: 'public', label: '공개' },
                { value: 'private', label: '비공개' },
              ]}
            />
            {isPrivate && (
              <S.PasswordInputWrapper>
                <S.PasswordInputLabel>비밀번호</S.PasswordInputLabel>
                <S.PasswordInput
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  onKeyDown={handleKeyDown}
                />
              </S.PasswordInputWrapper>
            )}
          </S.RadioGroupWrapper>
        </S.FormInputField>
        <S.FormInputField>
          <S.FormLabel htmlFor="isChat">채팅 여부</S.FormLabel>
          <ToggleButton
            id="isChat"
            checked={isChatEnabled}
            onChange={() => setIsChatEnabled((prev) => !prev)}
            onKeyDown={handleKeyDown}
          />
        </S.FormInputField>
        <S.FormInputField>
          <S.FormLabel htmlFor="bgImage">배경사진</S.FormLabel>
          <ImageUpload onKeyDown={handleKeyDown} />
        </S.FormInputField>

        <Button type="submit" size="large">
          <AiOutlinePlus />
          추가하기
        </Button>
      </S.CreateForm>
    </S.CreateFormWrapper>
  );
}
