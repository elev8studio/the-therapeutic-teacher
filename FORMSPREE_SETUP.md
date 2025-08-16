# Contact Form Setup with Formspree

The contact form on your website is configured to work with Formspree, a third-party service that handles form submissions for static sites. Here's how to set it up:

## Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account (allows 50 submissions per month)
3. Verify your email address

## Step 2: Create a New Form

1. Once logged in, click "New Form"
2. Enter a name for your form (e.g., "Therapeutic Teacher Contact Form")
3. Enter the email address where you want to receive form submissions (e.g., `thetherapeuticteacher.uk@gmail.com`)
4. Click "Create Form"

## Step 3: Get Your Form ID

1. After creating the form, you'll see a form ID that looks like: `xpznvqko`
2. Copy this form ID

## Step 4: Update Your Website

1. Open the file `src/pages/ContactPage.jsx`
2. Find the line that says:
   ```jsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" onSubmit={handleSubmit} className="space-y-6">
   ```
3. Replace `YOUR_FORM_ID` with your actual form ID from step 3:
   ```jsx
   <form action="https://formspree.io/f/xpznvqko" method="POST" onSubmit={handleSubmit} className="space-y-6">
   ```

## Step 5: Rebuild and Deploy

1. Run `pnpm run build` to rebuild your website
2. Deploy the updated files to GitHub Pages

## Step 6: Test Your Form

1. Visit your live website
2. Fill out and submit the contact form
3. Check your email for the form submission
4. The first submission will require email verification from Formspree

## Features Included

✅ **Email Notifications**: You'll receive an email for each form submission
✅ **Spam Protection**: Formspree includes built-in spam filtering
✅ **Success Messages**: Users see a confirmation when the form is submitted
✅ **Form Validation**: Required fields are validated before submission
✅ **Mobile Friendly**: The form works perfectly on all devices

## Formspree Free Plan Limits

- **50 submissions per month**
- **Basic spam filtering**
- **Email notifications**

If you need more submissions, you can upgrade to a paid plan starting at $10/month for 1,000 submissions.

## Alternative: Using Your Own Email

If you prefer to use a different email address for form submissions:

1. Go to your Formspree dashboard
2. Click on your form
3. Go to "Settings" → "Email"
4. Add or change the recipient email address

## Troubleshooting

**Form not working?**
- Make sure you've replaced `YOUR_FORM_ID` with your actual form ID
- Check that your website is deployed with the updated code
- Verify your Formspree account is active

**Not receiving emails?**
- Check your spam folder
- Verify the email address in your Formspree settings
- Make sure you've confirmed your email with Formspree

**Need help?**
- Formspree has excellent documentation at [https://help.formspree.io](https://help.formspree.io)
- Their support team is very responsive

That's it! Your contact form will now work perfectly on your static GitHub Pages site.

