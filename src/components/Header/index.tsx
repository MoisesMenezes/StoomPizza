import { usePizza } from "../../context/PizzaContext";
import styles from "./styles.module.scss";

export function Header() {
  const { points } = usePizza();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="" />
          <div>
            <h1>PizzaStoom</h1>
            <h3>é Pizza, sim.</h3>
          </div>
        </div>
        <div className={styles.points}>
          <p>
            StoomPoints
            <br />
            <strong> {points} </strong>
            pontos.
          </p>
        </div>
      </div>
    </header>
  );
}
