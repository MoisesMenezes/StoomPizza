import { createContext, ReactNode, useContext, useEffect, useState } from "react";

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
  points: number;
  imgPizza: string;
  setMassa: (massa: string) => void;
  setTamanho: (size: string) => void;
  setIngredients: (ingredients: string) => void;
  setImg: (img: string) => void;
  handlePizza: (pizza: pizzaProps) => void;
  setPrice: (price: number) => void;
  sumTotal: (value: number) => void;
  sumPoints: (value: number) => void;
  clearProperties: () => void;
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
  const [points, setPoints] = useState<number>(0);
  const [imgPizza, setImgPizza] = useState("");


  useEffect(() => {
    const points = localStorage.getItem("@points")
    setPoints(Number(points));
  },[])

  function sumPoints(value: number){
    const sum = value + points;
    
    localStorage.setItem("@points", String(sum));
    setPoints(sum);
  }

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
    setImgPizza(img);
  }

  function setIngredients(ingredients: string) {
    setPizza({ ...pizza, ingredients });
  }

  function handlePizza(item: pizzaProps) {
    setPizza(item);
  }

  function clearProperties(){
    setTotal(0);
    setImgPizza("");
    setPizza({} as pizzaProps);
  }

  return (
    <PizzaContext.Provider
      value={{ pizza, setMassa, setTamanho, setImg, setIngredients, handlePizza,setPrice,sumTotal, total,sumPoints, points,imgPizza, clearProperties }}
    >
      {children}
    </PizzaContext.Provider>
  );
}
