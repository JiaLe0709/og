import Head from "next/head"
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jia Le&apos;s Open Graph Generator</title>
      </Head>
      <Component {...pageProps} />
    </>

  )
}
