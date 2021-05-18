import { Header } from "../../components/Header";
import styles from  "./buildpizza.module.scss";
import { BiCheck } from "react-icons/bi";
import { GetStaticProps } from "next";
import { api } from "../../services/api";
import { StepProgress } from "../../components/StepProgress";


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

export default function fillingPizza({filling}: fillingPizzaProps) {

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.contentFilling}>
          <h1>Selecione o Recheio da Pizza</h1>
          <ul>
            {filling.map((size) => (
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
      <StepProgress active={3}/>
      </div>

    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("/ingredients");


  return {
    props: { filling: data.recheios },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};