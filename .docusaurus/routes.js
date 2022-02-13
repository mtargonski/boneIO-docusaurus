
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
    path: '/docs/0.2.0',
    component: ComponentCreator('/docs/0.2.0','261'),
    routes: [
      {
        path: '/docs/0.2.0/configuration/',
        component: ComponentCreator('/docs/0.2.0/configuration/','230'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/0.2.0/configuration/adc',
        component: ComponentCreator('/docs/0.2.0/configuration/adc','9b1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/0.2.0/configuration/cover',
        component: ComponentCreator('/docs/0.2.0/configuration/cover','ef5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/0.2.0/configuration/input',
        component: ComponentCreator('/docs/0.2.0/configuration/input','056'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/0.2.0/configuration/lm75',
        component: ComponentCreator('/docs/0.2.0/configuration/lm75','cbb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/0.2.0/configuration/logger',
        component: ComponentCreator('/docs/0.2.0/configuration/logger','da5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/0.2.0/configuration/mcp23017',
        component: ComponentCreator('/docs/0.2.0/configuration/mcp23017','01b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/0.2.0/configuration/mcp9808',
        component: ComponentCreator('/docs/0.2.0/configuration/mcp9808','d56'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/0.2.0/configuration/modbus',
        component: ComponentCreator('/docs/0.2.0/configuration/modbus','96e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/0.2.0/configuration/modbus-sensors',
        component: ComponentCreator('/docs/0.2.0/configuration/modbus-sensors','3c8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/0.2.0/configuration/mqtt',
        component: ComponentCreator('/docs/0.2.0/configuration/mqtt','889'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/0.2.0/configuration/oled',
        component: ComponentCreator('/docs/0.2.0/configuration/oled','6ba'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/0.2.0/configuration/output',
        component: ComponentCreator('/docs/0.2.0/configuration/output','338'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/0.2.0/developer',
        component: ComponentCreator('/docs/0.2.0/developer','aa6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/0.2.0/install/first-start',
        component: ComponentCreator('/docs/0.2.0/install/first-start','095'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/0.2.0/install/update',
        component: ComponentCreator('/docs/0.2.0/install/update','5bb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/0.2.0/install/video',
        component: ComponentCreator('/docs/0.2.0/install/video','b73'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/0.2.0/intro',
        component: ComponentCreator('/docs/0.2.0/intro','c53'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','bfc'),
    routes: [
      {
        path: '/docs/configuration/',
        component: ComponentCreator('/docs/configuration/','d60'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/adc',
        component: ComponentCreator('/docs/configuration/adc','ae4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/cover',
        component: ComponentCreator('/docs/configuration/cover','9ec'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/input',
        component: ComponentCreator('/docs/configuration/input','69f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/lm75',
        component: ComponentCreator('/docs/configuration/lm75','b58'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/logger',
        component: ComponentCreator('/docs/configuration/logger','df4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/mcp23017',
        component: ComponentCreator('/docs/configuration/mcp23017','671'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/mcp9808',
        component: ComponentCreator('/docs/configuration/mcp9808','5aa'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/modbus',
        component: ComponentCreator('/docs/configuration/modbus','8c2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/modbus-sensors',
        component: ComponentCreator('/docs/configuration/modbus-sensors','55f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/mqtt',
        component: ComponentCreator('/docs/configuration/mqtt','8f5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/oled',
        component: ComponentCreator('/docs/configuration/oled','749'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/configuration/output',
        component: ComponentCreator('/docs/configuration/output','5eb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/contribute/dev-version',
        component: ComponentCreator('/docs/contribute/dev-version','25f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/contribute/developer',
        component: ComponentCreator('/docs/contribute/developer','9d8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/contribute/modbus',
        component: ComponentCreator('/docs/contribute/modbus','e19'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/install/first-start',
        component: ComponentCreator('/docs/install/first-start','6a1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/install/update',
        component: ComponentCreator('/docs/install/update','1a9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/install/video',
        component: ComponentCreator('/docs/install/video','60e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
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
