import Head from 'next/head'
import styles from '../styles/Home.module.css'
import playgroundStyles from "../styles/playground.module.css"

export default function Playground() {
  return (
    <div className={styles.container}>
      <Head>
        <title>StarterCSS</title>
        <meta name="description" content="Starter code for rapid development with CSS" />
        <link rel="icon" href="/starter_css.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.announcement}>If you have not installed StarterCSS yet, first get it <a target="_blank" className={styles.link} href="https://chrome.google.com/webstore/detail/iafddfmhieikpdmmakjedpcconjgcgga">here</a>.</div>

        <h1>Playground Environment</h1>

        <p>Welcome to my styled page!</p>

        <p>There should be more here, but I don't know
        what yet.</p>

        <div className={playgroundStyles.enableFlex}>
            <div>
                <button>Click</button>
            </div>
            <div>
                <p>Button</p>
            </div>
        </div>

        <div className={playgroundStyles.containerbox}>
            <div className={playgroundStyles.box1}>Apple</div>
            <div className={playgroundStyles.box2}>Mango</div>
            <div className={playgroundStyles.box3}>Cherry</div>
        </div>

        <div className={`${styles.announcement} ${playgroundStyles.lisaYanQuote}`}>
          <p>How do you get an octopus to laugh?</p>
          <p>...You give it ten-tickles!</p>
        </div>
        <div className={playgroundStyles.lisaYan}><span>- Lisa Yan, 61C icon</span></div>
      </main>
    </div>
  )
}
