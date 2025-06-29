import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({
  label,
  value,
  onChange,
  children,
  ...delegated
}) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <HiddenSelect value={value} onChange={onChange} {...delegated}>
        {children}
      </HiddenSelect>

      <VisibleSelect>
        {displayedValue}
        <Icon id='chevron-down' strokeWidth={2} size={24} />
      </VisibleSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const HiddenSelect = styled.select`
  position: absolute;
  inset: 0;
  opacity: 0;
  appearance: none;
`;

const VisibleSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 8px;
  background: ${COLORS.transparentGray15};
  padding: 12px 10px 12px 16px;
  color: ${COLORS.gray700};

  ${HiddenSelect}:focus + & {
    outline: 2px solid ${COLORS.primary};
  }

  ${HiddenSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
