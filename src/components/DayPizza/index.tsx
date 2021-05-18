import styles from "./styles.module.scss";
import { BiCheck } from "react-icons/bi";

export function DayPizza() {
  return (
    <div className={styles.modal}>
      <div className={styles.containerStar}>
        <div className={styles.star}>
          <p>
            <strong>50</strong> pontos
          </p>
        </div>
      </div>
      <h3>Pizza do dia:</h3>

      <div className={styles.containerPizza}>
        <img
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="pizza"
        />

        <div className={styles.descriptionPizza}>
          <h3>Pizza Napolitana</h3>
          <strong>Massa</strong>
          <p>Napolitana</p>
          <strong>Ingredientes</strong>
          <p>mussarela, peito de peru, palmito, parmesão, orégano.</p>
          <div className={styles.pricePizza}>
            <p>R$ 37,00</p>

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
