import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  padding: 24px 0;

  background-color: ${({ theme }) => theme.COLORS.COAL};
  z-index: 1000;
`;

export const HeaderContent = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    li {
      &:after {
        display: block;
        content: "";
        border-bottom: solid 2px;
        transform: scaleX(0);
        transition: transform 300ms ease-in-out;
      }

      &:hover:after {
        transform: scaleX(1);
      }
    }
  }
`;

export const ContainerNavList = styled.ul`
  display: flex;
  align-items: center;

  gap: 16px;

  li {
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const ButtonCV = styled.a`
  color: ${({ theme }) => theme.COLORS.WHITE};

  background: none;
  border: 1px solid;
  border-radius: 25px;
  padding: 10px 25px;
`;
