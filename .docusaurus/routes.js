
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
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs/0.2.0',
    component: ComponentCreator('/docs/0.2.0','b51'),
    routes: [
      {
        path: '/docs/0.2.0/configuration/',
        component: ComponentCreator('/docs/0.2.0/configuration/','230'),
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
        path: '/docs/0.2.0/configuration/mqtt',
        component: ComponentCreator('/docs/0.2.0/configuration/mqtt','889'),
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
    path: '/boards',
    component: ComponentCreator('/boards','cf7'),
    routes: [
      {
        path: '/boards/',
        component: ComponentCreator('/boards/','6e2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/boards/v0.2/input',
        component: ComponentCreator('/boards/v0.2/input','ded'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/boards/v0.2/output',
        component: ComponentCreator('/boards/v0.2/output','56a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/boards/v0.3/input',
        component: ComponentCreator('/boards/v0.3/input','d7d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/case',
    component: ComponentCreator('/case','4c3'),
    routes: [
      {
        path: '/case/',
        component: ComponentCreator('/case/','4f7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/case/case',
        component: ComponentCreator('/case/case','b66'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','7f1'),
    routes: [
      {
        path: '/docs/configuration/',
        component: ComponentCreator('/docs/configuration/','d60'),
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
        path: '/docs/configuration/modbus',
        component: ComponentCreator('/docs/configuration/modbus','8c2'),
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
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
