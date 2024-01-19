import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoint";

export const Layout = styled.div`
  margin: 0 124px;

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    margin: 0 64px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin: 0 16px;
  }
`;
