import { styled } from "styled-components";

export const Container = styled.div`
  h1 {
    cursor: pointer;
    font-size: 1.5rem;
    span {
      color: ${({ theme }) => theme.COLORS.RED};
    }
  }
`;
