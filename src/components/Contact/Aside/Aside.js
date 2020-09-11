import React from "react";
import { StyledMail, InfoText } from "./Aside.styles";
const Aside = () => {
  return (
    <aside>
      <StyledMail />
      <InfoText>
        <span style={{ fontSize: "32px" }}>Numer telefonu:</span>
        <br />
        <a href="tel:+48579971736" style={{ color: "inherit" }}>
          579 971 736
        </a>
      </InfoText>
      <InfoText>
        <span style={{ fontSize: "32px" }}>E-mail:</span>
        <br />
        <a href="mailto:mateuszklysz@outlook.com" style={{ color: "inherit" }}>
          mateuszklysz@outlook.com
        </a>
      </InfoText>
    </aside>
  );
};

export default Aside;
