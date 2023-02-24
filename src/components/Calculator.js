import React, { useEffect, useState, useRef } from "react";
import Button from "./Button";

import {
  Container,
  InputContainer,
  OutputContainer,
  AmountHolder,
  Title,
  Amount,
  InputGroup,
  SelectTip,
  Grid,
  Input,
  ErrorMessage,
} from "./Calculator.styles";

import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";
import { NavLink } from "react-router-dom";

import { color_dark_grayish_cyan } from "../styles/variables";

const Calculator = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const [billError, setBillError] = useState(false);
  const [peopleError, setPeopleError] = useState(false);

  const handleBillChange = (e) => {
    if (e.target.value == 0) {
      setBillError(true);
      return;
    }
    setBill(Number(e.target.value));
    setBillError(false);
  };

  const handleTipChange = (e) => {
    setTip(Number(e.target.value));
  };

  const handlePeopleChange = (e) => {
    if (e.target.value == 0) {
      setPeopleError(true);
      return;
    }
    setNumberOfPeople(Number(e.target.value));
    setPeopleError(false);
  };

  const handleTipClick = (amount) => {
    setTip(amount);
  };

  useEffect(() => {
    const tipPerPerson = (tip * bill) / 100 / numberOfPeople;
    const billPerPerson = bill / numberOfPeople + tipPerPerson;
    setTipAmount(tipPerPerson);
    setTotal(billPerPerson);
  }, [bill, tip, numberOfPeople]);

  const handleReset = () => {
    setBill(0);
    setTip(0);
    setNumberOfPeople(0);
    setTipAmount(0);
    setTotal(0);
  };

  return (
    <Container>
      <InputContainer>
        <InputGroup>
          <label htmlFor="bill">Bill</label>
          <Input
            id="bill"
            name="bill"
            placeholder="0"
            icon={dollar}
            onChange={handleBillChange}
            aria-invalid={billError}
          />
          <ErrorMessage error={billError}>Can't be zero</ErrorMessage>
        </InputGroup>
        <SelectTip>
          <p>Select tip %</p>
          <Grid>
            <span onClick={() => handleTipClick(5)}>5%</span>
            <span onClick={() => handleTipClick(10)}>10%</span>
            <span onClick={() => handleTipClick(15)}>15%</span>
            <span onClick={() => handleTipClick(25)}>25%</span>
            <span onClick={() => handleTipClick(50)}>50%</span>
            <input
              placeholder="Custom"
              width="auto"
              name="tip"
              onChange={handleTipChange}
            />
          </Grid>
        </SelectTip>
        <InputGroup>
          <label htmlFor="people">Number of people</label>
          <Input
            id="people"
            name="numberOfPeople"
            placeholder="0"
            icon={person}
            onChange={handlePeopleChange}
            aria-invalid={peopleError}
          />
          <ErrorMessage error={peopleError}>Can't be zero</ErrorMessage>
        </InputGroup>
      </InputContainer>
      <OutputContainer>
        <AmountHolder>
          <Title>
            <span>Tip Amount </span>
            <br />/ person
          </Title>
          <Amount>${tipAmount ? tipAmount.toFixed(2) : "0.00"}</Amount>
        </AmountHolder>
        <AmountHolder>
          <Title>
            <span>Total </span>
            <br />/ person
          </Title>
          <Amount>${total ? total.toFixed(2) : "0.00"}</Amount>
        </AmountHolder>

        <Button handleReset={handleReset}>RESET</Button>
      </OutputContainer>
    </Container>
  );
};

export default Calculator;
