# QUICK SETUP GUIDE - PixelNest Studio Website

## ⚡ Fast Start (3 Steps)

### Step 1: Install
```bash
cd pixelnest-studio
npm install
```

### Step 2: Run
```bash
npm start
```

### Step 3: Open Browser
Website automatically opens at: http://localhost:3000

---

## 🎯 Essential Customizations

### 1. Update Contact Information (Priority!)

**Files to edit:**
- `src/components/layout/Footer.js` - Lines with phone/email
- `src/components/layout/WhatsAppButton.js` - WhatsApp number
- `src/pages/Contact.js` - All contact details

**Find and Replace:**
- `918791724170` → Your WhatsApp number
- `studio.pixelnest@gmail.com` → Your email

### 2. Change Brand Colors

**File:** `src/styles/index.css`

```css
:root {
  --primary-blue: #4F46E5;     /* Change this */
  --primary-purple: #7C3AED;    /* And this */
}
```

### 3. Add Your Logo

**File:** `src/components/layout/Header.js`

Replace the SVG logo with your own logo image or SVG code.

### 4. Update Content

- **Home Page**: `src/components/home/Hero.js` - Change headline and description
- **Services**: `src/data/services.js` - Update services and pricing
- **Portfolio**: `src/data/portfolio.js` - Add your projects
- **About**: `src/pages/About.js` - Update your story and team

---

## 📁 Where Everything Is

```
Key Files to Edit:
├── Contact Info     → src/components/layout/ (Footer, WhatsApp)
├── Homepage Content → src/components/home/Hero.js
├── Services        → src/data/services.js
├── Portfolio       → src/data/portfolio.js  
├── About Content   → src/pages/About.js
├── Colors/Styles   → src/styles/index.css
└── SEO/Meta Tags   → public/index.html
```

---

## 🚀 Deploy to Production

### Vercel (Easiest - Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

### Traditional Hosting
```bash
npm run build
# Upload the 'build' folder to your hosting
```

---

## 📧 Connect Contact Form

Currently the form just logs to console. To make it send emails:

### Option A: EmailJS (Free, Easy)
1. Sign up: https://www.emailjs.com/
2. Get your service ID, template ID, and public key
3. Add to Contact.js

### Option B: Formspree (Free)
1. Sign up: https://formspree.io/
2. Get your form endpoint
3. Add action to form

### Option C: Your Backend
Send form data to your own API endpoint

---

## ✅ Pre-Launch Checklist

- [ ] Update contact phone and email (everywhere!)
- [ ] Change brand colors to match your brand
- [ ] Update homepage headline and text
- [ ] Add your own portfolio projects
- [ ] Replace team member info in About page
- [ ] Add real images (replace gradients)
- [ ] Test contact form
- [ ] Test WhatsApp button
- [ ] Check mobile responsive design
- [ ] Update page titles and meta descriptions
- [ ] Add Google Analytics (optional)
- [ ] Test on different browsers
- [ ] Build for production
- [ ] Deploy to hosting
- [ ] Test live site
- [ ] Celebrate! 🎉

---

## 🆘 Common Issues

**"npm install fails"**
→ Delete node_modules and package-lock.json, run npm install again

**"Port 3000 already in use"**
→ Run: `PORT=3001 npm start`

**"Framer Motion errors"**
→ Run: `npm install framer-motion`

**"React Router errors"**
→ Run: `npm install react-router-dom`

**"Form doesn't work"**
→ Contact form needs backend connection (see above)

---

## 📞 Need Help?

If you get stuck:
1. Check README.md for detailed docs
2. Google the error message
3. Check React documentation: https://react.dev
4. Stack Overflow is your friend

---

## 🎨 Optional Improvements

After basic setup, consider:
- Add blog section
- Add testimonials slider animation
- Connect CMS (Contentful, Strapi)
- Add live chat widget
- Implement dark mode toggle
- Add case study detail pages
- Create admin dashboard
- Add email newsletter signup

---

Good luck with your website! 🚀
