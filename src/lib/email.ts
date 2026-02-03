import type { z } from 'zod';
import type { schema } from '$lib/schema'; // Path to your Zod schema

type ContactData = z.infer<typeof schema>;

export const createContactEmailHtml = (data: ContactData) => {
	// Exact hex conversions from your OKLCH variables
	const theme = {
		background: '#EAE5E6', // --background
		foreground: '#000000', // --foreground
		primary: '#8B3D30', // --primary
		primaryContent: '#FFFFFF',
		card: '#F7F7F7', // --card
		border: '#DADADA', // --border
		muted: '#71717A' // --muted-foreground
	};

	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Inquiry</title>
        <style>
            body { font-family: sans-serif; background-color: ${theme.background}; color: ${theme.foreground}; margin: 0; padding: 40px 10px; }
            .wrapper { max-width: 600px; margin: 0 auto; background: ${theme.card}; border: 1px solid ${theme.border}; border-radius: 8px; overflow: hidden; }
            .header { background-color: ${theme.primary}; padding: 24px; text-align: center; }
            .header h1 { color: ${theme.primaryContent}; margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 2px; }
            .content { padding: 32px; }
            .field-label { font-size: 12px; text-transform: uppercase; color: ${theme.muted}; font-weight: bold; margin-bottom: 4px; }
            .field-value { font-size: 16px; margin-bottom: 20px; color: ${theme.foreground}; border-bottom: 1px solid ${theme.border}; padding-bottom: 8px; }
            .message-box { background: #ffffff; padding: 20px; border-radius: 4px; border-left: 4px solid ${theme.primary}; margin-top: 10px; white-space: pre-wrap; }
            .footer { text-align: center; padding: 20px; font-size: 11px; color: ${theme.muted}; }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <div class="header">
                <h1>New Contact Inquiry</h1>
            </div>
            <div class="content">
                <div class="field-label">From</div>
                <div class="field-value">${data.name} (${data.email})</div>

                <div class="field-label">Company</div>
                <div class="field-value">${data.company}</div>

                <div class="field-label">Inquiry Protocol</div>
                <div class="field-value">${data.inquiryProtocol}</div>

                <div class="field-label">Message</div>
                <div class="message-box">${data.message}</div>
            </div>
            <div class="footer">
                This email was generated from your website contact form.
            </div>
        </div>
    </body>
    </html>
    `;
};
