import React, { useRef } from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import gsap from "gsap";
import media from "../../utils/media";

const StyledButton = styled.p`
  color: ${({ theme: { color } }) => color.black};
  font-size: ${({ theme: { font } }) => font.size.xs};
  background-color: ${({ theme: { color } }) => color.white};
  text-align: center;
  line-height: 50px;
  width: 130px;
  height: 100%;
  outline: none;
  cursor: pointer;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 20px;
  font-weight: bold;
  box-sizing: border-box;
  ${media.phone`
    width: 100px;
    line-height: 40px;
  `}

  ${media.ip4`
    font-size: ${({ theme: { font } }) => font.size.s};
    width: 70px;
    line-height: 30px;
   `}
`;

const StyledButtonLink = styled(AniLink)`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const Button = ({ text, to }) => {
  const buttonRef = useRef(null);

  const handleButtonAnimation = (item, scale) => {
    const tl = gsap.timeline({
      defaults: { ease: "power0.easeNone" },
    });
    tl.to(item.current, {
      duration: 0.3,
      scale: scale,
    });
  };
  return (
    <StyledButton
      ref={buttonRef}
      onMouseEnter={() => handleButtonAnimation(buttonRef, 0.95)}
      onMouseLeave={() => handleButtonAnimation(buttonRef, 1)}
    >
      <StyledButtonLink paintDrip hex="#121212" to={to}>
        {text}
      </StyledButtonLink>
    </StyledButton>
  );
};
export default Button;
