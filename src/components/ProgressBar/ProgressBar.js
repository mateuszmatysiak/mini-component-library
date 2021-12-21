/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

// CUSTOM

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 5,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 5,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 10,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow="20"
      aria-valuemin="0"
      aria-valuetext={value}
      aria-valuemax="100"
      style={{
        "--padding": styles.padding + "px",
        "--radius": styles.radius + "px",
      }}
    >
      <BarWrapper>
        <VisuallyHidden>{value}%</VisuallyHidden>
        <Bar
          style={{
            "--width": value + "%",
            "--height": styles.height + "px",
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.gray50};
  border-radius: var(--radius);
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 5px 0 0 5px;
`;

const BarWrapper = styled.div`
  border-radius: 5px;
  overflow: hidden;
`;

// NATIVE

// const STYLES = {
//   small: {
//     height: 5,
//     radius: 5,
//   },
//   medium: {
//     height: 10,
//     radius: 5,
//   },
//   large: {
//     height: 20,
//     radius: 5,
//   },
// };

// const ProgressBar = ({ value, size }) => {
//   const styles = STYLES[size];
//   return (
//     <Wrapper
//       min="0"
//       max="100"
//       value={value}
//       style={{
//         "--height": styles.height + "px",
//         "--radius": styles.radius + "px",
//       }}
//     >
//       <VisuallyHidden>{`${value}%`}</VisuallyHidden>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.progress`
//   width: 100%;
//   height: var(--height);
//   border-radius: var(--radius);

//   &::-webkit-progress-bar {
//     border-radius: var(--radius);
//     background-color: ${COLORS.gray50};
//     box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
//     overflow: hidden;
//   }

//   &::-webkit-progress-value {
//     background-color: ${COLORS.primary};
//     border-radius: var(--radius) 0 0 var(--radius);
//   }
// `;

export default ProgressBar;
