import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  > div:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  gap: 32px;

  img {
    align-self: center;

    border-radius: 15px;
  }

  > div {
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h1,
  h3 {
    color: ${({ theme }) => theme.COLORS.RED};

    > span {
      color: ${({ theme }) => theme.COLORS.BLACK};
    }
  }

  color: ${({ theme }) => theme.COLORS.BLACK};

  background-color: ${({ theme }) => theme.COLORS.WHITE};

  border-radius: 15px;
  padding: 32px;

  .stacks {
    display: flex;
    justify-content: space-between;

    .title {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 5px;
    }

    .stack {
      width: 230px;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      color: ${({ theme }) => theme.COLORS.WHITE};
      background-color: ${({ theme }) => theme.COLORS.RED};
      padding: 5px;
      border-radius: 50%;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ContainerChip = styled.div`
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};

  width: fit-content;
  padding: 4px 8px;
  border-radius: 5px;
`;

export const ContainerChipWrapper = styled.div`
  display: flex;
  gap: 12px;

  flex-wrap: wrap;
`;
