# Email Setup Instructions for Contact Form

## Overview
The contact form now sends emails to your business email address and automatically replies to customers. Follow these steps to configure email functionality.

## 📧 Email Configuration Steps

### 1. Set Up Email Credentials

Edit the `.env.local` file in your project root:

```env
# Your email address (Gmail, Outlook, etc.)
EMAIL_USER=your-email@gmail.com

# Your email password or app-specific password
EMAIL_PASS=your-app-password

# Email address where contact form messages will be sent
RECIPIENT_EMAIL=your-business-email@haxcod.com
```

### 2. Gmail Setup (Recommended)

If using Gmail:

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `EMAIL_PASS`

3. **Update .env.local**:
```env
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your-16-character-app-password
RECIPIENT_EMAIL=yourbusiness@haxcod.com
```

### 3. Other Email Providers

For other email services, update the transporter configuration in `/app/api/contact/route.ts`:

**Outlook/Hotmail:**
```javascript
service: 'hotmail'
```

**Yahoo:**
```javascript
service: 'yahoo'
```

**Custom SMTP:**
```javascript
host: 'smtp.yourdomain.com',
port: 587,
secure: false,
```

## 🚀 Features

### For Business Owner:
- Receives detailed email with all form information
- Professional HTML formatting
- Contact details clearly displayed
- Message content preserved with formatting

### For Customers:
- Automatic confirmation email
- Professional branded response
- Message summary included
- Clear next steps outlined

## 🔧 Testing

1. **Start the development server:**
```bash
npm run dev
```

2. **Navigate to contact page:**
```
http://localhost:3000/contact
```

3. **Fill out and submit the form**

4. **Check both emails:**
   - Business email should receive the inquiry
   - Customer should receive auto-reply

## 🛡️ Security Notes

- Never commit `.env.local` to version control
- Use app-specific passwords, not your main email password
- The `.env.local` file is already in `.gitignore`
- Email credentials are only used server-side

## 📝 Customization

### Email Templates
Edit the HTML templates in `/app/api/contact/route.ts`:
- `mailOptions.html` - Email sent to business
- `autoReplyOptions.html` - Auto-reply to customer

### Form Fields
Add new fields in:
1. `ContactForm.tsx` - Add to form state and JSX
2. `/app/api/contact/route.ts` - Include in email templates

## 🐛 Troubleshooting

### Common Issues:

1. **"Authentication failed"**
   - Check email credentials
   - Ensure app password is used (not regular password)
   - Verify 2FA is enabled for Gmail

2. **"Connection refused"**
   - Check internet connection
   - Verify email service settings
   - Try different SMTP port (587, 465, 25)

3. **Emails not received**
   - Check spam/junk folders
   - Verify recipient email address
   - Test with different email providers

### Debug Mode:
Set `NODE_ENV=development` to see detailed error messages in API responses.

## 📞 Support

If you need help with email setup:
1. Check the browser console for error messages
2. Review server logs in the terminal
3. Test with a simple email service first (Gmail)
4. Verify all environment variables are set correctly