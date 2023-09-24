import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
  max-width: 24rem; /* sm:max-w-md */
  width: 100%; /* sm:w-full */
  border: 2px solid navajowhite;
  border-radius: 10px;
`;

export const FormContainer = styled.div`
  background-color: white;
  padding: 1rem; /* px-4 py-8 */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* shadow */
  border-radius: 0.375rem; /* sm:round-lg */
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* space-y-6 */
`;

export const Message = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem; /* gap-2 */
  font-size: 0.875rem; /* text-sm */
  margin-top: 1.5rem; /* mt-6 */
  padding: 0.25rem; /* px-2 */
  color: #6b7280; /* text-gray-500 */
`;

export const MessageLink = styled.div`
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
    color: #1f2937; /* Change color on hover */
  }
`;
