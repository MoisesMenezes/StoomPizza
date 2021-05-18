import styles from "./styles.module.scss";
import { BiCheck } from "react-icons/bi";

interface dayPizzaProps {
  pizza: {
    img: string;
    ingredients: string;
    dough: string;
    points:number;
    price: number;
    tittle: string;
  }
}

export function DayPizza({pizza}: dayPizzaProps) {

  return (
    <div className={styles.modal}>
      <div className={styles.containerStar}>
        <div className={styles.star}>
          <p>
            <strong>{pizza.points}</strong> pontos
          </p>
        </div>
      </div>
      <h3>Pizza do dia:</h3>

      <div className={styles.containerPizza}>
        <img
          src={pizza.img}
          alt="pizza"
        />

        <div className={styles.descriptionPizza}>
          <h3>{pizza.tittle}</h3>
          <strong>Massa</strong>
          <p>{pizza.dough}</p>
          <strong>Ingredientes</strong>
          <p>{pizza.ingredients}</p>
          <div className={styles.pricePizza}>
            <p>R$ {pizza.price}</p>
          
            <button>
              quero!
              <BiCheck color="#fff" size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
