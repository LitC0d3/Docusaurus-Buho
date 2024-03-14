import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Colaboracion con GitHub',
    Image: require('@site/static/img/github-icon.png').default,
    description: (
      <>Se trabajo con GitHub con la colaboracion de los desarrolladores usando git.</>
    ),
  },
  {
    title: 'Creado con Docusaurus',
    Image: require('@site/static/img/docusaurus.png').default,
    description: (
      <>La documentacion fue creada gracias al FrameWork llamado Docusaurus.</>
    ),
  },
  {
    title: 'Trabajado con Visual Studio Code',
    Image: require('@site/static/img/visual-icon.png').default,
    description: (
      <>Se trabajo con el editor de codigo Visual Studio Code por preferencias.</>
    ),
  },
];

import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

function Feature({ Image, title, description }) {
  const { colorMode } = useColorMode();

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img 
          src={Image} 
          className={clsx(styles.featureSvg, colorMode === 'dark' && title === 'Colaboracion con GitHub' && styles.githubLogo)} 
          alt={title} 
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
