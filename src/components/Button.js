import React from "react";

import styled from "styled-components";

import {
  color_dark_grayish_cyan,
  color_very_dark_cyan,
  color_strong_cyan,
} from "../styles/variables";

const Container = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: auto;
  cursor: pointer;
  background-color: ${color_dark_grayish_cyan};
  color: ${color_very_dark_cyan};
  font-weight: bold;
  border: none;
  border-radius: 2px;

  transition: all 0.2s;

  &:hover {
    background-color: ${color_strong_cyan};
  }
`;

const Button = ({ children, handleReset }) => {
  return <Container onClick={handleReset}>{children}</Container>;
};

export default Button;
