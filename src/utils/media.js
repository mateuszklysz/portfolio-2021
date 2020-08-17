import { css } from "styled-components";
const sizes = {
  desktopL: 1300,
  desktopS: 1120,
  tablet: 1024,
  phone: 600,
  ip4: 360,
};
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
