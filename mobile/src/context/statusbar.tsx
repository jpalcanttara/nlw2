import React, { createContext, useState, useContext } from "react";
import { StatusBarProps } from "expo-status-bar";

interface StatusBarContextProps {
  props: StatusBarProps;
  setProps(props: StatusBarProps): void;
}

const StatusBarContext = createContext<StatusBarContextProps>(
  {} as StatusBarContextProps
);

export const StatusBarProvider: React.FC = ({ children }) => {
  const [props, setProps] = useState<StatusBarProps>({
    style: "light",
  });

  return (
    <StatusBarContext.Provider value={{ props, setProps }}>
      {children}
    </StatusBarContext.Provider>
  );
};

export const useStatusBar = () => {
  const context = useContext(StatusBarContext);

  return context;
};
