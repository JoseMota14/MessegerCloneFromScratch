import clsx from "clsx";
import { Clicked } from "./styles";

type ButtonType = "button" | "submit" | "reset" | undefined;

interface ButtonProps {
  type: ButtonType;
  fullWidth?: boolean;
  children?: React.ReactNode;
  danger?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  disabled,
  onClick,
  children,
  fullWidth,
  danger,
}: ButtonProps) {
  return (
    <>
      <Clicked
        className={clsx(disabled && "disabled", danger ? "danger" : "")}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </Clicked>
    </>
  );
}
