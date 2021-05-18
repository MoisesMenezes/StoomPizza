import styles from "./styles.module.scss";
import { BiCheck } from "react-icons/bi";
import { usePizza } from "../../context/PizzaContext";
import { useRouter } from "next/dist/client/router";

interface dayPizzaProps {
  dayPizza: {
    img: string;
    ingredients: string;
    dough: string;
    points: number;
    price: number;
    tittle: string;
  };
}

export function DayPizza({ dayPizza }: dayPizzaProps) {

  const {handlePizza,sumTotal} = usePizza();
  const router = useRouter();

  const handleAddPizza = () => {
    sumTotal(dayPizza.price)
    handlePizza(dayPizza);
    router.push("/build-pizza/finishPizza");
  }

  return (
    <div className={styles.modal}>
      <div className={styles.containerStar}>
        <div className={styles.star}>
          <p>
            <strong>{dayPizza.points}</strong> pontos
          </p>
        </div>
      </div>
      <h3>Pizza do dia:</h3>

      <div className={styles.containerPizza}>
        <img src={dayPizza.img} alt="pizza" />

        <div className={styles.descriptionPizza}>
          <h3>{dayPizza.tittle}</h3>
          <strong>Massa</strong>
          <p>{dayPizza.dough}</p>
          <strong>Ingredientes</strong>
          <p>{dayPizza.ingredients}</p>
          <div className={styles.pricePizza}>
            <p>R$ {dayPizza.price}</p>

            <button onClick={handleAddPizza}>
              quero!
              <BiCheck color="#fff" size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
