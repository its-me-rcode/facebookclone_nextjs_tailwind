import Head from 'next/head'
import Header from '../components/Header'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&display=swap" rel="stylesheet"/>
      </Head>

     <Header/>
    </div>
  )
}
