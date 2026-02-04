import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	const [{ default: compuands }, { default: stats }] = await Promise.all([
		import('../lib/components/Compuands.svelte'),
		import('../lib/components/Stats.svelte')
	]);

	return {
		compuands,
		stats,
		...data
	};
};
