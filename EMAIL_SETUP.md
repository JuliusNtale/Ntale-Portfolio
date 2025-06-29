# Email Functionality Setup Guide

This guide will help you set up email functionality for both the contact form and newsletter subscription.

## EmailJS Setup (Recommended - Free & Easy)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### Step 3: Create Email Templates

#### For Contact Form:
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Template content:
   ```
   Subject: New Contact Form Submission from {{user_name}}
   
   Hello Julius,
   
   You have received a new message from your portfolio contact form:
   
   Name: {{user_name}}
   Email: {{user_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   Best regards,
   Your Portfolio Website
   ```
4. Note down your **Template ID**

#### For Newsletter Subscription:
1. Create another template for newsletter subscriptions:
   ```
   Subject: New Newsletter Subscription
   
   Hello Julius,
   
   Someone has subscribed to your newsletter:
   
   Email: {{user_email}}
   Date: {{current_date}}
   
   Best regards,
   Your Portfolio Website
   ```

### Step 4: Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key**

### Step 5: Update Environment Variables
1. Open your `.env.local` file
2. Replace the placeholder values:
   ```env
   NEXT_PUBLIC_SERVICE_ID=your_actual_service_id
   NEXT_PUBLIC_TEMPLATE_ID=your_actual_template_id
   NEXT_PUBLIC_PUBLIC_KEY=your_actual_public_key
   ```

## Alternative: Using Formspree (Another Easy Option)

### Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account

### Step 2: Create Form
1. Create a new form in your dashboard
2. Set the email to: `juliusntale30@gmail.com`
3. Copy the form endpoint URL

### Step 3: Update Contact Form
If you prefer Formspree, let me know and I'll update the contact form to use it instead.

## Email Features Included

### Contact Page
- ✅ Contact form with EmailJS integration
- ✅ Form validation
- ✅ Success/error messages
- ✅ Loading states
- ✅ Sends to: juliusntale30@gmail.com

### Newsletter Subscription (Blog Page)
- ✅ Email subscription form
- ✅ Form validation
- ✅ Success/error messages
- ✅ Auto-hide messages after 5 seconds
- ✅ Sends to: juliusntale30@gmail.com

## Testing

### Before Adding Real Keys:
The forms will show error messages since the environment variables are not set yet.

### After Setup:
1. Fill out the contact form
2. Subscribe to newsletter
3. Check your email (juliusntale30@gmail.com) for notifications

## Troubleshooting

### Common Issues:
1. **"User ID not found"** - Check your Public Key
2. **"Service not found"** - Check your Service ID  
3. **"Template not found"** - Check your Template ID
4. **CORS errors** - Make sure you're using the correct domain in EmailJS settings

### Email Not Receiving:
1. Check spam folder
2. Verify EmailJS service is connected properly
3. Test with EmailJS dashboard first

## Security Note

Never commit your actual API keys to Git. The `.env.local` file is already in `.gitignore` to prevent accidental commits.

## Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Test the setup in EmailJS dashboard first
3. Ensure all environment variables are correctly set
4. Restart your development server after adding environment variables
