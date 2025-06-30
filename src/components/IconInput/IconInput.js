import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    padding: "4px 4px 4px 24px",
    border: 1,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    padding: "8px 8px 8px 36px",
    border: 2,
  },
};

const IconInput = ({
  label,
  icon = "search",
  width = 250,
  size = "small",
  placeholder,
}) => {
  const styles = STYLES[size];

  return (
    <Wrapper
      style={{
        "--width": width + "px",
        "--padding": styles.padding,
        "--border": styles.border + "px",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <Input
        placeholder={placeholder}
        style={{ "--fontSize": styles.fontSize / 16 + "rem" }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);

  &::before {
    content: "";
    position: absolute;
    left: 2px;
    right: 2px;
    bottom: 2px;
    height: var(--border);
    background: ${COLORS.gray700};
    border-radius: 16px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  width: var(--size);
  height: var(--size);
  left: 3px;
  top: 0;
  bottom: 0;
  margin: auto;
  pointer-events: none;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  padding: var(--padding);
  font-size: var(--fontSize);
  color: ${COLORS.gray700};
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
