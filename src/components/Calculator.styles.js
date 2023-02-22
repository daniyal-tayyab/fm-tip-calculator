import styled from "styled-components";
import dollar from "../images/icon-dollar.svg";

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
  margin-bottom: 2rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
    color: ${color_dark_grayish_cyan};
  }

  input {
    width: 100%;
    padding: 0.8rem;
    border: none;
    background: url(${dollar}) no-repeat scroll 12px 12px;
    // padding-left: 30px;
    text-align: right;
    font-size: 1.7rem;
    font-weight: bold;
    color: ${color_very_dark_cyan};
    font-family: "Space Mono", monospace;

    &:focus {
      outline: 2px solid ${color_strong_cyan};
      border-radius: 2px;
    }

    &::-webkit-input-placeholder {
      color: ${color_grayish_cyan};
      font-size: 1.7rem;
      font-weight: bold;
    }
  }
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
    background-color: ${color_very_dark_cyan};
    color: ${color_light_grayish_cyan};
    padding: 0.3rem;
    text-align: center;
    font-size: 2rem;
    border-radius: 3px;
    cursor: pointer;

    transition: all 0.2s;

    &:hover {
      background-color: ${color_strong_cyan};
      color: ${color_very_dark_cyan};
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
