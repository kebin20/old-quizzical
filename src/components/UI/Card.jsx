/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import bgImage from "./assets/Background.svg";

const CardDiv = styled.div`
  display: flex;
  position: absolute;
  top: 2%;
  left: 50%;
  padding: 2.5em;
  transform: translate(-50%, 0);
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${bgImage});
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

export default function Card(props) {
  return <CardDiv className={`${props.className}`}>{props.children}</CardDiv>;
}
