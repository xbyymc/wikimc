// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
	base: process.env.CI ? '/wikimc' : '/',
	site: process.env.CI ? 'https://xbyymc.github.io/wikimc' : 'https://wikimc.cn',
	integrations: [
		starlight({
			title: '维基MC',
			footer: {
  				copyright: `<div style="text-align:center; font-size:14px; color:#888;"><a href="https://beian.miit.gov.cn/" target="_blank" style="color:#888; text-decoration:none;">苏ICP备2026025300号-1</a><span style="margin:0 8px;">|</span><a href="https://beian.mps.gov.cn/" target="_blank" style="color:#888; text-decoration:none;">苏公网安备xxxxxxxx号</a></div>`
			},
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
                        label: '生存路线',
                        link: '/survival/',
                        icon: 'open-book',
                        items: ['survival/beginner-1', 'survival/beginner-1'],
                    },
                    {
                        label: '使用手册',
                        link: '/survival/beginner-2',
                        icon: 'open-book',
                        items: ['survival/beginner-2', 'survival/beginner-2'],
                    },
                ]),
            ],
		}),
	],
});
