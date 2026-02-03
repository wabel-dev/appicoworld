import { z } from 'zod';

export const schema = z.object({
	name: z.string({ error: 'Please enter your name.' }).min(1, { error: 'This field is required.' }),
	company: z
		.string({ error: 'Please enter your company.' })
		.min(1, { error: 'This field is required.' }),
	email: z
		.email({ error: 'Please enter a valid email.' })
		.min(1, { error: 'This field is required.' }),
	inquiryProtocol: z
		.string({ error: 'Please enter your inquiry protocol.' })
		.min(1, { error: 'This field is required.' }),
	message: z
		.string({ error: 'Please enter your message.' })
		.min(1, { error: 'This field is required.' })
});
