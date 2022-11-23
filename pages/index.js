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

        <div style={{ position: "relative", paddingBottom: "54.05405405405405%", height: 0}}>
          <iframe src="https://www.loom.com/embed/a7151d17b244479c8a1fe0a3492afec6" 
              frameBorder="0" 
              webkitAllowFullscreen 
              mozAllowFullscreen 
              allowFullScreen 
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}>
          </iframe>
        </div>

        <p className={styles.description}>
          StarterCSS is a chrome extension for web developers 
          to effortlessly implement CSS layouts, effects, and designs without parsing through documentation. 
        </p>
        
        <p className={styles.description}>
          Picking up CSS can be challenging, and StarterCSS saves you the 
          time of pouring through tutorials with an intuitive dashboard to visualize and customize common CSS features. 
          Make your changes at a few clicks, and understand why they worked.
        </p>

        <p className={styles.description}>
          To try it out, head over to the <a target="_blank" className={styles.link} href="https://chrome.google.com/webstore/detail/iafddfmhieikpdmmakjedpcconjgcgga">Web store</a>.
          If you want to test it on some random code, I've made a small <a className={styles.link} href="/playground">playground</a>.
        </p>
       
        <p className={styles.description}>
          I'm happy to hear your thoughts! Feel free to DM me on <a target="_blank" className={styles.link} href="https://twitter.com/nickhjiang">Twitter</a> or message me at +1 9258581652.
        </p>

      </main>
    </div>
  )
}
