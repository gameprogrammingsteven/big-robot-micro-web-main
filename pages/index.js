import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BRM Homepage</title>
        <meta name="description" content="Welcome to Big Robot Micro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.mainImageHeader}>
        <div className={styles.logoWrapperView}>
          <Image src="/mainimg.png" alt="" width="420px" height="230px" layout="responsive" className={styles.logo}
          />
        </div>
        {/* <img src={logo} alt="Big Robot Micro Image" className={classes.logo} width="300px" height="300px" /> */}
      </div>
      <main className={styles.main}>
        <div className={styles.infoMain}>
          <div className={`${styles.lightBlueBubble} ${styles.bubbleMain}`}>
            <h2 className={styles.bubbleTitle}>
              You have an idea.
            </h2>
            <p className={styles.lightTextForBubble}>
              We turn your ideas into tangible things and reduce the time it takes for customers to find, buy, engage with, and share your product or idea.
            </p>
          </div>

          <div className={`${styles.herodiv} ${styles.bubbleMain}`}>
            <Image src="/redrobotmonitor.png" alt="" width="420px" height="300px" layout="fill" className={styles.hero} />
          </div>

        </div>


        <div className={styles.info2}>
          <div className={styles.info2Bubble}>
            <h2 className={styles.info2BubbleTitle}>
              Experience
            </h2>
            <p className={styles.info2BubbleP}>
              We&apos;ve seen a variety of processes, products, technologies. From Mobile to Games to Website.
            </p>
          </div>

          <div className={styles.info2Bubble}>
            <h2 className={styles.info2BubbleTitle}>
              Skill
            </h2>
            <p className={styles.info2BubbleP}>
              Our programmers code for fun and for a job. We bring skills, and genuine interest in coding.
            </p>
          </div>

          <div className={styles.info2Bubble}>
            <h2 className={styles.info2BubbleTitle}>
              MDM/Enterprise
            </h2>
            <p className={styles.info2BubbleP}>
              We integrate MDM and similar.
            </p>
          </div>
        </div>


        <div className={styles.skillSection}>
          <div className={styles.skillBubble}>
            <h2 className={styles.skillTitle}>
              iOS (iPhone)
            </h2>
            <p className={styles.skillBubbleText}>
              We offer native apps using Swift, SwiftUI, and integrate with any service or library.
            </p>
          </div>

          <div className={styles.skillBubble}>
            <h2 className={styles.skillTitle}>
              Unity
            </h2>
            <p className={styles.skillBubbleText}>
              We&apos;ve actually worked on Unity under contract for Seattle businesses. Now we do it for you.
            </p>
          </div>

          <div className={styles.skillBubble}>
            <h2 className={styles.skillTitle}>
              Android
            </h2>
            <p className={styles.skillBubbleText}>
              Let&apos;s get your Android app going, native or cross-platform using Flutter and React Native if you wish.
            </p>
          </div>

          <div className={styles.skillBubble}>
            <h2 className={styles.skillTitle}>
              React Native
            </h2>
            <p className={styles.skillBubbleText}>
              We recommend not doing this, but if you have a React Native app or a simple idea that doesn&apos;t need anything specially designed, it&apos;s a good tool.
            </p>
          </div>

          <div className={styles.skillBubble}>
            <h2 className={styles.skillTitle}>
              Flutter
            </h2>
            <p className={styles.skillBubbleText}>
              If you want a cross-platform app that doesn&apos;t sacrifice battery or performance the same way other tools do, we recommend Flutter.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
