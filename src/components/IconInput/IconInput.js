import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    iconSize: 16,
    fontSize: 0.875,
    borderSize: 1,
    paddingLeft: 24,
  },
  large: {
    iconSize: 18,
    fontSize: 1,
    borderSize: 2,
    paddingLeft: 28,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = STYLES[size];
  return (
    <Wrapper>
      <Input
        placeholder={placeholder}
        style={{
          "--width": width + "px",
          "--border-size": style.borderSize + "px",
          "--font-size": style.fontSize + "rem",
          "--padding-left": style.paddingLeft + "px",
        }}
      />
      <IconWrapper
        style={{
          "--size": style.iconSize + "px",
        }}
      >
        <Icon id={icon} size={style.iconSize} strokeWidth={1.5} />
      </IconWrapper>

      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  width: var(--width);
  border: unset;
  border-bottom: var(--border-size) solid ${COLORS.black};
  font-size: var(--font-size);
  padding-left: var(--padding-left);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 500;
    color: ${COLORS.gray500};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: var(--size);
`;

export default IconInput;
