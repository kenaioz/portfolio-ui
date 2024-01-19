import { styled } from "styled-components";

export const LabelInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 8px;

  width: 100%;
`;

export const ContainerInput = styled.input`
  color: ${({ theme }) => theme.COLORS.BLACK};
  background-color: ${({ theme }) => theme.COLORS.GRAY};

  border: 0;
  border-radius: 8px;

  height: 50px;
  padding: 12px 14px;
`;

export const ContainerTextArea = styled.textarea`
  color: ${({ theme }) => theme.COLORS.BLACK};
  background-color: ${({ theme }) => theme.COLORS.GRAY};

  height: 200px;
  width: 100%;

  padding: 12px 14px;
  border-radius: 8px;

  border: 0;
  resize: none;
`;

export const ContainerButton = styled.button`
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.RED};

  height: fit-content;
  width: 100%;

  border: 0;
  padding: 18px 36px;
  border-radius: 5px;

  margin-top: 24px;
`;
