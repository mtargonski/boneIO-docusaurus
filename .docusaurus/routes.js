
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
    path: '/docs/next',
    component: ComponentCreator('/docs/next','ea5'),
    routes: [
      {
        path: '/docs/next/configuration/',
        component: ComponentCreator('/docs/next/configuration/','325'),
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
        path: '/docs/next/configuration/mqtt',
        component: ComponentCreator('/docs/next/configuration/mqtt','04a'),
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
    component: ComponentCreator('/docs','d4e'),
    routes: [
      {
        path: '/docs/Installation/first-start',
        component: ComponentCreator('/docs/Installation/first-start','eb0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Installation/update',
        component: ComponentCreator('/docs/Installation/update','b55'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Installation/video',
        component: ComponentCreator('/docs/Installation/video','bdd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aba'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations','bc9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post','bc1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document','682'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page','fa0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site','f6c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features','855'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions','9b7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site','ea4'),
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
