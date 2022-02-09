import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Open Source',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        boneIO is an Open HSP initiative where everything is open on GPL-3.0
        License
      </>
    ),
  },
  {
    title: 'Low price',
    image: 'img/frontpanel.png',
    description: (
      <>
        You can print case in your 3d printer, all electronics you can buy
        yourself, there is no license costs.
      </>
    ),
  },
  {
    title: 'DIN rail compatibility',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: <>Compact size (27x11x6)cm - 15 DIN modules</>,
  },
];

function Feature({ Svg, image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} alt={title} />}
        {image && (
          <img
            className={styles.featureImg}
            alt={title}
            src={image}
            height="80%"
          />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
