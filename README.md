# GreenEzine - Coming Soon Landing Page

A professional, modern "Website Coming Soon" landing page for GreenEzine built with React and Tailwind CSS.

## Features

- ✨ Clean, premium minimalist design
- 🌿 Eco-conscious green aesthetic
- 📱 Fully responsive mobile layout
- ♿ Accessible contrast and semantic HTML
- 🎨 Subtle animations and smooth transitions
- 💌 Email capture form for enquiries
- 🔗 Social media links
- 📊 Production-ready component structure

## Tech Stack

- **React 18** - UI framework
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **PostCSS** - CSS processing
- **Inter Font** - Modern typography

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will open at `http://localhost:3000` by default.

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Main landing page hero section
│   ├── EmailSignup.jsx   # Email capture form
│   ├── SocialLinks.jsx   # Social media links
│   └── Footer.jsx        # Footer section
├── App.jsx               # Main app component
├── main.jsx              # React entry point
└── index.css             # Tailwind CSS setup

tailwind.config.js        # Tailwind configuration
postcss.config.js         # PostCSS configuration
vite.config.js            # Vite configuration
```

## Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```javascript
colors: {
  'forest': {
    700: '#15803d',  // Primary green
    // ... other shades
  }
}
```

### Email Configuration

The email form currently simulates a submission. To connect it to your backend:

1. Update the API endpoint in `src/components/EmailSignup.jsx`
2. Replace the mock fetch with your actual API call
3. Handle the response appropriately

### Content

Edit the main content in `src/components/Hero.jsx`:
- Brand name: Update the badge text
- Headline: Modify the h1 text
- Supporting text: Update the paragraph
- Social links: Customize URLs in `SocialLinks.jsx`

## Performance

- Optimized for Core Web Vitals
- Minimal CSS bundle with Tailwind purging
- Lazy-loaded SVG icons
- Smooth animations with CSS transitions

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+

## Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy the dist/ folder to Vercel
```

### Other Platforms

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting service
3. Configure any API endpoints for the email form

## Email Setup

The form references `gogreenzine@icloud.com`. To receive emails:

1. **Option 1**: Connect to an email service like Mailgun, SendGrid, or Postmark
2. **Option 2**: Use a form service like Formspree or Basin
3. **Option 3**: Build a custom backend API

## License

© 2026 GreenEzine. All rights reserved.

## Support

For questions or issues, reach out to gogreenzine@icloud.com
