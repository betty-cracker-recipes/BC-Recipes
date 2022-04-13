import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

// List of all pictures that will appear in the gallery section
const gals = [
  {
    title: 'Frosted Sugar Cookies', //label that appears under image
    imageUrl: '/img/gallery/sugar-cookies.jpg', //path to image in static img folder
    webURL:'https://betty-cracker-recipes.github.io/BC-Recipes/docs/dessert-bar/sugar-cookies/', //link to corresponding recipe site page
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
 
//function to format and organize the above gallery list info, links text and image to proper url
 function Gal({imageUrl, title, webURL}) {
  const imgUrl = useBaseUrl(imageUrl); //allows image path to be used
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

// function that takes the list, as well as other information and prints it to the screen
export default function Gallery() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title=""
      description="Description will go into a meta tag in <head />">
        {/* This is where the color of the background*/}
      <header className={clsx('hero hero--primary', styles.galBanner)}>
        <div className="container">
          {/* This is where the title and tagline is displayed they can be eddited in the docusaurus.config file*/}
          <h1 className="hero__title">{'Photo Gallery'}</h1>
        </div>
      </header>
   
      <main>
        {gals && gals.length > 0 && (
          <section className={styles.gals}>
            <div className="container">
               {/* Displays gallery images from list */}
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


