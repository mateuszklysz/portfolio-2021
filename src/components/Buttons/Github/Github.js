import React, { useRef } from "react";
import { GithubLink, GithubLogo } from "./Github.styles";
import gsap from "gsap";

const Github = () => {
  const githubRef = useRef(null);

  const handleButtonAnimation = (item, scale) => {
    const tl = gsap.timeline({
      defaults: { ease: "power0.easeNone" },
    });
    tl.to(item.current.children, {
      duration: 0.3,
      scale,
    });
  };

  return (
    <GithubLink
      href={"https://github.com/mateuszklysz"}
      target="_blank"
      ref={githubRef}
    >
      <GithubLogo
        onMouseEnter={() => handleButtonAnimation(githubRef, 0.95)}
        onMouseLeave={() => handleButtonAnimation(githubRef, 1)}
      />
    </GithubLink>
  );
};
export default Github;
