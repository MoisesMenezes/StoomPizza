import { StepProgress } from "../../components/StepProgress";
import styles from "./finishpizza.module.scss";
import { usePizza } from "../../context/PizzaContext";
import { useRouter } from "next/dist/client/router";
import { ConvertMoney } from "../../utils/converMoney";
import Head from "next/head";

export default function FinishPizza() {
  const { pizza, total, sumPoints, imgPizza, clearProperties } = usePizza();
  const router = useRouter();

  const finishOrder = () => {
    if (!pizza.points) {
      sumPoints(30);
    } else {
      sumPoints(pizza.points);
    }
    clearProperties();
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Finalizar Pedido | StoomPizza</title>
      </Head>
      <div className={styles.content}>
        <div className={styles.modal}>
          <img src={imgPizza} alt="pizza" />
          <div className={styles.description}>
            <h3>Massa</h3>
            <p>{pizza.dough}</p>
            <h3>Tamanho</h3>
            <p>{pizza.size}</p>
            <h3>Ingredientes</h3>
            <p>{pizza.ingredients}</p>
            <h3>Total</h3>
            <strong>{ConvertMoney(total)}</strong>
            <button onClick={finishOrder}> Finalizar Pedido.</button>
          </div>
        </div>
        <p>
          Você ganhara <strong>{pizza.points ? pizza.points : 30}</strong>{" "}
          pontos por finalizar esse pedido.
        </p>
      </div>
      <StepProgress active={4} />
    </div>
  );
}
