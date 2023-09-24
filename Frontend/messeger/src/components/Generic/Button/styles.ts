import styled from "styled-components";
import { ClickedProps } from "../../../models/stylesInterfaces";

export const Clicked = styled.button<ClickedProps>`
  font-style: normal;
  width: 100%;
  cursor: pointer;
  border: 2px solid navajowhite;
  border-radius: 2.7rem;
  padding: 0.5rem 1rem;

  &:active {
    transform: translateY(0);
  }
  &:hover {
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid red;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.danger {
    background-color: #ef4444;
    &:hover {
      background-color: #dc2626;
      outline: 2px solid #dc2626;
    }
  }

  &:not(.danger) {
    color: black;
    &:hover {
      background-color: gray;
      outline: 2px solid navajowhite;
    }
  }
`;
