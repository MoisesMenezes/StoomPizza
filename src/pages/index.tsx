import Head from 'next/head'
import {Header} from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Stoom</title>
      </Head>
      <Header />
      <h1>OLA</h1>
    </div>
  )
}
