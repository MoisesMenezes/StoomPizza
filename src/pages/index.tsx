import Head from 'next/head'
import {Header} from "../components/Header";
import { DayPizza} from "../components/DayPizza";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Stoom</title>
      </Head>
      <Header />
      <DayPizza />
    </div>
  )
}
