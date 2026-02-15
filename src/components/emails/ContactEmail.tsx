import * as React from 'react';

interface ContactEmailProps {
    organization: string;
    fullName: string;
    email: string;
    phone?: string;
    mailVolume: string;
    message: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
    organization,
    fullName,
    email,
    phone,
    mailVolume,
    message,
}) => (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', color: '#1a1a1a' }}>
        <h1 style={{ color: '#dc2626' }}>New Contact Request from EzPost</h1>
        <p>You have received a new message from the contact form.</p>

        <div style={{ backgroundColor: '#f9fafb', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
            <h2 style={{ fontSize: '18px', borderBottom: '1px solid #e5e7eb', paddingBottom: '10px' }}>Contact Details</h2>
            <p><strong>Organization:</strong> {organization}</p>
            <p><strong>Full Name:</strong> {fullName}</p>
            <p><strong>Email:</strong> {email}</p>
            {phone && <p><strong>Phone:</strong> {phone}</p>}
            <p><strong>Estimated Mail Volume:</strong> {mailVolume}</p>
        </div>

        <div style={{ marginTop: '20px' }}>
            <h2 style={{ fontSize: '18px' }}>Message:</h2>
            <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{message}</p>
        </div>

        <hr style={{ marginTop: '30px', border: '0', borderTop: '1px solid #e5e7eb' }} />
        <p style={{ fontSize: '12px', color: '#6b7280' }}>
            This email was sent from the EzPost contact form.
        </p>
    </div>
);
