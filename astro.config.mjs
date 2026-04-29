// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://wikimc.cn',
	integrations: [
		starlight({
			title: '维基MC',
			defaultLocale: 'zh-cn',
      		locales: {
        		'zh-cn': {
          			label: '简体中文',
          			lang: 'zh-CN',
        		},
				en: {
          			label: 'English',
        		},
      		},
			customCss: [
        		'./src/styles/sidebar-tabs.css'
    		],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/xbyymc/wikimc' }],
			editLink: {
        		baseUrl: 'https://github.com/xbyymc/wikimc/blob/main/',
      		},
			lastUpdated: true,
sidebar: [
	
	{
		label: '游戏教程',
		translations: {
			'en': 'Game Guide',
		},
		items: [
			{
				label: '发展路线',
				translations: {
					'en': 'Development',
				},
				items: [
					{
						label: '线路一',
						translations: {
							'en': 'Route 1',
						},
						slug: 'survival/beginner-1',
					},
				]
			}
		]
	},

	{
		label: '有用链接',
		translations: {
			'en': 'url',
		},
		items: [
			{ label: 'SkinMC', link: 'https://skinmc.cn' },
			{ label: 'HubMC', link: 'https://hubmc.cn' },
		]
	},

	
],
			
		}),
	],
});
