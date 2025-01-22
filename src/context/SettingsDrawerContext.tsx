import React, { createContext, useState, useContext, ReactNode } from "react";

// Type for the context value
interface DrawerContextType {
  isSettingsDrawerOpen: boolean;
  handleToggleSettingsDrawer: () => void;
}

// Create context with a default value of undefined
const SettingsDrawerContext = createContext<DrawerContextType | undefined>(
  undefined
);

// Create a provider to manage the drawer state
interface DrawerProviderProps {
  children: ReactNode;
}

export const SettingsDrawerProvider: React.FC<DrawerProviderProps> = ({
  children,
}) => {
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] =
    useState<boolean>(false);

  const handleToggleSettingsDrawer = () => {
    console.log("Toggling drawer...");
    console.log(isSettingsDrawerOpen);
    setIsSettingsDrawerOpen((prev: boolean) => !prev);
  };

  // const handleSettingsToggleDrawer = (newOpen: boolean) => () => {
  //   setOpenSettings(newOpen);
  // };

  return (
    <SettingsDrawerContext.Provider
      value={{ isSettingsDrawerOpen, handleToggleSettingsDrawer }}
    >
      {children}
    </SettingsDrawerContext.Provider>
  );
};

// Custom hook to access the Drawer context
export const useSettingsDrawer = (): DrawerContextType => {
  const context = useContext(SettingsDrawerContext);
  if (!context) {
    console.error("SettingsDrawerContext is not provided properly!");
    throw new Error(
      "useSettingsDrawer must be used within a SettingsDrawerProvider"
    );
  }
  return context;
};
