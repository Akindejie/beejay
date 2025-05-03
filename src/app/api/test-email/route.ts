import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    // Log environment variables for debugging
    console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
    console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'akindejifuddi@gmail.com',
        pass: process.env.EMAIL_PASS,
      },
    });

    // Set up email data for test
    const mailOptions = {
      from: 'test@example.com',
      to: 'akindejifuddi@gmail.com',
      subject: 'Test Email from Portfolio',
      text: 'This is a test email to verify your email sending configuration works.',
      html: '<div><h2>Test Email</h2><p>This is a test email to verify your email sending configuration works.</p></div>',
    };

    // Send the test email
    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('Error sending test email:', error);
    return NextResponse.json(
      {
        error: 'Failed to send test email',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
