import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { organization, fullName, email, phone, mailVolume, message } = await request.json();

        const receiverEmails = process.env.CONTACT_RECEIVER_EMAILS?.split(',').map(e => e.trim()) || [];

        if (receiverEmails.length === 0) {
            return Response.json({ error: { message: 'Mail configuration error: No receiver emails provided.' } }, { status: 500 });
        }

        if (!process.env.RESEND_API_KEY) {
            return Response.json({ error: { message: 'Resend API key missing from environment.' } }, { status: 500 });
        }

        // Using raw HTML to avoid any JSX/React parsing issues in the API route
        const htmlContent = `
            <div style="font-family: sans-serif; padding: 20px; color: #1a1a1a;">
                <h1 style="color: #dc2626;">New Contact Request from EzPost</h1>
                <p>You have received a new message from the contact form.</p>
                
                <div style="background-color: #f9fafb; padding: 15px; borderRadius: 8px; margin-top: 20px; border: 1px solid #e5e7eb;">
                    <h2 style="font-size: 18px; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">Contact Details</h2>
                    <p><strong>Organization:</strong> ${organization}</p>
                    <p><strong>Full Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
                    <p><strong>Estimated Mail Volume:</strong> ${mailVolume}</p>
                </div>

                <div style="margin-top: 20px;">
                    <h2 style="font-size: 18px;">Message:</h2>
                    <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
                </div>
                
                <hr style="margin-top: 30px; border: 0; border-top: 1px solid #e5e7eb;" />
                <p style="font-size: 12px; color: #6b7280;">
                    This email was sent from the EzPost contact form.
                </p>
            </div>
        `;

        const { data, error } = await resend.emails.send({
            from: 'EzPost Contact <info@membershipauto.com>',
            to: receiverEmails,
            subject: `New Contact Request: ${organization}`,
            html: htmlContent,
        });

        if (error) {
            console.error('Resend Error:', error);
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ data });
    } catch (error) {
        console.error('Server Error:', error);
        return Response.json({ error: { message: error instanceof Error ? error.message : String(error) } }, { status: 500 });
    }
}
