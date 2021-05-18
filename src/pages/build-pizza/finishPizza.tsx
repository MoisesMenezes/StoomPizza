import { Header } from "../../components/Header";
import { StepProgress } from "../../components/StepProgress";
import styles from "./finishpizza.module.scss";

export default function FinishPizza() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.modal}>
            <img
              src="https://images.unsplash.com/photo-1589187151053-5ec8818e661b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
              alt=""
            />
            <div className={styles.description}>
              <h3>Massa</h3>
              <p>Siciliana</p>
              <h3>Tamanho</h3>
              <p>Grande</p>
              <h3>Ingredientes</h3>
              <p>Mussarela</p>
              <h3>Total</h3>
              <strong>R$30,00</strong>
              <button> Finalizar Pedido</button>
            </div>
          </div>
        </div>
        <StepProgress active={4} />
      </div>
    </>
  );
}
