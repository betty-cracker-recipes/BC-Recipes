import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

//import HomepageFeatures from '@site/src/components/HomepageFeatures';

// svg list
const FeatureList = [
  {
    title: 'Brunch Recipes', // Homepage 
    Svg: require('@site/static/img/landing/brunch.svg').default,
    url: 'https://betty-cracker-recipes.github.io/BC-Recipes/docs/brunch-bar/brunch-landing/',
  },
  
  {
    title: 'Dinner Recipes',
    Svg: require('@site/static/img/landing/dinner.svg').default,
    url: 'https://betty-cracker-recipes.github.io/BC-Recipes/docs/dinner-bar/dinner-landing/',
  },
  {
    title: 'Dessert Recipes',
    Svg: require('@site/static/img/landing/dessert.svg').default,
    url: 'https://betty-cracker-recipes.github.io/BC-Recipes/docs/dessert-bar/dessert-landing/',
  },
];

//
function Feature({Svg, title, url}) {
  const svgUrl = (Svg);
  return (
    <div className={clsx('col col--4')}>
        <Link to={url}>
      {Svg && (
          <div className="text--center">
            <Svg className={styles.featureSvg} alt={title} />
          </div>
      )}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
      </Link>
      
    </div>
  );
} 

//Formats the Homepage Header, use to edit website title on homescreen, tagline, email sign up button
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img className={styles.heroImg} src="img/landing/baking.png"  /> 
         <img className={styles.heroImg} src="img/landing/spatula.png"  /> 
        <img className={styles.heroImg} src="img/landing/hat.png"  />  

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://github.us14.list-manage.com/subscribe/post?u=1b3debc5f2913fafd34b5b7df&id=9f9be4559b">
            Sign Up for Emails
          </Link>
        </div>
       
              {/* <img className={styles.heroImg} src="img/landing/dinner.svg" /> */}
            
      </div>
    </header>
  );
}

export default function Home() {
 const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
        <HomepageHeader/>
      <main>
        {FeatureList && FeatureList.length > 0 && (
         <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        )}
      </main>
    </Layout>
  );
}
