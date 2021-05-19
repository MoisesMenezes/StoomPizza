import Head from "next/head";
import { Header } from "../components/Header";
import { DayPizza } from "../components/DayPizza";
import { ModalDough } from "../components/ModalDough";
import { GetStaticProps } from "next";
import { api } from "../services/api";
import styles from "./home.module.scss";

export default function Home({ igredients,dayPizza }) {
  return (
    <>
      <Head>
        <title>Pizza Stoom</title>
      </Head>

      <Header />
      <div className={styles.homepage}>
        <DayPizza dayPizza={dayPizza} />
        <ModalDough ingredients={igredients} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await api.get("/ingredients");
  const response = await api.get("/pizzas");

  const randomNumber = Math.floor(Math.random() * 3);
  const randomPizza = response.data[randomNumber];

  return {
    props: { igredients: data, dayPizza: randomPizza },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
