import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import { pageSeo, siteUrl } from '../src/seo.js';

const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' });
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  const template = await readFile('dist/index.html', 'utf8');
  const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  for (const [path, seo] of Object.entries(pageSeo)) {
    const markup = renderToString(React.createElement(StaticRouter, { location: path }, React.createElement(App)));
    const url = `${siteUrl}${path === '/' ? '/' : path}`;
    const structured = path === '/' ? `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Taseel Anwar', url: siteUrl, jobTitle: 'Web developer and automation specialist', sameAs: ['https://github.com/Taseel-Anwar', 'https://www.linkedin.com/in/taseel', 'https://www.upwork.com/freelancers/~01af62dd25502a2237'] })}</script>` : '';
    const tags = `${structured}\n<link rel="canonical" href="${url}" />\n<meta property="og:title" content="${escape(seo.title)}" />\n<meta property="og:description" content="${escape(seo.description)}" />\n<meta property="og:url" content="${url}" />`;
    const html = template.replace(/<title>.*?<\/title>/, `<title>${escape(seo.title)}</title>`)
      .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escape(seo.description)}" />`)
      .replace('</head>', `${tags}\n</head>`)
      .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
    const dir = path === '/' ? 'dist' : `dist${path}`;
    await mkdir(dir, { recursive: true });
    await writeFile(`${dir}/index.html`, html);
  }
} finally {
  await server.close();
}
