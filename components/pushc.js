import Button from './button'
import styles from '../styles/style.module.scss'

export default function PushC() {
  return (
    <section className={styles.greyfillc}>
      <div className={`${styles.pushc} ${styles.container}`}>
        <h2>Want to learn more on how we can impact your enterprise?</h2>
        <Button link='/contact' text='Contact Sales' />
      </div>
    </section>
  )
}