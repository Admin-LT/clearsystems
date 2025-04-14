import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs">
            Pradėti skaityti
          </Link>
        </div>
      </div>
    </header>
  );
}

function BookFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className={styles.featureCard}>
              <h3>Aiškumo pagrindai</h3>
              <p>
                Kas yra tikrasis aiškumas sistemose ir kodėl jis svarbus. Saint archetipas ir perėjimas nuo programuotojo prie architekto mąstymo.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.featureCard}>
              <h3>Sistemos pamatai</h3>
              <p>
                Domeno aiškumo svarba, kompleksiškumo anatomija ir architektūros esmė kaip erdvė pokyčiui.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.featureCard}>
              <h3>Augimas ir skalė</h3>
              <p>
                Kaip sistemos auga be griūties, kaip valdyti techninę skolą ir kada rinktis evoliuciją, o kada revoliuciją.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col--6">
            <div className={styles.featureCard}>
              <h3>Sistemos gyvavimo ciklas</h3>
              <p>
                Nežinojimo ir sėkmės paradoksas, sistemos, kurios pergyvena kūrėjus, žinomi gedimai ir skaidrumo bei aiškumo santykis.
              </p>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.featureCard}>
              <h3>Architektūros praktika</h3>
              <p>
                Architektūra kaip menas ir mokslas, praktiniai įrankiai ir metodai kasdieniam darbui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutAuthor() {
  return (
    <section className={styles.author}>
      <div className="container">
        <h2>Apie autorių</h2>
        <p>
          Ši knyga gimė iš pokalbių su žmonėmis, kurie stato pasaulį: inžinieriais, sistemų architektais, projektų kūrėjais. 
          Ne tais, kurie ieško efektyviausio būdo uždirbti, bet tais, kurie ieško aiškumo, struktūros, prasmės. 
          Kūrėjais, kurie supranta, kad ne viskas gyvenime yra MVP.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <BookFeatures />
        <AboutAuthor />
      </main>
    </Layout>
  );
}

