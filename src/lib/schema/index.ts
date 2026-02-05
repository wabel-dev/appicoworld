import { m } from '$lib/paraglide/messages';
import { z } from 'zod';

export const schema = z.object({
	name: z
		.string({ error: m.north_plane_anteater_fond() })
		.min(1, { error: m.small_tasty_kudu_peel() }),
	company: z
		.string({ error: m.lime_agent_husky_grasp() })
		.min(1, { error: m.vivid_big_gibbon_grasp() }),
	email: z
		.email({ error: m.lime_ornate_crossbill_jest() })
		.min(1, { error: m.petty_still_scallop_bloom() }),
	inquiryProtocol: z
		.string({ error: m.best_dizzy_haddock_grip() })
		.min(1, { error: m.honest_fancy_barbel_create() }),
	message: z.string({ error: m.silly_every_ant_buy() }).min(1, { error: m.mealy_loud_skunk_sail() })
});
