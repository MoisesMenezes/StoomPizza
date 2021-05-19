import styles from "./styles.module.scss";
import { ImPlay3 } from "react-icons/im";
import { useRouter } from "next/dist/client/router";
import { usePizza } from "../../context/PizzaContext";
import { ConvertMoney } from "../../utils/converMoney";

interface Massas {
  id: number;
  title: string;
  price: number;
  img: string;
  description: string;
}

interface ModalDoughProps {
  ingredients: {
    massas: Massas[];
  };
}

export function ModalDough({ ingredients: { massas } }: ModalDoughProps) {
  const { setMassa,sumTotal} = usePizza();
  const router = useRouter();

  const addDough = (dough: string,price: number) => {
    sumTotal(price);
    setMassa(dough);

    router.push("/build-pizza/sizePizza");
  }

  return (
    <div className={styles.container}>
      <h1>Ou monte sua pizza</h1>
      <div className={styles.steps}>
        <p>Selecione sua massa</p>
        <strong>1 / 4</strong>
      </div>
      <ul>
        {massas.map((massa) => (
          <li key={massa.id}>
            <div className={styles.modalDough}>
              <img src={massa.img} alt="" />
              <div className={styles.descriptionDough}>
                <div className={styles.checked}>
                  <h2>Massa {massa.title}</h2>
                </div>
                <p>{massa.description}</p>
                <div className={styles.price}>
                  <strong>{ConvertMoney(massa.price)}</strong>
                  <button onClick={() => addDough(massa.title, massa.price)}>
                    montar meu pedido
                    <ImPlay3 />
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
