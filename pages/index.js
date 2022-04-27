import Head from 'next/head'
import {Text, Card} from '@traefiklabs/faency'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1 >
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Card>
          <Text>I am using Faency</Text>
        </Card>

      </main>

    </div>
  )
}
