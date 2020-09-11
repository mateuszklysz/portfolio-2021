import React, { useRef } from "react";
import { StyledButton, ButtonLink, ExternalButtonLink } from "./Button.styles";
import gsap from "gsap";

const Button = ({ text, to, external = false }) => {
  const buttonRef = useRef(null);

  const handleButtonAnimation = (item, scale) => {
    const tl = gsap.timeline({
      defaults: { ease: "power0.easeNone" },
    });
    tl.to(item.current, {
      duration: 0.3,
      scale,
    });
  };
  return (
    <StyledButton
      ref={buttonRef}
      onMouseEnter={() => handleButtonAnimation(buttonRef, 0.95)}
      onMouseLeave={() => handleButtonAnimation(buttonRef, 1)}
    >
      {external ? (
        <ExternalButtonLink href={to} target="_blank">
          {text}
        </ExternalButtonLink>
      ) : (
        <ButtonLink paintDrip hex="#121212" to={to}>
          {text}
        </ButtonLink>
      )}
    </StyledButton>
  );
};
export default Button;
