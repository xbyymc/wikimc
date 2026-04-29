// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://wikimc.cn',
	integrations: [
		starlight({
			title: '维基MC',
			defaultLocale: 'zh-CN',
			locales: {
				'zh-CN': { label: '简体中文' },
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			editLink: {
        		baseUrl: 'https://github.com/xbyymc/wikimc/blob/main/',
      		},
			lastUpdated: true,
			sidebar: [
  				{
    				locales: {
      					en: [
        					{ autogenerate: { directory: 'en/survival' } },
        					{ autogenerate: { directory: 'en/guide' } },
      					],
      					'zh-CN': [
        					{ autogenerate: { directory: 'zh-CN/survival' } },
        					{ autogenerate: { directory: 'zh-CN/guide' } },
      					],
    				},
  				},
  				{ label: 'SkinMC', link: 'https://skinmc.cn' },
  				{ label: 'HubMC', link: 'https://hubmc.cn' },
			],
		}),
	],
});
