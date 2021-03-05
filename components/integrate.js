import styles from '../styles/style.module.scss'

export default function Integrate() {
  return (
    <section>
      <div className={`${styles.intcontainer} ${styles.container}`}>
        <div className={styles.In_head}>
          <h4>Integrate with your favourite tools easily in one click</h4>
        </div>
        <div className={styles.logorow}>
          <img src='/integrate_group.png' alt='integrate your favourite tools with oneburner' />
        </div>
      </div>
    </section>
  )
}