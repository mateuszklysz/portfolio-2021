import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import Mail from "../assets/svg/mail.svg";
import media from "../utils/media";

const StyledContainer = styled.section`
  min-height: calc(100vh - 200px);
  max-width: 1250px;
  margin: auto;
  padding: 20px 100px 0 100px;
  ${media.tablet`
    padding: 0 100px 25px 100px;
  `}
  ${media.phone`
    padding: 0;
  `}
`;

const StyledEmailContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  ${media.laptop`
  width: 400px;
  `}
`;

const StyledMainContainer = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: start;
  margin: 40px auto 0 auto;
  ${media.tablet`
    margin: auto;
    align-items: center;
    flex-direction: column-reverse;
  `}
`;

const StyledText = styled.h1`
  font-size: ${({ theme: { font } }) => font.size.xl};
  color: ${({ theme: { color } }) => color.white};
  ${media.tablet`
    text-align: center;
    font-size: ${({ theme: { font } }) => font.size.l};
  `};
`;

const StyledMail = styled(Mail)`
  width: 360px;
  height: 240px;
  ${media.laptop`
    width:270px;
    height:180px;
  `};
  ${media.tablet`
    display:none;
  `}
`;

const StyledInfoText = styled.p`
  display: block;
  font-size: ${({ theme: { font } }) => font.size.xm};
  color: ${({ theme: { color } }) => color.white};
  font-weight: bold;
  padding-top: 25px;
  ${media.tablet`
    padding: 25px 0;
    text-align: center;
  `}
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  background-color: ${({ theme: { color } }) => color.secondary};
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.xs};
  line-height: normal;
  -webkit-user-select: text;
  font-weight: bold;
  border: none;
  width: 500px;
  height: 50px;
  margin: 15px 0;
  padding: 0 20px;
  &::placeholder {
    color: ${({ theme: { color } }) => color.white};
  }
  ${media.laptop`
  width: 400px;
  `}
  ${media.phone`
  width: 300px;
  `}
  &:-webkit-autofill,
  &:-webkit-autofill:hover, 
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ theme: { color } }) => color.white};
    box-shadow: 0 0 0px 1000px ${({ theme: { color } }) => color.secondary}
      inset;
  }
`;

const StyledArea = styled.textarea`
  box-sizing: border-box;
  background-color: ${({ theme: { color } }) => color.secondary};
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.xs};
  font-family: ${({ theme: { font } }) => font.family.openSans};
  line-height: 1;
  -webkit-user-select: text;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  resize: none;
  width: 500px;
  height: 300px;
  margin: 15px 0;
  &::placeholder {
    color: ${({ theme: { color } }) => color.white};
  }
  ${media.laptop`
    width: 400px;
  `}
  ${media.phone`
    width: 300px;
  `}
`;

const StyledConfirmContainer = styled.div`
  display: flex;
  ${media.laptop`
    flex-direction:column;
  `}
`;

const StyledButton = styled.button`
  background-color: ${({ theme: { color } }) => color.secondary};
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { font } }) => font.size.xs};
  font-family: ${({ theme: { font } }) => font.family.openSans};
  font-weight: bold;
  border: none;
  width: 180px;
  height: 74px;
  margin-left: 10px;
  ${media.laptop`
    width: 300px;
    margin: 10px 0;
    height: 50px;
  `}
`;

const Contact = () => {
  const [done, setDone] = useState(false);
  const [verify, setVerify] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const containerRef = useRef(null);

  const gsapAnimations = () => {
    gsap.fromTo(
      containerRef.current.children,
      {
        x: "-=50",
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.5,
      }
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    gsapAnimations();
  }, []);

  const sendEmail = event => {
    event.preventDefault();
    if (!name || !email || !content) {
      alert("Wprowadź poprawnie dane");
    } else if (!verify) {
      alert("Zweryfikuj czy nie jesteś robotem");
    } else {
      emailjs
        .send(
          process.env.GATSBY_SERVICE_ID,
          process.env.GATSBY_TEMPLATE_ID,
          {
            from_name: name,
            reply_to: email,
            message_html: content,
          },
          process.env.GATSBY_USERID
        )
        .then(() => {
          setDone(true);
          setName("");
          setEmail("");
          setContent("");
          setTimeout(() => setDone(false), 4000);
        })
        .catch(() => {
          alert("Błąd podczas wysyłania...");
        });
    }
  };

  return (
    <>
      <StyledContainer ref={containerRef}>
        <StyledText>Szukasz kontaktu?</StyledText>
        <StyledMainContainer>
          <aside>
            <StyledMail />
            <StyledInfoText>
              <span style={{ fontSize: "32px" }}>Numer telefonu:</span>
              <br />
              <a href="tel:+48579971736" style={{ color: "inherit" }}>
                579 971 736
              </a>
            </StyledInfoText>
            <StyledInfoText>
              <span style={{ fontSize: "32px" }}>E-mail:</span>
              <br />
              <a
                href="mailto:mateuszklysz@outlook.com"
                style={{ color: "inherit" }}
              >
                mateuszklysz@outlook.com
              </a>
            </StyledInfoText>
          </aside>
          <StyledEmailContainer>
            <StyledInput
              name="userName"
              value={name}
              onChange={event => setName(event.target.value)}
              placeholder="Imię"
            />
            <StyledInput
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              placeholder="E-mail"
            />
            <StyledArea
              name="content"
              as="textarea"
              value={content}
              onChange={event => setContent(event.target.value)}
              placeholder="Treść wiadomości..."
            />
            <StyledConfirmContainer>
              <ReCAPTCHA
                sitekey={process.env.GATSBY_SITE_KEY}
                onChange={value => (value ? setVerify(true) : null)}
                theme="dark"
                onExpired={() => setVerify(false)}
              />
              <StyledButton onClick={sendEmail}>
                {done ? "Wysłano" : "Wyślij wiadomość"}
              </StyledButton>
            </StyledConfirmContainer>
          </StyledEmailContainer>
        </StyledMainContainer>
      </StyledContainer>
    </>
  );
};

export default Contact;
