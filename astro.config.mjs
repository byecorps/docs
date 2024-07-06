import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'ByeCorps Docs',
    social: {
      github: 'https://github.com/byecorps/docs'
    },
    customCss: ['./src/styles/base.css',
    // Fontsource files for to regular and semi-bold font weights.
    '@fontsource/ibm-plex-sans/400.css', '@fontsource/ibm-plex-sans/600.css',
      '@fontsource/montserrat/400.css', '@fontsource/montserrat/600.css'],
    head: [
      {
        tag: 'script',
        attrs: {
          src: 'https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js',
          defer: true,
        }
      }
    ],
    sidebar: [
      {
        label: 'ByeCorps ID',
        autogenerate: {
          directory: 'id'
        }
      },
      {
        label: 'parked.lol',
        autogenerate: {
          directory: 'parked'
        }
      }
    ]
  })]
});