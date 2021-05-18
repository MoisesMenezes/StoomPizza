import Head from "next/head";
import { Header } from "../components/Header";
import { DayPizza } from "../components/DayPizza";
import { ModalDough } from "../components/ModalDough";
import { GetStaticProps } from "next";
import { api } from "../services/api";
import styles from "./home.module.scss";
import { usePizza } from "../context/PizzaContext";

export default function Home({ igredients }) {
  const teste = usePizza();
  console.log("LOLO", teste);

  return (
    <>
      <Head>
        <title>Pizza Stoom</title>
      </Head>

      <Header />
      <div className={styles.homepage}>
        <DayPizza />
        <ModalDough ingredients={igredients} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await api.get("/ingredients");

  const igredients = data;

  return {
    props: { igredients },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
