import { NextRequest, NextResponse } from 'next/server'
import { ContactFormData } from '@/lib/types'

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send an email notification
    // 2. Store the message in a database
    // 3. Integrate with a CRM system
    // 4. Send a confirmation email to the user
    
    // For now, we'll just log the message and return success
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Implement actual email sending
    // Example with a service like Resend, SendGrid, or Nodemailer:
    /*
    const emailData = {
      to: 'hello@viveka.dev',
      from: 'noreply@viveka.dev',
      subject: `New Contact Form Submission from ${body.name}`,
      text: `
        Name: ${body.name}
        Email: ${body.email}
        Message: ${body.message}
      `,
    }
    
    await sendEmail(emailData)
    */

    return NextResponse.json(
      { 
        success: true,
        message: 'Thank you for your message! I\'ll get back to you soon.'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Something went wrong. Please try again later.'
      },
      { status: 500 }
    )
  }
}
