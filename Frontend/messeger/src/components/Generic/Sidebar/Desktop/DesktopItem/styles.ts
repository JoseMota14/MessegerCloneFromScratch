import { styled } from "styled-components";
import { LinkProps } from "../../../../../models/stylesInterfaces";

export const LinkContainer = styled.a<LinkProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s, background-color 0.2s;
  &:hover {
    color: #000;
    background-color: #f3f4f6;
  }
`;
