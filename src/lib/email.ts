import type { z } from 'zod';
import type { schema } from '$lib/schema'; // Path to your Zod schema

type ContactData = z.infer<typeof schema>;
export const createContactEmailHtml = (data: ContactData) => {
	return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>APPICO WORLD</title>
</head>
<body style="margin: 0; padding: 20px; background-color: #dcdadb; font-family: Arial, sans-serif;">

    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
        
        <div style="border-bottom: 4px solid #cc2e3b; padding-bottom: 10px; margin-bottom: 30px;">
            <div style="display: inline-block; vertical-align: bottom;">
                <div style="font-size: 42px; font-weight: bold; color: #000; line-height: 1; letter-spacing: -1px;">APPICO</div>
                <div style="font-size: 18px; letter-spacing: 4px; color: #000; text-transform: uppercase;">WORLD</div>
            </div>
            <div style="display: inline-block; vertical-align: bottom; float: right;">
                 <img src="http://appicoworld.vercel.app/appico_logo.webp" alt="Logo" width="50" style="display: block; border: 0;">
            </div>
            <div style="clear: both;"></div>
            <div style="color: #cc2e3b; font-size: 12px; font-weight: bold; text-transform: uppercase; margin-top: 10px;">
                Innovating for Every Industry
            </div>
        </div>

        <div style="color: #333333; line-height: 1.5;">
            <h2 style="font-size: 20px; color: #000; border-left: 4px solid #cc2e3b; padding-left: 10px; margin-bottom: 25px;">NEW INQUIRY</h2>
            
            <div style="margin-bottom: 10px;">
                <span style="font-weight: bold; color: #cc2e3b; font-size: 12px; text-transform: uppercase; display: block;">Name</span>
                <div style="font-size: 16px; color: #000;">${data.name}</div>
            </div>

            <div style="margin-bottom: 10px;">
                <span style="font-weight: bold; color: #cc2e3b; font-size: 12px; text-transform: uppercase; display: block;">Company</span>
                <div style="font-size: 16px; color: #000;">${data.company}</div>
            </div>

            <div style="margin-bottom: 10px;">
                <span style="font-weight: bold; color: #cc2e3b; font-size: 12px; text-transform: uppercase; display: block;">Email</span>
                <div style="font-size: 16px; color: #000;"><a href="mailto:${data.email}" style="color: #000; text-decoration: none;">${data.email}</a></div>
            </div>

            <div style="margin-bottom: 25px;">
                <span style="font-weight: bold; color: #cc2e3b; font-size: 12px; text-transform: uppercase; display: block;">Protocol</span>
                <div style="font-size: 16px; color: #000;">${data.inquiryProtocol}</div>
            </div>

            <div style="background-color: #f4f4f4; padding: 20px; border-radius: 4px;">
                <span style="font-weight: bold; color: #cc2e3b; font-size: 12px; text-transform: uppercase; display: block; margin-bottom: 10px;">Message</span>
                <div style="font-size: 15px; color: #222; white-space: pre-wrap;">${data.message}</div>
            </div>
        </div>

        <div style="margin-top: 40px; border-top: 2px solid #cc2e3b; padding-top: 20px;">
            <div style="text-align: center; font-size: 11px; color: #666;">
                <div style="margin-bottom: 8px;">📍 Damascus Countryside, Syria</div>
                <div style="margin-bottom: 8px;">✉️ <a href="mailto:wabel@appicoworld.com" style="color: #cc2e3b; text-decoration: none;">wabel@appicoworld.com</a></div>
                <div>📞 <a href="tel:+963943663642" style="color: #cc2e3b; text-decoration: none;">+963 943 663 642</a></div>
            </div>
        </div>

    </div>
</body>
</html>
    `;
};
