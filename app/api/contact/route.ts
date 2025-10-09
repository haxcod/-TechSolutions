import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { getContactEmail, getPhoneNumber, getCompanyName } from '@/config/contact'

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail', // You can change this to your preferred email service
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = createTransporter()

    // Email content for you (the business owner)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER, // Your business email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333; text-align: center; margin-bottom: 30px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #495057; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${service ? `<p><strong>Service Interested In:</strong> ${service}</p>` : ''}
          </div>
          
          <div style="background-color: #e9ecef; padding: 20px; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #6c757d; font-size: 14px;">
              This message was sent from your website contact form.
            </p>
          </div>
        </div>
      `,
    }

    // Auto-reply email for the customer
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting ${getCompanyName('name')}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #333;">Thank You for Contacting Us!</h2>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to ${getCompanyName('name')}. We have received your message and will get back to you within 24 hours.</p>
            
            <h3 style="color: #495057; margin-top: 20px;">Your Message Summary:</h3>
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
              <p style="margin: 0; line-height: 1.6;">${message}</p>
            </div>
          </div>
          
          <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1976d2; margin-top: 0;">What Happens Next?</h3>
            <ul style="color: #333; line-height: 1.6;">
              <li>Our team will review your inquiry</li>
              <li>We'll prepare a tailored response based on your needs</li>
              <li>You'll receive a detailed reply within 24 hours</li>
              <li>If urgent, feel free to call us directly</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #6c757d; font-size: 14px;">
              Best regards,<br>
              <strong>The ${getCompanyName('full')} Team</strong><br>
              Email: ${getContactEmail('primary')} | Phone: ${getPhoneNumber('display')}
            </p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(autoReplyOptions)
    ])

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully! We will get back to you soon.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    )
  }
}