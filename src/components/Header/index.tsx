import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/logo.svg" alt="" />
        <div>
          <h1>PizzaStoom</h1>
          <strong>é Pizza, sim.</strong>
        </div>
      </div>
    </header>
  );
}
