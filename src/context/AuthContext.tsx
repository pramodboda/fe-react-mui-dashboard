import React, { createContext, useState, useContext, ReactNode } from "react";

// Type for the user object
interface User {
  id: string;
  name: string;
  email: string;
}

// Type for the context state
interface AuthContextType {
  authData: {
    isAuthenticated: boolean;
    user: User | null;
  };
  login: (user: User) => void;
  logout: () => void;
}

// Create the context with an initial value of undefined, to be defined later
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component props
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider component with typing
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthContextType["authData"]>({
    isAuthenticated: false,
    user: null,
  });

  const login = (user: User) => {
    setAuthData({ isAuthenticated: true, user });
  };

  const logout = () => {
    setAuthData({ isAuthenticated: false, user: null });
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
