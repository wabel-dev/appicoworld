import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod4 } from 'sveltekit-superforms/adapters';
import { schema } from '$lib/schema';
import nodemailer from 'nodemailer';
import { createContactEmailHtml } from '$lib/email';

export const load: PageServerLoad = async () => {
	return { form: await superValidate(zod4(schema)) };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod4(schema));
		if (!form.valid) {
			return fail(400, { form });
		}
		console.log(form.data);

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'a.alajami963@gmail.com',
				pass: 'lzhy ncwn eqob ryyb'
			}
		});
		try {
			//replyTo: 'wabel@appicoworld.com',
			// 2. Define the email options with HTML
			await transporter.sendMail({
				from: 'myapp', // Most providers require 'from' to be the auth user
				to: form.data.email,
				subject: `New Inquiry: ${form.data.inquiryProtocol}`,
				html: createContactEmailHtml(form.data)
			});

			return message(form, 'Form submitted successfully!');
		} catch (error) {
			console.error(error);
			return fail(500, { message: 'Failed to send email', form });
		}
	}
};
