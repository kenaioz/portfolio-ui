import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoint";

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

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: none;
    }

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

  > svg {
    cursor: pointer;
    display: none;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: block;
    }
  }
`;

export const EndDiv = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`;

export const EndDivSideMenu = styled.div`
  display: flex;
  gap: 16px;
`;

export const ContainerNavList = styled.ul`
  display: flex;
  align-items: center;

  gap: 16px;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    flex-direction: column;
  }

  li {
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const ButtonCV = styled.a`
  color: ${({ theme }) => theme.COLORS.WHITE};

  background: none;
  border: 1px solid;
  border-radius: 8px;
  padding: 10px 25px;
`;

export const ContainerSideMenu = styled.aside`
  background-color: ${({ theme }) => theme.COLORS.COAL};
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 70px;

  transform: translateX(100%);

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    position: absolute;
    z-index: 1000;

    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }
`;

export const LayoutSideMenu = styled.div`
  padding: 64px 32px;

  color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;

  ul {
    flex-direction: column;
    margin-bottom: 32px;
    li {
      text-align: center;

      font-size: 24px;
      padding: 10px;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY};
    }
  }

  a {
    display: block;
    font-size: 16px;
  }
`;
