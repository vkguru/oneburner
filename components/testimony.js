import styles from '../styles/style.module.scss'

export default function Testimony() {
  return(
    <section>
      <div className={`${styles.testmain} ${styles.container}`}>
        <p>
        Best. Product. Ever! We like Oneburner more and more each day because it makes our work a lot easier. It's just amazing. Very easy to use, impressed us on multiple levels. Thank you so much for your help and is worth much more than we paid. We were treated like royalty.
        </p>

        <hr className={styles.divide} />

        <div className={styles.testauthor}>
          <div className={styles.testimg}>
            <img src='/kemi.png' alt='Kemi Hassan' />
          </div>

          <div className={styles.name}>
            <p>Kemi Hassan</p>
            <p>CEO, Saharaa Inc.</p>
          </div>
        </div>
      </div>
    </section>
  )
}