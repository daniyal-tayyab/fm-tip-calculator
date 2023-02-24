import styled from "styled-components";

import {
  color_white,
  color_very_dark_cyan,
  color_light_grayish_cyan,
  color_grayish_cyan,
  color_strong_cyan,
  color_dark_grayish_cyan,
} from "../styles/variables";

export const Container = styled.div`
  width: 50vw;

  background-color: ${color_white};
  border-radius: 2rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  padding: 4rem;
  display: flex;
  column-gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    box-shadow: 0 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export const InputContainer = styled.div`
  flex: 1.1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const InputGroup = styled.div`
  position: relative;
  margin-bottom: 2rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    color: ${color_dark_grayish_cyan};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: none;
  background: url(${(props) => props.icon}) no-repeat scroll 12px 12px;
  // padding-left: 30px;
  text-align: right;
  font-size: 1.7rem;
  font-weight: bold;
  color: ${color_very_dark_cyan};
  font-family: "Space Mono", monospace;
  transition: all 0.2s;

  &:focus {
    outline: 2px solid ${color_strong_cyan};
  }

  &::-webkit-input-placeholder {
    color: ${color_grayish_cyan};
    font-size: 1.7rem;
    font-weight: bold;
  }

  &[aria-invalid="true"] {
    outline: 2px solid orangered;
  }

  &[aria-invalid="true"] ~ span {
    opacity: 1;
    transform: translateY(0);
  }

  &[aria-invalid="false"] ~ span {
    display: 0;
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  top: 4px;
  right: 0px;
  color: orangered;
  opacity: 0;
  transform: translateY(3px);
  transition: all 0.2s;
`;

export const SelectTip = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  p {
    color: ${color_dark_grayish_cyan};
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

  span {
    background-color: ${(props) =>
      props.changeColor ? color_grayish_cyan : color_very_dark_cyan};
    color: ${color_light_grayish_cyan};
    padding: 0.3rem;
    text-align: center;
    font-size: 2rem;
    border-radius: 3px;
    cursor: pointer;
    text-decoration: none;

    transition: all 0.2s;

    &:hover {
      background-color: ${color_strong_cyan};
      color: ${color_very_dark_cyan};
    }
  }

  input {
    max-width: 10rem;
    border: none;
    font-size: 1.8rem;
    text-align: right;
    color: ${color_grayish_cyan};
    font-weight: bold;

    &:focus {
      outline: 2px solid ${color_strong_cyan};
      border-radius: 2px;
    }

    &::-webkit-input-placeholder {
      color: ${color_dark_grayish_cyan};
      text-align: center;
      font-weigth: bold;
    }
  }
`;

export const OutputContainer = styled.div`
  flex: 0.9;
  background-color: ${color_very_dark_cyan};
  border-radius: 1.5rem;
  padding: 3rem;

  display: flex;
  flex-direction: column;
`;

export const AmountHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const Title = styled.p`
  color: ${color_grayish_cyan};
  span {
    color: ${color_light_grayish_cyan};
    font-size: 1.2rem;
  }
`;

export const Amount = styled.p`
  font-size: 4rem;
  color: ${color_strong_cyan};
`;
