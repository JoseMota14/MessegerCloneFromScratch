import { styled } from "styled-components";

export const DesktopContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    position: fixed;
    left: 0;
    z-index: 40;
    padding-right: 1rem; /* Adjust as needed */
    overflow-y: auto;
    background-color: white;
    border-right: 1px solid #e5e7eb; /* Adjust as needed */
    padding-bottom: 1rem; /* Adjust as needed */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }
`;

// Styled component for the first nav
export const Nav = styled.nav`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Styled component for the ul
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
`;
