import { Header } from "../../components/Header";
import styles from "./buildpizza.module.scss";
import { BiCheck } from "react-icons/bi";
import { GetStaticProps } from "next";
import { api } from "../../services/api";
import { StepProgress } from "../../components/StepProgress";

interface sizeProps {
  id: number;
  title: string;
  price: number;
  img: string;
  description: string;
}

interface sizePizzaProps {
  sizes: sizeProps[];
}

export default function sizePizza({ sizes }: sizePizzaProps) {

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Selecione o tamanho da Pizza</h1>
          <ul>
            {sizes.map((size) => (
              <li key={size.id}>
                <div className={styles.modal}>
                  <img
                    src={size.img}
                    alt={size.title}
                  />
                  <div className={styles.description}>
                    <h2>{size.title}</h2>
                    <p>{size.description}</p>
                    <div className={styles.price}>
                      <strong>R${size.price}</strong>
                      <button>
                        Escolher <BiCheck size={30} />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
          <StepProgress active={2}/>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("/ingredients");

  const pizzaSize = data.tamanhos;

  return {
    props: { sizes: pizzaSize },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};