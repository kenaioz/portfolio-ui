import { styled } from "styled-components";

export const ContainerTooltip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TooltipWrapper = styled.div`
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.COAL};
  font-size: 14px;
  line-height: 1;
  z-index: 100;
  text-align: center;
  white-space: nowrap;
  top: -40px;

  &::before {
    content: " ";
    left: 50%;
    transform: translateX(-50%);
    border: 10px solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;

    top: 100%;
    border-top-color: ${({ theme }) => theme.COLORS.COAL};
  }
`;
