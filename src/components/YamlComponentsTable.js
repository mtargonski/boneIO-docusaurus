import React from 'react';
import Link from '@docusaurus/Link';

const YamlComponentsTable = ({ elements }) => {
  return (
    <div className="component_grid">
      {elements.map(({ img, name, url }, i) => (
        <Link key={i} to={url} className="nohover_link">
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
