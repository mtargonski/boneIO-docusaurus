import React from 'react';
import Link from '@docusaurus/Link';

const YamlComponentsTable = () => {
  const elements = [
    {
      img: '/img/mqtt.png',
      name: 'Mqtt',
      url: 'configuration/mqtt',
    },
    {
      img: '/img/logger.png',
      name: 'Logger',
      url: 'configuration/logger',
    },
  ];
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '25% 25% 25% 25%',
        gridTemplateRows: '9em',
        padding: '0.2rem',
      }}
    >
      {elements.map(({ img, name, url }, i) => (
        <Link
          key={i}
          to={url}
          className="nohover_link"
          style={{
            textAlign: 'center',
            border: '1px solid var(--ifm-color-primary-darkest)',
            height: '9em',
          }}
        >
          <div
            style={{
              height: '100%',
              //   display: 'grid',
              //   gridTemplateRows: '2fr 1fr',
            }}
          >
            <img
              style={{
                height: 'auto',
                width: 'auto',
                maxHeight: '70%',
              }}
              src={img}
              alt={name}
            />
            <p
              style={{
                gridColumn: '1',
                gridRow: '1/3',
              }}
            >
              {name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default YamlComponentsTable;
