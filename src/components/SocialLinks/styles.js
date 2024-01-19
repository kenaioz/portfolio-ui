import { styled } from "styled-components";

export const ContainerSocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.RED};
    padding: 10px;
    border-radius: 50%;
  }
`;
