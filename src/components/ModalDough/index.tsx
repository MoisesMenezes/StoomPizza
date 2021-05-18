import styles from "./styles.module.scss";
import { ImPlay3 } from "react-icons/im";

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

  console.log("AAA", massas)
  return (
    <div className={styles.container}>
      <h1>Ou monte sua pizza</h1>
      <div className={styles.steps}>
        <p>Selecione sua massa</p>
        <strong>0 / 3</strong>
      </div>
      <ul>
        {massas.map((massa) => (
          <li key={massa.id}>
            <div className={styles.modalDough}>
              <img
                src={massa.img}
                alt=""
              />
              <div className={styles.descriptionDough}>
                <div className={styles.checked}>
                  <h2>{massa.title}</h2>
                  <input
                    type="radio"
                    id="nova-iorquina"
                    name="dough"
                    value="nova-iorquina"
                  />
                </div>
                <p>{massa.description}</p>
                <strong>R$ {massa.price}</strong>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <button>
        montar meu pedido
        <ImPlay3 />
      </button>
    </div>
  );
}
