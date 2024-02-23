import { useState } from "react";

import { ContainerTooltip, TooltipWrapper } from "./styles";

export function Tooltip({ content, children }) {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <ContainerTooltip onMouseEnter={showTip} onMouseLeave={hideTip}>
      {children}
      {active && <TooltipWrapper>{content}</TooltipWrapper>}
    </ContainerTooltip>
  );
}
