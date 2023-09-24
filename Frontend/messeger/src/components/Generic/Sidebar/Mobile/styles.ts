import { styled } from "styled-components";

export const MobileContainer = styled.div`
  position: fixed;
  justify-content: space-between;
  width: 100%;
  bottom: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  background-color: white;
  border-top: 1px solid #e5e7eb;

  @media (min-width: 1024px) {
    display: none;
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
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
`;
