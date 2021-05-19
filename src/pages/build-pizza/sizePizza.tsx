import Head from "next/head";
import styles from "./buildpizza.module.scss";
import { BiCheck } from "react-icons/bi";
import { GetStaticProps } from "next";
import { api } from "../../services/api";
import { StepProgress } from "../../components/StepProgress";
import { useRouter } from "next/dist/client/router";
import { usePizza } from "../../context/PizzaContext";
import { ConvertMoney } from "../../utils/converMoney";

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
  const router = useRouter();
  const { setTamanho, sumTotal } = usePizza();

  const addPizzaSize = (size: string, price: number) => {
    sumTotal(price);
    setTamanho(size);
    router.push("/build-pizza/fillingPizza");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Tamanho Pizza | StoomPizza</title>
      </Head>
      <div className={styles.content}>
        <h1>Selecione o tamanho da Pizza</h1>
        <ul>
          {sizes.map((size) => (
            <li key={size.id}>
              <div className={styles.modal}>
                <img src={size.img} alt={size.title} />
                <div className={styles.description}>
                  <h2>{size.title}</h2>
                  <p>{size.description}</p>
                  <div className={styles.price}>
                    <strong>{ConvertMoney(size.price)}</strong>
                    <button
                      onClick={() => addPizzaSize(size.title, size.price)}
                    >
                      Escolher <BiCheck size={30} />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <StepProgress active={2} />
    </div>
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
