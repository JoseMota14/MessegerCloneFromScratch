import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Container } from "./styles";

interface Props {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  disable: boolean;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
}

export function Input({
  label,
  id,
  type,
  required,
  disable,
  errors,
  register,
}: Props) {
  return (
    <Container>
      <div>
        <span>{label}</span>
        <input
          id={id}
          type={type}
          required={required}
          {...register(id, { required: required })}
        />
      </div>
    </Container>
  );
}
