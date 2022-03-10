import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

const gals = [
  {
    title: 'Frosted Sugar Cookies',
    imageUrl: '/img/gallery/sugar-cookies.jpg',
    webURL:'https://betty-cracker-recipes.github.io/BC-Recipes/docs/dessert-bar/sugar-cookies/',
  },
  {
    title: 'Gingerbread Cookies',
    imageUrl: '/img/gallery/gingerbread.jpg',
    webURL:'https://betty-cracker-recipes.github.io/BC-Recipes/docs/dessert-bar/gingerbread-cookies/',
  },
  {
    title: 'Pumpkin Muffins',
    imageUrl: '/img/gallery/pumpkin.jpg',
    webURL:'https://betty-cracker-recipes.github.io/BC-Recipes/docs/dessert-bar/pumpkin-bread/',
  },
  {
    title: 'Breakfast Burrito',
    imageUrl: '/img/gallery/breakfast-burrito.jpg',
    webURL:'https://betty-cracker-recipes.github.io/BC-Recipes/docs/brunch-bar/breakfast-burrito/',
  },
  {
    title: 'BLT Sandwhich',
    imageUrl: '/img/gallery/blt.jpg',
    webURL:'https://betty-cracker-recipes.github.io/BC-Recipes/docs/brunch-bar/blt-sandwhich/',
  },
  {
    title: 'Chicken Piccata',
    imageUrl: '/img/gallery/piccata.jpg',
    webURL:'https://betty-cracker-recipes.github.io/BC-Recipes/docs/dinner-bar/chicken-piccata/',
  },
];
 {/* This is the Feature function that styles the images and puts them in divs */}
 function Gal({imageUrl, title, webURL}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.gals)}>
      <Link to={webURL}>
      {imgUrl && (
          <div className="text--center">
            <img className={styles.featureGal} src={imgUrl} alt={title} />
          </div>
      )}
      <h3>{title}</h3>
      </Link>
    </div>
  );
}

export default function Gallery() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title=""
      description="Description will go into a meta tag in <head />">
        {/* This is where the color of the background*/}
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          {/* This is where the title and tagline is displayed they can be eddited in the docusaurus.config file*/}
          <h1 className="hero__title">{'Photo Gallery'}</h1>
        </div>
      </header>
   
      <main>
        {gals && gals.length > 0 && (
          <section className={styles.gals}>
            <div className="container">
               {/* This displays the pictures */}
              <div style={{alignItems: 'center', justifyContent: 'space-evenly'}} className="row">
                {gals.map((props, idx) => (
                  <Gal key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}


