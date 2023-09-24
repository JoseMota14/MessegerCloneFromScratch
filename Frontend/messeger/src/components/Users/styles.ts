import { styled } from "styled-components";

export const Container = styled.div`
  display: none;

  @media (min-width: 1024px) {
    position: fixed;
    left: 600px;
    top: 0px;
    padding-left: 80px;
    display: block;
    height: 100vh;
  }
`;

export const Box = styled.div`
  padding-inline: 4px;
  padding-top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const Text = styled.div`
  top: 0px;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const H3 = styled.div`
  top: 0px;
  font-weight: 600;
  color: gray;
`;
