import { createContext, ReactNode, useContext, useState } from "react";

interface pizzaProps {
  dough?: string;
  ingredients?: string;
  size?: string;
  points?: number;
  img?: string;
  price?: number;
}
interface pizzaContexData {
  pizza: pizzaProps;
  total: number;
  setMassa: (massa: string) => void;
  setTamanho: (size: string) => void;
  setIngredients: (ingredients: string) => void;
  setImg: (img: string) => void;
  handlePizza: (pizza: pizzaProps) => void;
  setPrice: (price: number) => void;
  sumTotal: (value: number) => void;
}

interface PizzaContextProps {
  children: ReactNode;
}

export const PizzaContext = createContext({} as pizzaContexData);

export const usePizza = () => {
  return useContext(PizzaContext);
};

export function PizzaContextProvider({ children }: PizzaContextProps) {
  const [pizza, setPizza] = useState<pizzaProps>() 
  const [total, setTotal] = useState(0);


  function sumTotal(number:number){
    const sum = total + number;
    setTotal(sum);
  }

  function setPrice(price: number){
    const sum = price + pizza.price;
    setPizza({...pizza, price: sum })
  }

  function setMassa(dough: string) {
    setPizza({ ...pizza, dough });
  }

  function setTamanho(size: string) {
    setPizza({ ...pizza, size });
  }

  function setImg(img: string) {
    setPizza({ ...pizza, img });
  }

  function setIngredients(ingredients: string) {
    setPizza({ ...pizza, ingredients });
  }

  function handlePizza(item: pizzaProps) {
    // setPrice(item.price);
    setPizza(item);
  }

  return (
    <PizzaContext.Provider
      value={{ pizza, setMassa, setTamanho, setImg, setIngredients, handlePizza,setPrice,sumTotal, total }}
    >
      {children}
    </PizzaContext.Provider>
  );
}
