import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
/* 
import algoliasearch from 'algoliasearch/lite';
const client = algoliasearch('33MRM77352', '8d22c3928245fb60240865a55fcfb0ae');
const index = client.initIndex('bc'); */

const FeatureList = [
  {
    title: 'Brunch Recipes',
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

function Feature({Svg, title, url}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
      {url ? (
          <h3>
            <a href={url} target="_blank">
              {title}
            </a>
          </h3>
        ) : (
          <h3>{title}</h3>
        )}
      </div>
    </div>
  );
} 


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
} 



