import { createContext, useEffect, useState } from "react";

interface iNavigationContext {
  currentPath: string;
  navigate: (to: string) => void;
}

const NavigationContext = createContext({} as iNavigationContext);

export interface iNavigationProvider {
  children: React.ReactNode;
}

function NavigationProvider({ children }: iNavigationProvider) {
  const [currentPath, setCurrentPath] = useState<string>({} as string);

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationContext, NavigationProvider };
