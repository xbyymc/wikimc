// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
	base: process.env.CI ? '/wikimc' : '/',
	site: process.env.CI === 'true' ? 'https://xbyymc.github.io/wikimc' : 'https://wikimc.cn',
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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/xbyymc/wikimc' }],
			editLink: { baseUrl: 'https://github.com/xbyymc/wikimc/blob/main/' },
			lastUpdated: true,
            plugins: [
                starlightSidebarTopics([
                    {
                        label: '生存路线1',
                        link: '/survival/beginner-1',
                        icon: 'open-book',
                        items: ['survival/beginner-1', 'survival/beginner-1'],
                    },
                    {
                        label: '生存路线2',
                        link: '/survival/beginner-2',
                        icon: 'open-book',
                        items: ['survival/beginner-2', 'survival/beginner-2'],
                    },
                ]),
            ],
		}),
	],
});
