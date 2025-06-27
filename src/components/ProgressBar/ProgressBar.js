/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: 8,
    radius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    radius: 4,
    padding: 0,
  },
  large: {
    height: 16,
    radius: 8,
    padding: 4,
  },
};

const ProgressBar = ({ value, label, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px",
      }}
    >
      <VisuallyHidden>${value}%</VisuallyHidden>
      <StatusWrapper style={{ "--radius": styles.radius / 2 + "px" }}>
        <StatusTrack
          style={{
            "--width": value + "%",
            "--height": styles.height + "px",
            "--radius": styles.radius / 2 + "px",
          }}
        />
      </StatusWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: var(--radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const StatusWrapper = styled.div`
  border-radius: var(--radius);
  /* Trim off corners when track is close to the right edge */
  overflow: hidden;
`;

const StatusTrack = styled.div`
  background: ${COLORS.primary};
  border-radius: var(--radius) 0 0 var(--radius);
  width: var(--width);
  height: var(--height);
`;

export default ProgressBar;
