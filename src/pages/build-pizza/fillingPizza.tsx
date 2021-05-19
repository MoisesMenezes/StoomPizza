import styles from "./buildpizza.module.scss";
import { BiCheck } from "react-icons/bi";
import { GetStaticProps } from "next";
import { api } from "../../services/api";
import { StepProgress } from "../../components/StepProgress";
import { useRouter } from "next/dist/client/router";
import { usePizza } from "../../context/PizzaContext";
import { ConvertMoney } from "../../utils/converMoney";
import Head from "next/head";

interface fillingProps {
  id: number;
  title: string;
  price: number;
  img: string;
  description: string;
}

interface fillingPizzaProps {
  filling: fillingProps[];
}

export default function fillingPizza({ filling }: fillingPizzaProps) {
  const { setIngredients, sumTotal, setImg } = usePizza();
  const router = useRouter();

  const addFilling = async (
    ingredients: string,
    price: number,
    img: string
  ) => {
    setIngredients(ingredients);
    sumTotal(price);
    setImg(img);

    router.push("/build-pizza/finishPizza");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Recheio Pizza | StoomPizza</title>
      </Head>
      <div className={styles.contentFilling}>
        <h1>Selecione o Recheio da Pizza</h1>
        <ul>
          {filling.map((item) => (
            <li key={item.id}>
              <div className={styles.modal}>
                <img src={item.img} alt={item.title} />
                <div className={styles.description}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <div className={styles.price}>
                    <strong>{ConvertMoney(item.price)}</strong>
                    <button
                      onClick={() =>
                        addFilling(item.description, item.price, item.img)
                      }
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
      <StepProgress active={3} />
    </div>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("/ingredients");

  return {
    props: { filling: data.recheios },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
