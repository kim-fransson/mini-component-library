/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";
import { interpolate } from "./ProgressBar.utils";

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--radius": 4 + "px",
    "--padding": 0,
  },
  medium: {
    "--height": 16 + "px",
    "--radius": 4 + "px",
    "--padding": 0,
  },
  large: {
    "--height": 24 + "px",
    "--radius": 8 + "px",
    "--padding": 4 + "px",
  },
};

const ProgressBar = ({ value, label, size }) => {
  const styles = SIZES[size];

  return (
    <Wrapper
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      style={styles}
    >
      <VisuallyHidden>${value}%</VisuallyHidden>
      <StatusTrack value={value} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: var(--radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
  padding: var(--padding);
`;

const StatusTrack = styled.div`
  background: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${(props) =>
    interpolate(props.value, 99, 100, 0, 4) + "px"};
  border-bottom-right-radius: ${(props) =>
    interpolate(props.value, 99, 100, 0, 4) + "px"};
  width: clamp(0%, ${(props) => props.value + "%"}, 100%);
  height: 100%;
`;

export default ProgressBar;
