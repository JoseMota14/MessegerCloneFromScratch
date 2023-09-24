import { styled } from "styled-components";

export const Aside = styled.aside`
  position: fixed;
  top: 0px;
  bottom: 0px;
  padding-bottom: 5rem;
  overflow-y: auto;
  border-right: 1px solid grey;
  width: 100%;
  left: 210px;
  display: block;
  @media (min-width: 1024px) {
    padding-bottom: 0px;
    width: 20rem;
    display: block;
  }
`;

export const Padder = styled.div`
  padding-left: 5px;
  padding-right: 5px;
`;

export const Flex = styled.div`
  flex-direction: column;
`;

export const Bold = styled.div`
  font-weight: bold;
  margin-left: 20px;
  padding-top: 2px;
  padding-bottom: 2px;
`;
