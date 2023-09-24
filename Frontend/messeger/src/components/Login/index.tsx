import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { Button } from "../Generic/Button";
import { Input } from "../Generic/Input";
import {
  FormContainer,
  Message,
  MessageLink,
  StyledForm,
  Wrapper,
} from "./styles";

type Variant = "LOGIN" | "REGISTER";

export default function Login() {
  const [isLoading, setIsLoging] = useState<boolean>(false);
  const [type, setType] = useState<Variant>("LOGIN");

  const { signIn } = useAuth();

  const changeType = useCallback(() => {
    if (type === "LOGIN") {
      setType("REGISTER");
    } else {
      setType("LOGIN");
    }
  }, [type]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoging(true);
    if (type === "REGISTER") {
    }
    if (type === "LOGIN") {
      try {
        const ret = await signIn(data.email, data.password);
        if (!ret) {
          toast.error("Error in login");
        } else {
          toast.success("Login successful");
        }
      } catch (err) {
        toast.error("Error in login");
      }
      setIsLoging(false);
    }
  };

  return (
    <Wrapper>
      <h2 style={{ textAlign: "center" }}>Messenger</h2>
      <FormContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          {type === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              disable={isLoading}
              errors={errors}
              register={register}
            />
          )}
          <Input
            id="email"
            label="Email"
            type="Email"
            disable={isLoading}
            errors={errors}
            register={register}
          />
          <Input
            id="password"
            label="Password"
            type="Password"
            disable={isLoading}
            errors={errors}
            register={register}
          />
          <Button disabled={isLoading} type="submit">
            {type === "LOGIN" ? "Sign in" : "Register"}
          </Button>
        </StyledForm>
        <Message>
          {type === "LOGIN" ? "New to Messenger?" : "Already have an account?"}
          <MessageLink onClick={changeType}>
            {type === "LOGIN" ? "Create an account" : "Login"}
          </MessageLink>
        </Message>
      </FormContainer>
    </Wrapper>
  );
}
