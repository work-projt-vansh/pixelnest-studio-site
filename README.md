# PixelNest Studio - Complete React Website
https://pixelnest-studio-site.vercel.app/

A professional, modern agency website built with React for PixelNest Studio - a UI/UX design, web development, and branding agency.

## 🚀 Features

- **Modern Design**: Clean, minimal SaaS-inspired design with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **5 Complete Pages**: Home, Services, Portfolio, About, Contact
- **Interactive Components**: Smooth animations using Framer Motion
- **Contact Form**: Functional form with validation using React Hook Form
- **WhatsApp Integration**: Floating WhatsApp button for instant communication
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Optimized React components for quick loading

## 📁 Project Structure

```
pixelnest-studio/
├── public/
│   ├── index.html
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.js
│   │   │   ├── Header.css
│   │   │   ├── Footer.js
│   │   │   ├── Footer.css
│   │   │   ├── WhatsAppButton.js
│   │   │   └── WhatsAppButton.css
│   │   └── home/
│   │       ├── Hero.js
│   │       ├── Hero.css
│   │       ├── Services.js
│   │       ├── Services.css
│   │       ├── Portfolio.js
│   │       └── Portfolio.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Services.js
│   │   ├── Services.css
│   │   ├── Portfolio.js
│   │   ├── Portfolio.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── data/
│   │   ├── services.js
│   │   └── portfolio.js
│   ├── styles/
│   │   └── index.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Step 1: Install Dependencies

```bash
cd pixelnest-studio
npm install
```

Or if you prefer yarn:

```bash
cd pixelnest-studio
yarn install
```

### Step 2: Start Development Server

```bash
npm start
```

Or with yarn:

```bash
yarn start
```

The website will open automatically at `http://localhost:3000`

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with all optimized files ready for deployment.

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your site is live!

### Option 2: Netlify

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run: `netlify deploy`
3. For production: `netlify deploy --prod`

### Option 3: GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run: `npm run deploy`

## 🎨 Customization Guide

### Changing Colors

Edit `/src/styles/index.css` and update the CSS variables:

```css
:root {
  --primary-blue: #4F46E5;    /* Change primary color */
  --primary-purple: #7C3AED;   /* Change secondary color */
  --success-green: #10B981;    /* Change accent color */
}
```

### Updating Contact Information

1. **Phone/WhatsApp**: Search for `918791724170` and replace with your number
2. **Email**: Search for `studio.pixelnest@gmail.com` and replace with your email
3. Update in these files:
   - `/src/components/layout/Footer.js`
   - `/src/components/layout/WhatsAppButton.js`
   - `/src/pages/Contact.js`

### Adding More Projects to Portfolio

Edit `/src/data/portfolio.js` and add new project objects:

```javascript
{
  id: 4,
  title: "Your Project Name",
  category: "Project Category",
  description: "Project description",
  tags: ["Tag1", "Tag2"],
  // ... more properties
}
```

### Modifying Services

Edit `/src/data/services.js` to update service offerings and pricing.

## 📧 Contact Form Setup

The contact form currently logs data to the console. To connect it to a backend:

### Option 1: EmailJS

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Update `/src/pages/Contact.js` with your EmailJS credentials

### Option 2: Custom Backend

Create an API endpoint and update the `onSubmit` function in `/src/pages/Contact.js`:

```javascript
const onSubmit = async (data) => {
  const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  // Handle response
};
```

### Option 3: Form Services (Formspree, Basin, etc.)

1. Sign up for a form service
2. Get your form endpoint
3. Update the form action or submission handler

## 🖼️ Adding Images

Place images in `/public/images/` directory:

```
public/
  images/
    portfolio/
      project1.jpg
      project2.jpg
    testimonials/
      person1.jpg
```

Then reference them in your components:

```javascript
<img src="/images/portfolio/project1.jpg" alt="Project" />
```

## 📱 SEO Optimization

### Update Meta Tags

Edit `/public/index.html` to update:
- Page title
- Meta description
- OG tags for social sharing

### Add Google Analytics

Add your GA tracking code to `/public/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## 🐛 Troubleshooting

### Port Already in Use

If port 3000 is in use, you can run on a different port:

```bash
PORT=3001 npm start
```

### Build Errors

Clear cache and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### Animation Issues

Make sure Framer Motion is properly installed:

```bash
npm install framer-motion
```

## 📚 Technologies Used

- **React** 18.2.0 - UI library
- **React Router DOM** 6.20.0 - Navigation
- **Framer Motion** 10.16.16 - Animations
- **React Hook Form** 7.49.2 - Form handling
- **React Icons** 4.12.0 - Icon library

## 🤝 Support

For questions or issues:
- Email: studio.pixelnest@gmail.com
- WhatsApp: +91 8791724170

## 📄 License

This project is created for PixelNest Studio. All rights reserved.

## 🎉 Next Steps

1. **Install dependencies**: `npm install`
2. **Start dev server**: `npm start`
3. **Customize content**: Update text, images, and contact info
4. **Test thoroughly**: Check all pages and forms
5. **Build for production**: `npm run build`
6. **Deploy**: Choose your preferred hosting platform
7. **Set up analytics**: Add Google Analytics
8. **Connect form**: Set up email notifications
9. **Add real images**: Replace placeholder gradients
10. **Launch**: Share your new website!

---

**Built with ❤️ for PixelNest Studio**
