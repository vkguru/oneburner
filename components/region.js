import styles from '../styles/style.module.scss'

export default function Region() {
  return(
    <section className={styles.greyfill}>
      <div className={`${styles.region} ${styles.container}`}>
        <h4>Our Regional Presence</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
      </div>
      <div className={`${styles.map} ${styles.container}`}>
        <img src='/africa.png' alt='map of africa' />
      </div>
    </section>
  )
}