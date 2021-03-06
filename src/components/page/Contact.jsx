import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Title from "../common/PageTitle.jsx";

const ContactItemWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Label = styled.label`
  font-size: 2rem;
`;

const ContactItem = styled.input`
  padding: 10px 20px;
  border: 1px solid #2c3e50;
  width: 100%;
  font-size: 1.6rem;
  margin-top: 15px;
  box-sizing: border-box;
`;

const MessageArea = styled.textarea`
  padding: 10px 20px;
  border: 1px solid #2c3e50;
  width: 100%;
  font-size: 1.6rem;
  margin-top: 15px;
  resize: none;
  height: 300px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  max-width: 280px;
  text-align: center;
  padding: 10px 0;
  background: #2c3e50;
  border: none;
  color: #ecf0f1;
  border-radius: 5px;
  font-size: 1.8rem;
`;

const Contact = () => {
  /*const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  Here’s the juicy bit for posting the form submission 

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: name,
        email: email,
        message: message,
      }),
    })
      .then(() => history.push("/thanks") console.log("やあ"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const nameHandleChange = (e) => setName(e.target.value);
  const emailHandleChange = (e) => setEmail(e.target.value);
  const messageHandleChange = (e) => setMessage(e.target.value);*/
  return (
    <>
      <Title title="CONTACT" />
      <form
        name="contact"
        method="POST"
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <ContactItemWrapper>
          <li style={{ width: "45%", marginBottom: "20px" }}>
            <Label htmlFor="name">NAME</Label>
            <ContactItem placeholder="Your Name" id="name" name="name" />
          </li>
          <li style={{ width: "45%", marginBottom: "20px" }}>
            <Label htmlFor="email">MAIL</Label>
            <ContactItem
              placeholder="Email Address"
              id="email"
              type="email"
              name="email"
            />
          </li>
          <li style={{ width: "100%", marginBottom: "20px" }}>
            <Label htmlFor="message">MESSAGE</Label>
            <MessageArea
              placeholder="Put message here"
              id="message"
              row="4"
              name="message"
            />
          </li>
          <Button type="submit">Send Message</Button>
        </ContactItemWrapper>
        {/*
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:{" "}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>*/}
      </form>
    </>
  );
};

export default Contact;
