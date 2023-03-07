/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const StartButton = styled.button`
  font-family: "Karla", sans-serif;
  padding: 0.6em 2em;
  border-radius: 12px;
  border: none;
  font-size: 1.3rem;
  background-color: #4d5b9e;
  color: white;
  cursor: pointer;
  align-self: center;
  margin-top: 2em;
`;

export default function Button(props) {
  return (
    <StartButton type={props.type || "button"} onClick={props.onClick}>
      {props.children}
    </StartButton>
  );
}
