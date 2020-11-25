import Head from 'next/head'
import { Nav, Welcome, SkillsChartSection } from 'src/sections';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.Container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.Main}>
        <Nav />
        <Welcome />
        <SkillsChartSection />
      </main>

      <footer className={styles.Footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
