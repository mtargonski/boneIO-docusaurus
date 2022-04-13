
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
    component: ComponentCreator('/blog/tags/boneio','014'),
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
    path: '/search',
    component: ComponentCreator('/search','79a'),
    exact: true
  },
  {
    path: '/docs/next',
    component: ComponentCreator('/docs/next','cfc'),
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
        path: '/docs/next/configuration/dallas',
        component: ComponentCreator('/docs/next/configuration/dallas','602'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/configuration/ds2482',
        component: ComponentCreator('/docs/next/configuration/ds2482','01b'),
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
    component: ComponentCreator('/docs','db7'),
    routes: [
      {
        path: '/docs/configuration/',
        component: ComponentCreator('/docs/configuration/','537'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/adc',
        component: ComponentCreator('/docs/configuration/adc','4d1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/cover',
        component: ComponentCreator('/docs/configuration/cover','fef'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/input',
        component: ComponentCreator('/docs/configuration/input','b6a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/lm75',
        component: ComponentCreator('/docs/configuration/lm75','ed9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/logger',
        component: ComponentCreator('/docs/configuration/logger','aa3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/mcp23017',
        component: ComponentCreator('/docs/configuration/mcp23017','9a7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/mcp9808',
        component: ComponentCreator('/docs/configuration/mcp9808','d12'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/modbus',
        component: ComponentCreator('/docs/configuration/modbus','7a2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/modbus-sensors',
        component: ComponentCreator('/docs/configuration/modbus-sensors','317'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/mqtt',
        component: ComponentCreator('/docs/configuration/mqtt','1c3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/oled',
        component: ComponentCreator('/docs/configuration/oled','743'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/output',
        component: ComponentCreator('/docs/configuration/output','3cb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/contribute/dev-version',
        component: ComponentCreator('/docs/contribute/dev-version','058'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/contribute/developer',
        component: ComponentCreator('/docs/contribute/developer','54f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/contribute/modbus',
        component: ComponentCreator('/docs/contribute/modbus','a17'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/install/first-start',
        component: ComponentCreator('/docs/install/first-start','6e2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/install/update',
        component: ComponentCreator('/docs/install/update','9a8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/install/video',
        component: ComponentCreator('/docs/install/video','a18'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','4e3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/troubleshooting',
        component: ComponentCreator('/docs/troubleshooting','899'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/hardware',
    component: ComponentCreator('/hardware','1fa'),
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
        path: '/hardware/i2c',
        component: ComponentCreator('/hardware/i2c','4b1'),
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
