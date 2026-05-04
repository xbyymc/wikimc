// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
	base: process.env.CI ? '/wikimc' : '/',
	site: process.env.CI ? 'https://WikiMC-Official.github.io/wikimc' : 'https://wikimc.cn',
	integrations: [
		starlight({
			title: '维基MC',
			defaultLocale: 'root',
      		locales: {
        		'root': {
          			label: '简体中文',
          			lang: 'zh-CN',
        		},
      		},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/WikiMC-Official/wikimc' }],
			editLink: { baseUrl: 'https://github.com/WikiMC-Official/wikimc/blob/main/' },
			lastUpdated: true,
            plugins: [
                starlightSidebarTopics([
                    {
                        label: '生存路线',
                        link: '/survival/',
                        icon: 'open-book',
                        items: ['survival/ender-loot', 'survival/gene-tech', 'survival/relax-retire'],
                    },
                ]),
            ],
		}),
	],
});
