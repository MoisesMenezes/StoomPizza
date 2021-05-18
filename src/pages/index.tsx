import Head from 'next/head'
import {Header} from "../components/Header";
import { DayPizza} from "../components/DayPizza";
import { ModalDough } from "../components/ModalDough";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Stoom</title>
      </Head>
      <Header />
      {/* <DayPizza /> */}
      <ModalDough />
    </div>
  )
}
