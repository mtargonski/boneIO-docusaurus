
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','ac3'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/boneio',
    component: ComponentCreator('/blog/tags/boneio','c0b'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','f0a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs/next',
    component: ComponentCreator('/docs/next','287'),
    routes: [
      {
        path: '/docs/next/configuration/',
        component: ComponentCreator('/docs/next/configuration/','325'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/configuration/adc',
        component: ComponentCreator('/docs/next/configuration/adc','31d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/configuration/cover',
        component: ComponentCreator('/docs/next/configuration/cover','e6f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/configuration/input',
        component: ComponentCreator('/docs/next/configuration/input','403'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/configuration/lm75',
        component: ComponentCreator('/docs/next/configuration/lm75','248'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/configuration/logger',
        component: ComponentCreator('/docs/next/configuration/logger','c43'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/configuration/mcp23017',
        component: ComponentCreator('/docs/next/configuration/mcp23017','bb5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/configuration/mcp9808',
        component: ComponentCreator('/docs/next/configuration/mcp9808','1e9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/configuration/modbus',
        component: ComponentCreator('/docs/next/configuration/modbus','c2c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/configuration/modbus-sensors',
        component: ComponentCreator('/docs/next/configuration/modbus-sensors','fea'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/configuration/mqtt',
        component: ComponentCreator('/docs/next/configuration/mqtt','04a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/configuration/oled',
        component: ComponentCreator('/docs/next/configuration/oled','509'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/configuration/output',
        component: ComponentCreator('/docs/next/configuration/output','e24'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/contribute/dev-version',
        component: ComponentCreator('/docs/next/contribute/dev-version','53d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/contribute/developer',
        component: ComponentCreator('/docs/next/contribute/developer','295'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/contribute/modbus',
        component: ComponentCreator('/docs/next/contribute/modbus','b4a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/install/first-start',
        component: ComponentCreator('/docs/next/install/first-start','d1f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/install/update',
        component: ComponentCreator('/docs/next/install/update','561'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/install/video',
        component: ComponentCreator('/docs/next/install/video','3c1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/intro',
        component: ComponentCreator('/docs/next/intro','8d4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/troubleshooting',
        component: ComponentCreator('/docs/next/troubleshooting','723'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','e7f'),
    routes: [
      {
        path: '/docs/configuration/',
        component: ComponentCreator('/docs/configuration/','f1a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/adc',
        component: ComponentCreator('/docs/configuration/adc','fac'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/cover',
        component: ComponentCreator('/docs/configuration/cover','17c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/input',
        component: ComponentCreator('/docs/configuration/input','b25'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/lm75',
        component: ComponentCreator('/docs/configuration/lm75','0d8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/logger',
        component: ComponentCreator('/docs/configuration/logger','e63'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/mcp23017',
        component: ComponentCreator('/docs/configuration/mcp23017','9cc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/mcp9808',
        component: ComponentCreator('/docs/configuration/mcp9808','1ab'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/modbus',
        component: ComponentCreator('/docs/configuration/modbus','185'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/modbus-sensors',
        component: ComponentCreator('/docs/configuration/modbus-sensors','1be'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/mqtt',
        component: ComponentCreator('/docs/configuration/mqtt','c84'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/oled',
        component: ComponentCreator('/docs/configuration/oled','5e4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/output',
        component: ComponentCreator('/docs/configuration/output','5a9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/contribute/dev-version',
        component: ComponentCreator('/docs/contribute/dev-version','c56'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/contribute/developer',
        component: ComponentCreator('/docs/contribute/developer','eda'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/contribute/modbus',
        component: ComponentCreator('/docs/contribute/modbus','d6c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/install/first-start',
        component: ComponentCreator('/docs/install/first-start','669'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/install/update',
        component: ComponentCreator('/docs/install/update','f1f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/install/video',
        component: ComponentCreator('/docs/install/video','c5e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aba'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/hardware',
    component: ComponentCreator('/hardware','e8c'),
    routes: [
      {
        path: '/hardware/',
        component: ComponentCreator('/hardware/','dfa'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/hardware/case',
        component: ComponentCreator('/hardware/case','243'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/hardware/power',
        component: ComponentCreator('/hardware/power','5b6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/hardware/v0.2/input',
        component: ComponentCreator('/hardware/v0.2/input','9a1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/hardware/v0.2/output',
        component: ComponentCreator('/hardware/v0.2/output','47f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/hardware/v0.3/input',
        component: ComponentCreator('/hardware/v0.3/input','a26'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
