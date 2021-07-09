import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <a href="https://ask.apuem.com">ask.apuem</a> API!
        </h1>

        <p className={styles.description}>
          For now this is just for verified Developers.
        </p>

        <div className={styles.grid}>
          <a href="https://ask.apuem.com" className={styles.card}>
            <h3>Answer some questions &rarr;</h3>
            <p>Go to ask.apuem and learn something new.</p>
          </a>

          <a href="https://github.com/apuem" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about apuem and what we do!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/apuem"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="https://a-static.github.io/a.png" alt="Apuem Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
