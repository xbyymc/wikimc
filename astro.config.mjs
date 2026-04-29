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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/xbyymc/wikimc' }],
			editLink: {
        		baseUrl: 'https://github.com/xbyymc/wikimc/blob/main/',
      		},
			lastUpdated: true,
			sidebar: [
    			{
      				label: '发展路线',
      				translations: {
        				'en': 'Development',
      				},
      				items: [
        				{
          					label: '线路一',
          					translations: {
            					'pt-BR': 'Route 1',
          					},
          					slug: 'survival/beginner-1',
        				},

      				],
    			},
  			],
		}),
	],
});
