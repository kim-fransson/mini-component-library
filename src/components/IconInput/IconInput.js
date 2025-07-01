import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 24,
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
  },
  large: {
    height: 32,
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
  },
};

const IconInput = ({
  label,
  icon = "search",
  width = 250,
  size = "small",
  ...delegated
}) => {
  const styles = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} strokeWidth={2} />
      </IconWrapper>
      <Input
        {...delegated}
        style={{
          "--fontSize": styles.fontSize / 16 + "rem",
          "--width": width + "px",
          "--height": styles.height / 16 + "rem",
        }}
      />
      <Border
        style={{
          "--border-thickness": styles.borderThickness + "px",
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  width: fit-content;

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  width: var(--size);
  height: var(--size);
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const Input = styled.input`
  border: none;
  width: var(--width);
  height: var(--height);
  color: inherit;
  font-size: var(--fontSize);
  font-weight: 700;
  padding-left: var(--height);
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const Border = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--border-thickness);
  background: ${COLORS.gray700};
  border-radius: 16px;
`;

export default IconInput;
