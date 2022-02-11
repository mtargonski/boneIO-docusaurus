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
              alignItems: 'center',
              display: 'grid',
              gridTemplateRows: '80% 20%',
            }}
          >
            <div
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                verticalAlign: 'middle',
                justifyContent: 'center',
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
            </div>
            <div>
              <p>{name}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default YamlComponentsTable;
