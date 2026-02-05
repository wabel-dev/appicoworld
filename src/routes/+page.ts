import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	const [{ default: compuands }, { default: stats }, { default: partners }] = await Promise.all([
		import('../lib/components/Compuands.svelte'),
		import('../lib/components/Stats.svelte'),
		import('../lib/components/Partneres.svelte')
	]);

	return {
		compuands,
		stats,
		partners,
		...data
	};
};
