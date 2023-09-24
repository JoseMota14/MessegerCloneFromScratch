import { createContext, useState } from "react";
import { postData } from "../hooks/useFetch";

interface iAuthContext {
  user: any;
  setUser: any;
  token: any;
  setToken: any;
  signOut(): void;
  signIn(email: string, password: string): Promise<boolean>;
  auth: boolean;
}

const AuthContext = createContext({} as iAuthContext);

export interface iAuthProvider {
  children: React.ReactNode;
}

function AuthProvider({ children }: iAuthProvider) {
  const [user, setUser] = useState<string | undefined>();
  const [token, setToken] = useState<string>("");

  function signOut() {
    setUser(undefined);
    setToken("");
  }

  async function signIn(email: string, password: string) {
    try {
      const response = await postData("/people/login", { email, password });

      if (response.token) {
        setUser(response.username);
        setToken(response.token);
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, signOut, signIn, auth: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
