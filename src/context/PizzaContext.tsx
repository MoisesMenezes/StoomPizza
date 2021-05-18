import { createContext, ReactNode, useContext, useState } from "react";

interface PizzaContextProps {
  children: ReactNode;
}

interface pizzaProps {
  massa: string;
  recheio: string;
  tamanho: string;
}

export const PizzaContext = createContext({});

export const usePizza = () => {
  return useContext(PizzaContext);
}

export function PizzaContextProvider({children}:PizzaContextProps ) {
  const [pizza, setPizza] = useState<pizzaProps>({massa: "", recheio: "", tamanho: ""});

  return (
    <PizzaContext.Provider value={{pizza: "PIZZA media"}}>
      {children}
    </PizzaContext.Provider>
  )
}