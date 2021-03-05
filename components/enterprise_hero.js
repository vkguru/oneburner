import Button from './button'
import styles from '../styles/style.module.scss'

export default function EHero() {
  return(
    <section>
      <div className={`${styles.hero} ${styles.container}`}>
        <div className={styles.heroBanner}>
          <img src='/enterprise_hero.png' alt='enterprise' />

          <div className={styles.heroText}>
            <div className={styles.content_main}>
              <h1>Modern solution built for your enterprise growth</h1>
              <p>Centralize your team in a secure, flexible and managed platform</p>
              <Button link='/' text='Request demo' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}