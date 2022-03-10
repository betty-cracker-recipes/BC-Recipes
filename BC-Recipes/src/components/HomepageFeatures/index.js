import React from 'react';
import Link from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Brunch Recipes',
    Svg: require('@site/static/img/landing/brunch.svg').default,
    href: 'https://betty-cracker-recipes.github.io/BC-Recipes/docs/brunch-bar/brunch-landing/',
  },
  
  {
    title: 'Dinner Recipes',
    Svg: require('@site/static/img/landing/dinner.svg').default,
    href: 'https://betty-cracker-recipes.github.io/BC-Recipes/docs/brunch-bar/brunch-landing/',
  },
  {
    title: 'Dessert Recipes',
    Svg: require('@site/static/img/landing/dessert.svg').default,
    href: 'https://betty-cracker-recipes.github.io/BC-Recipes/docs/brunch-bar/brunch-landing/',
  },
];

function Feature({Svg, title}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title} </h3>
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



