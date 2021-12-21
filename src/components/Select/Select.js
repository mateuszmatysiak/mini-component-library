import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const size = 22;

  return (
    <Wrapper value={value} onChange={onChange} aria-label="Select">
      <NativeSelect>{children}</NativeSelect>
      <PresentationalSelect>{displayedValue}</PresentationalSelect>
      <IconWrapper style={{ "--size": size + "px" }}>
        <Icon id="chevron-down" strokeWidth={1.75} size={size} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-appearance: none;
`;

const PresentationalSelect = styled.div`
  padding: 12px 48px 12px 12px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 8px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  color: ${COLORS.gray700};
  pointer-events: none;
`;

export default Select;
