import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  padding: 24px 0;

  background-color: ${({ theme }) => theme.COLORS.COAL};
`;

export const FooterContent = styled.nav`
  color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 46px;
  justify-content: space-between;

  ul {
    li {
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;
