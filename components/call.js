import Button from './button'
import styles from '../styles/style.module.scss'

export default function Call() {
  return (
    <section className={styles.bfill}>
      <div className={styles.call}>
        <h4>Choose a better way to work</h4>
        <p>No credit card details | No additional installation | No time wasting</p>
        <Button link='/' text='Start my free trial' />
      </div>
    </section>
  )
}