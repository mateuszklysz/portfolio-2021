import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import {
  EmailContainer,
  StyledInput,
  StyledArea,
  ErrorMessange,
  ConfirmContainer,
  Button,
} from "./Form.styles";
const Form = () => {
  const [verify, setVerify] = useState({
    done: false,
    showError: false,
  });
  const [sendButton, setSendButton] = useState("Wyślij wiadomość");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState({
    name: "",
    email: "",
    content: "",
  });

  const sendEmail = event => {
    event.preventDefault();
    if (name.length < 3) {
      setError(state => ({
        ...state,
        name: "Wpisz poprawne imię (minimum 3 znaki)",
      }));
    } else {
      setError(state => ({
        ...state,
        name: "",
      }));
    }
    if (!email.includes("@")) {
      setError(state => ({
        ...state,
        email: "Wpisz poprawny email",
      }));
    } else {
      setError(state => ({
        ...state,
        email: "",
      }));
    }
    if (content.length < 3) {
      setError(state => ({
        ...state,
        content: "Wpisz poprawną wiadomość (minimum 3 znaki)",
      }));
    } else {
      setError(state => ({
        ...state,
        content: "",
      }));
    }
    if (
      verify.done &&
      name.length > 3 &&
      email.includes("@") &&
      content.length > 3
    ) {
      setSendButton("Wysyłanie...");
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
          setSendButton("Wysłano :)");
          setName("");
          setEmail("");
          setContent("");
          setTimeout(() => setSendButton("Wyślij wiadomość"), 3000);
        })
        .catch(() => {
          setSendButton("Błąd podczas wysyłania...");
          setTimeout(() => setSendButton("Wyślij wiadomość"), 3000);
        });
    } else {
      if (!verify.done) {
        setVerify(state => ({
          ...state,
          showError: true,
        }));
      }
    }
  };
  return (
    <EmailContainer>
      <StyledInput
        name="userName"
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder="Imię"
      />
      <ErrorMessange>{error.name}</ErrorMessange>
      <StyledInput
        name="email"
        type="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        placeholder="E-mail"
      />
      <ErrorMessange>{error.email}</ErrorMessange>
      <StyledArea
        name="content"
        type="text"
        value={content}
        onChange={event => setContent(event.target.value)}
        placeholder="Treść wiadomości..."
      />
      <ErrorMessange>{error.content}</ErrorMessange>
      <ConfirmContainer>
        <ReCAPTCHA
          sitekey={process.env.GATSBY_SITE_KEY}
          onChange={value => {
            if (value) {
              setVerify(() => ({
                done: true,
                showError: false,
              }));
            }
          }}
          theme="dark"
          onExpired={() =>
            setVerify(state => ({
              ...state,
              done: false,
            }))
          }
        />
        <Button onClick={sendEmail}>{sendButton}</Button>
      </ConfirmContainer>
      <ErrorMessange>
        {verify.showError ? "Zweryfikuj czy nie jesteś robotem" : null}
      </ErrorMessange>
    </EmailContainer>
  );
};

export default Form;
