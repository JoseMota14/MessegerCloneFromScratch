import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 4px;
  padding: 0.5em 0rem;

  div {
    width: 96%;
    padding-inline: 2%;
  }

  span {
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1rem;
    opacity: 0.5;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    background-color: lightgray 100;
    border: 1px solid navajowhite;
    border-radius: 3px;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  &:last-child {
    margin-bottom: 1.5rem;
  }
`;
