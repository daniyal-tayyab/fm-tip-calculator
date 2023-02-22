import React from "react";
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
} from "./Calculator.styles";

const Calculator = () => {
  return (
    <Container>
      <InputContainer>
        <InputGroup>
          <label htmlFor="bill">Bill</label>
          <input id="bill" name="bill" placeholder="0" />
        </InputGroup>
        <SelectTip>
          <p>Select tip %</p>
          <Grid>
            <span>5%</span>
            <span>10%</span>
            <span>15%</span>
            <span>25%</span>
            <span>50%</span>
            <span>Custom</span>
          </Grid>
        </SelectTip>
        <InputGroup>
          <label htmlFor="people">Number of people</label>
          <input id="people" name="people" placeholder="0" />
        </InputGroup>
      </InputContainer>
      <OutputContainer>
        <AmountHolder>
          <Title>
            <span>Tip Amount </span>
            <br />/ person
          </Title>
          <Amount>$0.00</Amount>
        </AmountHolder>
        <AmountHolder>
          <Title>
            <span>Total </span>
            <br />/ person
          </Title>
          <Amount>$0.00</Amount>
        </AmountHolder>

        <Button>RESET</Button>
      </OutputContainer>
    </Container>
  );
};

export default Calculator;
