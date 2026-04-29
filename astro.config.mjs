// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '维基MC',
			site: 'https://wikimc.cn',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			editLink: {
        		baseUrl: 'https://github.com/xbyymc/wikimc/blob/main/',
      		},
			lastUpdated: true,
			sidebar: [
				{
					label: '发展路线',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
