import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import {
  EmailContainer,
  StyledInput,
  StyledArea,
  ConfirmContainer,
  Button,
} from "./Email.styles";
const Email = () => {
  const [done, setDone] = useState(false);
  const [verify, setVerify] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

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
    <EmailContainer>
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
        value={content}
        onChange={event => setContent(event.target.value)}
        placeholder="Treść wiadomości..."
      />
      <ConfirmContainer>
        <ReCAPTCHA
          sitekey={process.env.GATSBY_SITE_KEY}
          onChange={value => (value ? setVerify(true) : null)}
          theme="dark"
          onExpired={() => setVerify(false)}
        />
        <Button onClick={sendEmail}>
          {done ? "Wysłano" : "Wyślij wiadomość"}
        </Button>
      </ConfirmContainer>
    </EmailContainer>
  );
};

export default Email;
