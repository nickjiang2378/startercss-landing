import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>StarterCSS</title>
        <meta name="description" content="Starter code for rapid development with CSS" />
        <link rel="icon" href="/starter_css.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Rapidly style frontends with <span className={styles.gradientHighlight}>StarterCSS</span>
        </h1>

        <p className={styles.description}>
          StarterCSS is a chrome extension for web developers 
          to effortlessly implement CSS layouts, effects, and designs without parsing through documentation. 
        </p>
        
        <p className={styles.description}>
          Picking up CSS can be challenging, and StarterCSS saves you the 
          time of pouring through tutorials with an intuitive dashboard to visualize and add common CSS features. 
          Make your changes at a few clicks, and understand why they worked.
        </p>

        {/*<div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>*/}
      </main>
    </div>
  )
}
