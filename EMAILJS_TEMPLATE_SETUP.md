# 📧 **EMAILJS TEMPLATE SETUP GUIDE**

## 🎯 **New Professional EmailJS Template**

Copy this **EXACT template** into your EmailJS dashboard to replace your current basic template:

---

## **Template Content (Copy this exactly):**

```
Subject: {{subject}}

{{inquiry_type}} - {{priority}} Priority
═══════════════════════════════════════

👤 CLIENT INFORMATION:
Name: {{user_name}}
Email: {{user_email}}
Phone: {{user_phone}}
Company: {{company}}

📧 SOURCE: {{source}}
📅 DATE: {{date}}
⚡ PRIORITY: {{priority}}

{{#service}}
💼 SERVICE DETAILS:
Service Requested: {{service}}
Budget Range: {{budget}} {{currency}}
Payment Preference: {{payment_preference}}
Timeline: {{timeline}}
{{/service}}

📝 MESSAGE/DESCRIPTION:
{{message}}

{{#project_description}}
📋 PROJECT DESCRIPTION:
{{project_description}}
{{/project_description}}

{{#additional_requirements}}
🔧 ADDITIONAL REQUIREMENTS:
{{additional_requirements}}
{{/additional_requirements}}

⚡ RECOMMENDED NEXT STEPS:
{{#service}}
1. Review client requirements within 4 hours
2. Prepare detailed quote/proposal
3. Schedule consultation call
4. Send response within 24-48 hours
{{/service}}
{{^service}}
1. Acknowledge receipt within 4 hours
2. Provide helpful response
3. Follow up as needed
{{/service}}

═══════════════════════════════════════
This inquiry was sent from: Julius Ntale Portfolio Website
Professional Web Development & Digital Solutions
https://yourwebsite.com

📞 RESPOND TO:
Email: {{user_email}}
{{#user_phone}}Phone: {{user_phone}}{{/user_phone}}
{{#company}}Company: {{company}}{{/company}}
═══════════════════════════════════════
```

---

## 🔧 **How to Set This Up:**

### **Step 1: Go to EmailJS Dashboard**
1. Visit [emailjs.com](https://emailjs.com)
2. Login to your account
3. Go to **Email Templates**
4. Find your template: `template_wf9fqil`
5. Click **Edit**

### **Step 2: Replace Template Content**
1. **Delete** your current basic template
2. **Copy and paste** the new template above
3. **Save** the template

### **Step 3: Template Variables**
Make sure these variables are enabled in your template settings:
- `{{subject}}` - Email subject line
- `{{inquiry_type}}` - Type of inquiry (SERVICE_QUOTE, CONTACT, NEWSLETTER)
- `{{user_name}}` - Client's name
- `{{user_email}}` - Client's email
- `{{user_phone}}` - Client's phone (optional)
- `{{company}}` - Client's company (optional)
- `{{service}}` - Service requested (for quotes)
- `{{budget}}` - Budget range
- `{{currency}}` - Currency (USD/TSH)
- `{{payment_preference}}` - Payment preference
- `{{timeline}}` - Project timeline
- `{{message}}` - Main message/description
- `{{project_description}}` - Detailed project description
- `{{additional_requirements}}` - Additional requirements
- `{{source}}` - Which form was used
- `{{priority}}` - Priority level (HIGH/MEDIUM/LOW)
- `{{date}}` - Current date

### **Step 4: Test Your Template**
1. Save the template
2. Go to your website: http://localhost:3003/services
3. Fill out a quote form
4. Check your email - you should receive the professional format!

---

## 📧 **What Your New Emails Will Look Like:**

### **Service Quote Email:**
```
Subject: 🎯 SERVICE QUOTE: Business Pro Website

SERVICE_QUOTE - HIGH Priority
═══════════════════════════════════════

👤 CLIENT INFORMATION:
Name: John Smith
Email: john@company.com
Phone: +255 123 456 789
Company: Tech Solutions Ltd

📧 SOURCE: Services Page
📅 DATE: June 29, 2025
⚡ PRIORITY: HIGH

💼 SERVICE DETAILS:
Service Requested: Business Pro Website
Budget Range: $800-1500 USD
Payment Preference: 50% upfront, 50% on completion
Timeline: 2-4 weeks

📝 MESSAGE/DESCRIPTION:
Professional website with modern design and e-commerce features...

📋 PROJECT DESCRIPTION:
We need a comprehensive business website...

⚡ RECOMMENDED NEXT STEPS:
1. Review client requirements within 4 hours
2. Prepare detailed quote/proposal
3. Schedule consultation call
4. Send response within 24-48 hours

═══════════════════════════════════════
This inquiry was sent from: Julius Ntale Portfolio Website
Professional Web Development & Digital Solutions

📞 RESPOND TO:
Email: john@company.com
Phone: +255 123 456 789
Company: Tech Solutions Ltd
═══════════════════════════════════════
```

### **Contact Email:**
```
Subject: 💬 CONTACT: General Inquiry

CONTACT - MEDIUM Priority
═══════════════════════════════════════

👤 CLIENT INFORMATION:
Name: Sarah Johnson
Email: sarah@email.com
Phone: +255 987 654 321

📧 SOURCE: Contact Page
📅 DATE: June 29, 2025
⚡ PRIORITY: MEDIUM

📝 MESSAGE/DESCRIPTION:
Hi, I'm interested in learning more about your web development services...

⚡ RECOMMENDED NEXT STEPS:
1. Acknowledge receipt within 4 hours
2. Provide helpful response
3. Follow up as needed

═══════════════════════════════════════
```

---

## ✅ **Benefits of the New Template:**

✅ **Professional appearance** - Clients see you as organized
✅ **Clear priority levels** - You know what to respond to first
✅ **All information organized** - No missing details
✅ **Action steps included** - You know exactly what to do next
✅ **Contact details prominent** - Easy to respond quickly
✅ **Source tracking** - Know which page generated the lead

---

## 🚀 **After Setup:**

1. **Test all forms** on your website
2. **Check your email** receives the new format
3. **Create email folders** for organization:
   - 🎯 Service Quotes (HIGH Priority)
   - 💬 General Contact (MEDIUM Priority)
   - 📧 Newsletter (LOW Priority)
   - ✅ Completed/Responded

Your professional freelance business email system will be complete! 🎉
