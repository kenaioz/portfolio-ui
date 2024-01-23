import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoint";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const PageContent = styled.div`
  padding: 5.6rem 0 19rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 5.6rem 0 25.75rem;
  }
`;

export const Intro = styled.div`
  scroll-margin-top: 90px;
  height: fit-content;
  padding: 10.625rem 0;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 180px 0;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3.125rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      flex-direction: column;
    }
  }

  img {
    width: 300px;

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      width: 250px;
    }
  }

  .infos {
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
    width: 32rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      width: 100%;
    }

    .titleWrapper {
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 20px;
      }
      h1 {
        color: ${({ theme }) => theme.COLORS.RED};
        span {
          color: ${({ theme }) => theme.COLORS.BLACK};
        }
      }
    }
  }
`;

export const AboutMe = styled.div`
  scroll-margin-top: 80px;
  height: fit-content;
  padding: 6.25rem 0;
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};

  > div {
    display: flex;
    align-items: center;
    gap: 50px;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      flex-direction: column;
    }
  }

  h1 {
    span {
      color: ${({ theme }) => theme.COLORS.BLACK};
    }
  }

  img {
    width: 500px;
    flex-shrink: 0;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 300px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      width: 250px;
    }
  }
`;

export const Techs = styled.div`
  scroll-margin-top: 80px;
  height: fit-content;
  padding: 6.25rem 0;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.125rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      flex-direction: column-reverse;
    }

    h1 {
      margin-bottom: 0.5rem;

      @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        text-align: center;
      }
    }
  }

  img {
    width: 500px;

    @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
      width: 300px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      width: 250px;
    }
  }
`;

export const Projects = styled.div`
  scroll-margin-top: 80px;
  height: fit-content;
  padding: 6.25rem 0;
  background-color: ${({ theme }) => theme.COLORS.COAL};
  color: ${({ theme }) => theme.COLORS.WHITE};

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.125rem;

    > div {
      > h1 {
        margin-bottom: 1rem;
      }
    }
  }
`;

export const Contact = styled.section`
  scroll-margin-top: 80px;
  height: fit-content;
  padding: 6.25rem 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.125rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      flex-direction: column;
      justify-content: center;
    }

    fieldset {
      border: none;
      width: 500px;

      display: flex;
      flex-direction: column;
      gap: 1rem;

      @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        width: 300px;
      }
    }
  }

  img {
    width: 500px;

    @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
      width: 300px;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: none;
    }
  }
`;
