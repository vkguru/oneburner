import Image from 'next/image'
import Button from '../components/button'
import homeStyles from '../styles/style.module.scss'

export default function HomeHeader() {
  return (
    <section>
      <div className={`${homeStyles.banner} ${homeStyles.container}`}>
        <div className={homeStyles.herotxt}>
          <div className={homeStyles.herotext}>
            <h1>
              Collaborate with your team and get more done
            </h1>
            <p>
              Communicate effectively with Oneburner for easy collaboration, team work and remote work.
            </p>
          </div>
          <Button link="/" text="Start Free Trial" />
        </div>
        <div className={homeStyles.heroimg}>
          <Image src='/landing-image.png' loading="eager" width={3464} height={2720} alt='landing image' />
        </div>
      </div>
    </section>
  );
}