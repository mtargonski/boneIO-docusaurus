
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/docs/next','ad0'),
    routes: [
      {
        path: '/docs/next/Installation/first-start',
        component: ComponentCreator('/docs/next/Installation/first-start','06c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Installation/update',
        component: ComponentCreator('/docs/next/Installation/update','819'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/Installation/video',
        component: ComponentCreator('/docs/next/Installation/video','7c4'),
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
        path: '/docs/next/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/next/tutorial-basics/congratulations','942'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/next/tutorial-basics/create-a-blog-post','fbe'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/next/tutorial-basics/create-a-document','32a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/next/tutorial-basics/create-a-page','24b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/next/tutorial-basics/deploy-your-site','49e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/next/tutorial-basics/markdown-features','bca'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/next/tutorial-extras/manage-docs-versions','a0f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/next/tutorial-extras/translate-your-site','84b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/boards',
    component: ComponentCreator('/boards','e9d'),
    routes: [
      {
        path: '/boards/input',
        component: ComponentCreator('/boards/input','8ea'),
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
