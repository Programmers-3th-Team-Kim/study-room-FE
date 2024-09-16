import styled from "styled-components";
import { IconType } from "react-icons";
import React from "react";
import { ButtonSize } from "@/styles/theme";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  label: string;
  Icon?: IconType;
  size?: ButtonSize;
  borderRadius? :string;
  fontSize: string;
  iconSize?: number;
}

function SCreateButton({ label, size = "small", Icon, borderRadius, fontSize, iconSize = 16, ...props}: ButtonProps) {
  return (
    <SCreateButtonStyle size={size} borderRadius={borderRadius} fontSize={fontSize} {...props}>
      <div className="icon">{Icon && <Icon size={iconSize} />}</div>
      <span className="label">{label}</span>
    </SCreateButtonStyle>
  );
};

const SCreateButtonStyle = styled.button<{ size: ButtonSize; borderRadius?: string; fontSize?: string; }>`
  color: white;
  border: none;
  background-color: ${({ theme }) => theme.color.mainStrong};
  width: ${({ theme, size }) => theme.studyRoomButton[size].width};
  height: ${({ theme, size }) => theme.studyRoomButton[size].height};
  border-radius: ${({ theme, borderRadius }) => borderRadius || theme.borderRadius};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px; // 아이콘과 왼쪽 여백
  position: relative;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding-right: 20px; */
  }

  .label {
    flex: 1; // 버튼 너비에 맞춰서 중앙 배치
    text-align: center;
    padding-right: 20px; // 글씨기준 오른쪽 여백
  }
`;

export default SCreateButton;