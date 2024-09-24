import styled from 'styled-components';

export const ProfileImageContainer = styled.div<{
  width: string;
  height: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50%;
  background-color: white;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 80%;
  height: 80%;
  object-fit: cover;
`;
