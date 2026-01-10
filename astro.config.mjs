// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Open Throw',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sevenfoxes/openThrow' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Creating a Shell', slug: 'getting-started' },
					]
				},
				{
					label: 'Self-Sealing Stem Bolt',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'overview', slug: 'sssb/overview' },
						{
							label: 'interconnect',
							slug: 'sssb/interconnect'
						},
						{ label: 'stems',
							items: [
							{label: 'openThrow (default)', slug: 'sssb/stems/ot'},
							{label: 'FD Stem', slug: 'sssb/stems/fd'},
							{label: 'Cabal Guts', slug: 'sssb/stems/od'}
						] },
					],
				},
				{
					label: 'OT Compatible Yo-yos',
					autogenerate: { directory: 'models'}
				},
				{
					label: 'Other Yo-yos and Mods',
					autogenerate: { directory: 'other'}
				}
			],
		}),
	],
});
