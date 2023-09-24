import { styled } from "styled-components";

export const SidebarContainer = styled.div`
  height: 100vh;
`;

export const Main = styled.main`
  height: 100%;
  @media (min-width: 1024px) {
    padding-left: 5rem /* 80px */;
  }
`;
