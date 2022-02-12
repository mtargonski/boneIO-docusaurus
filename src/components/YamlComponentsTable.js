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
    {
      img: '/img/oled.jpg',
      name: 'OLED',
      url: 'configuration/oled',
    },
    {
      img: '/img/modbus.png',
      name: 'Modbus',
      url: 'configuration/modbus',
    },
    {
      img: '/img/modbus_sensors.png',
      name: 'Modbus sensors',
      url: 'configuration/modbus-sensors',
    },
    {
      img: '/img/lm75.jpg',
      name: 'LM75 temp sensor',
      url: 'configuration/lm75',
    },
    {
      img: '/img/mcp9808.jpg',
      name: 'MCP9808 temp sensor',
      url: 'configuration/mcp9808',
    },
    {
      img: '/img/mcp23017.png',
      name: 'MCP23017',
      url: 'configuration/mcp23017',
    },
    {
      img: '/img/output.png',
      name: 'Output',
      url: 'configuration/output',
    },
    {
      img: '/img/input.png',
      name: 'Input',
      url: 'configuration/input',
    },
    {
      img: '/img/adc.png',
      name: 'ADC',
      url: 'configuration/adc',
    },
    {
      img: '/img/cover.png',
      name: 'Cover',
      url: 'configuration/cover',
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
