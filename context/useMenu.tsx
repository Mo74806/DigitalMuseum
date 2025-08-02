import { createContext, useContext, useEffect, useState } from "react";

// type option = string;
type menuContextType = {
  selectedOption: string;
  changeSelectedOption: (value: string) => void;
};

const MenuContext = createContext<menuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [selectedOption, setSelectedOption] = useState<string>("All Objects");

  const changeSelectedOption = (option: string) => setSelectedOption(option);

  return (
    <MenuContext value={{ selectedOption, changeSelectedOption }}>
      {children}
    </MenuContext>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenu must be used within a ThemeProvider");
  return context;
}
