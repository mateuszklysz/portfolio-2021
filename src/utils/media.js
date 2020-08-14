import { css } from "styled-components";
const sizes = {
  desktopL: 1150,
  desktopS: 860,
  tablet: 768,
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
