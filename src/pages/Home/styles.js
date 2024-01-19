import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const PageContent = styled.div`
  padding: 5.6rem 0 16.375rem;
`;

export const Intro = styled.div`
  scroll-margin-top: 90px;
  height: fit-content;
  padding: 200px 120px;

  > div {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  img {
    height: 300px;
  }

  .infos {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .titleWrapper {
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 20px;
        line-height: 15px;
      }
      h1 {
        color: ${({ theme }) => theme.COLORS.RED};
        span {
          color: ${({ theme }) => theme.COLORS.BLACK};
        }
      }
    }

    p {
    }

    .icons {
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
    }
  }
`;

export const AboutMe = styled.div`
  scroll-margin-top: 85px;
  height: fit-content;
  padding: 100px 0;
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};

  > div {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  h1 {
    span {
      color: ${({ theme }) => theme.COLORS.BLACK};
    }
  }

  img {
    width: 500px;
  }
`;

export const Techs = styled.div`
  scroll-margin-top: 85px;
  height: fit-content;
  padding: 100px 0;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    h1 {
      margin-bottom: 8px;
    }
  }

  img {
    width: 500px;
  }
`;

export const Projects = styled.div`
  scroll-margin-top: 85px;
  height: fit-content;
  padding: 100px 0;
  background-color: ${({ theme }) => theme.COLORS.COAL};
  color: ${({ theme }) => theme.COLORS.WHITE};

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    > div {
      > h1 {
        margin-bottom: 16px;
      }
    }
  }

  img {
    width: 500px;
  }
`;

export const Contact = styled.section`
  scroll-margin-top: 85px;
  height: fit-content;
  padding: 100px 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;

    fieldset {
      border: none;
      width: 500px;

      display: flex;
      flex-direction: column;
      gap: 16px;

      legend {
        margin-bottom: 16px;
      }
    }
  }

  img {
    width: 500px;
  }
`;
