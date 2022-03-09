import React from 'react';
import Link from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Brunch Recipes',
    Svg: require('@site/static/img/landing/brunch.svg').default,
  },
  
  {
    title: 'Dinner Recipes',
    Svg: require('@site/static/img/landing/dinner.svg').default,
  },
  {
    title: 'Dessert Recipes',
    Svg: require('@site/static/img/landing/dessert.svg').default,
    /* description: (
      <>
        Description here
      </>
    ), */
  },
];

function Feature({Svg, title/* , description */}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
       {/*  <p>{description}</p> */}
      </div>
    </div>
  

  );
}
/* function Feature ({Svg, title, webURL}) {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    
    <div className={clsx('col col--4', styles.features)}>
      <Link to={webURL}>
      {Svg && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
      )}
      <h3>{title}</h3>
      </Link>
    </div>
  );
} */

//use above to link svg text to landing pages

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



