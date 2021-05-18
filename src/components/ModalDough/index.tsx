import styles from "./styles.module.scss";
import { ImPlay3} from "react-icons/im";

export function ModalDough() {
  return (
    <div className={styles.container}>
      <h1>Ou monte sua pizza</h1>
      <div className={styles.steps}>
        <p>Selecione sua massa</p>
        <strong>0 / 3</strong>
      </div>
      <ul>
        <li>
          <div className={styles.modalDough}>
            <img
              src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG91Z2glMjBwaXp6YXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className={styles.descriptionDough}>
              <div className={styles.checked}>
              <h2>Nova-Iorquina</h2>
              <input type="radio" id="nova-iorquina" name="dough" value="nova-iorquina" />
              </div>
              <p>
                Frequentemente vendida em fatias grandes e largas, a pizza ao
                estilo de Nova york tem uma massas mais grossa e é levemente
                crocante por fora.
              </p>
              <strong>R$ 10,00</strong>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.modalDough}>
            <img
              src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG91Z2glMjBwaXp6YXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className={styles.descriptionDough}>
              <div className={styles.checked}>
              <h2>Nova-Iorquina</h2>
              <input type="radio" id="siciliana" name="dough" value="siciliana" />
              </div>
              <p>
                Frequentemente vendida em fatias grandes e largas, a pizza ao
                estilo de Nova york tem uma massas mais grossa e é levemente
                crocante por fora.
              </p>
              <strong>R$ 10,00</strong>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.modalDough}>
            <img
              src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG91Z2glMjBwaXp6YXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className={styles.descriptionDough}>
              <div className={styles.checked}>
              <h2>Nova-Iorquina</h2>
              <input type="radio" id="napolitana" name="dough" value="napolitana" />
              </div>
              <p>
                Frequentemente vendida em fatias grandes e largas, a pizza ao
                estilo de Nova york tem uma massas mais grossa e é levemente
                crocante por fora.
              </p>
              <strong>R$ 10,00</strong>
            </div>
          </div>
        </li>
      </ul>

      <button>
        montar meu pedido
        <ImPlay3  />
      </button>
    </div>
  );
}
