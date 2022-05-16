
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','0f4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','59a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','edd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','e30'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','355'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','f76'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','27e'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','2a8'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','539'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','fe4'),
    exact: true
  },
  {
    path: '/blog/tags/boneio',
    component: ComponentCreator('/blog/tags/boneio','39b'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','e7d'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','e4c'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','3ea'),
    exact: true
  },
  {
    path: '/docs/0.2.x',
    component: ComponentCreator('/docs/0.2.x','df2'),
    routes: [
      {
        path: '/docs/0.2.x/configuration/',
        component: ComponentCreator('/docs/0.2.x/configuration/','81d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/configuration/adc',
        component: ComponentCreator('/docs/0.2.x/configuration/adc','6a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/configuration/cover',
        component: ComponentCreator('/docs/0.2.x/configuration/cover','6ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/configuration/input',
        component: ComponentCreator('/docs/0.2.x/configuration/input','36a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/configuration/lm75',
        component: ComponentCreator('/docs/0.2.x/configuration/lm75','3f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/configuration/logger',
        component: ComponentCreator('/docs/0.2.x/configuration/logger','a2e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/configuration/mcp23017',
        component: ComponentCreator('/docs/0.2.x/configuration/mcp23017','d89'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/configuration/mcp9808',
        component: ComponentCreator('/docs/0.2.x/configuration/mcp9808','3d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/configuration/modbus',
        component: ComponentCreator('/docs/0.2.x/configuration/modbus','c97'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/configuration/modbus-sensors',
        component: ComponentCreator('/docs/0.2.x/configuration/modbus-sensors','240'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/configuration/mqtt',
        component: ComponentCreator('/docs/0.2.x/configuration/mqtt','b3d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/configuration/oled',
        component: ComponentCreator('/docs/0.2.x/configuration/oled','88c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/configuration/output',
        component: ComponentCreator('/docs/0.2.x/configuration/output','a05'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/contribute/dev-version',
        component: ComponentCreator('/docs/0.2.x/contribute/dev-version','b2c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/contribute/developer',
        component: ComponentCreator('/docs/0.2.x/contribute/developer','9b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/contribute/modbus',
        component: ComponentCreator('/docs/0.2.x/contribute/modbus','8fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/install/first-start',
        component: ComponentCreator('/docs/0.2.x/install/first-start','720'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/install/update',
        component: ComponentCreator('/docs/0.2.x/install/update','0d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/install/video',
        component: ComponentCreator('/docs/0.2.x/install/video','879'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/intro',
        component: ComponentCreator('/docs/0.2.x/intro','c0d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/0.2.x/troubleshooting',
        component: ComponentCreator('/docs/0.2.x/troubleshooting','a28'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','437'),
    routes: [
      {
        path: '/docs/configuration/',
        component: ComponentCreator('/docs/configuration/','d60'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/configuration/adc',
        component: ComponentCreator('/docs/configuration/adc','ae4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/configuration/cover',
        component: ComponentCreator('/docs/configuration/cover','9ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/configuration/dallas',
        component: ComponentCreator('/docs/configuration/dallas','8d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/configuration/ds2482',
        component: ComponentCreator('/docs/configuration/ds2482','40d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/configuration/input',
        component: ComponentCreator('/docs/configuration/input','69f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/configuration/lm75',
        component: ComponentCreator('/docs/configuration/lm75','b58'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/configuration/logger',
        component: ComponentCreator('/docs/configuration/logger','df4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/configuration/mcp23017',
        component: ComponentCreator('/docs/configuration/mcp23017','671'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/configuration/mcp9808',
        component: ComponentCreator('/docs/configuration/mcp9808','5aa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/configuration/modbus',
        component: ComponentCreator('/docs/configuration/modbus','8c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/configuration/modbus-sensors',
        component: ComponentCreator('/docs/configuration/modbus-sensors','55f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/configuration/mqtt',
        component: ComponentCreator('/docs/configuration/mqtt','8f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/configuration/oled',
        component: ComponentCreator('/docs/configuration/oled','749'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/configuration/output',
        component: ComponentCreator('/docs/configuration/output','5eb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/contribute/dev-version',
        component: ComponentCreator('/docs/contribute/dev-version','25f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/contribute/developer',
        component: ComponentCreator('/docs/contribute/developer','9d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/contribute/modbus',
        component: ComponentCreator('/docs/contribute/modbus','e19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/install/first-start',
        component: ComponentCreator('/docs/install/first-start','6a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/install/update',
        component: ComponentCreator('/docs/install/update','1a9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/install/video',
        component: ComponentCreator('/docs/install/video','60e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/troubleshooting',
        component: ComponentCreator('/docs/troubleshooting','5f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/hardware',
    component: ComponentCreator('/hardware','3cc'),
    routes: [
      {
        path: '/hardware/',
        component: ComponentCreator('/hardware/','dfa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hardware/case',
        component: ComponentCreator('/hardware/case','243'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hardware/Input Board BBB/v0.2',
        component: ComponentCreator('/hardware/Input Board BBB/v0.2','6e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hardware/Input Board BBB/v0.3',
        component: ComponentCreator('/hardware/Input Board BBB/v0.3','f6f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hardware/power',
        component: ComponentCreator('/hardware/power','5b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hardware/Relay Board 24x16A/v0.2',
        component: ComponentCreator('/hardware/Relay Board 24x16A/v0.2','ad7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/hardware/Relay Board 32x5A/v0.3',
        component: ComponentCreator('/hardware/Relay Board 32x5A/v0.3','1d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','8c7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
