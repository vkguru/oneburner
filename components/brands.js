import styles from '../styles/style.module.scss'

export default function Brands() {
  return(
    <section>
      <div className={`${styles.blogo} ${styles.container}`}>
        
        <p>Over 500+ companies bond teams together with Oneburner</p>

        <div className={styles.logorow}>
          <img src="/brand.png" alt="brands" />
        </div>
      </div>
    </section>
  )
}