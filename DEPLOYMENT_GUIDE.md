# Greenezine - Premium Irish Sustainability Digital Magazine

A modern, premium editorial-style digital magazine website built with React, Tailwind CSS, and Vite. Greenezine is Ireland's sustainability-focused digital publication featuring curated editorial content on green business, environmental innovation, and sustainable living.

## 🌱 Project Overview

Greenezine transforms from a monthly PDF publication into a full-featured digital media platform. The website features:

- **Premium Editorial Design**: Clean, modern magazine aesthetic with editorial grids and typography hierarchy
- **Issue Archive**: Browse all past editions with responsive card layouts
- **Embedded Flipbooks**: January, February, and March issues embedded from external flipbook URLs
- **Native April Flipbook**: April 2026 edition with Google Drive integration and native viewer
- **Featured Businesses**: Showcase sustainability-focused businesses and advertisers
- **Advertising Platform**: Dedicated advertise page with inquiry forms and partnerships
- **Contact & Engagement**: Modern contact forms for inquiries, partnerships, and submissions
- **Mobile-First**: Fully responsive design optimized for all devices
- **SEO Optimized**: Structured metadata, canonical URLs, and semantic HTML

## 🎨 Design System

### Color Palette
- **Primary Background**: White/Off-white
- **Primary Accent**: Soft Sage Green (#6fa892)
- **Secondary Accent**: Eco Green (#5fb877)
- **Text**: Charcoal (#1F2937)
- **Backgrounds**: Soft sage tints for depth

### Typography
- **Font Family**: Inter (system-ui fallback)
- **Hierarchy**: Clear hierarchy from H1-H6
- **Serif Alternative**: Georgia for editorial elements

## 📁 Project Structure

```
greenezine/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navigation with mobile menu
│   │   ├── Footer.jsx          # Full-featured footer with links
│   │   ├── Hero.jsx            # Reusable hero component
│   │   ├── EmailSignup.jsx     # Email signup form
│   │   └── SocialLinks.jsx     # Social media links
│   ├── pages/
│   │   ├── Home.jsx            # Homepage with hero and latest issues
│   │   ├── Archive.jsx         # All issues archive
│   │   ├── IssueDetail.jsx     # Individual issue pages (embedded & native flipbooks)
│   │   ├── FeaturedBusinesses.jsx  # Business showcase
│   │   ├── About.jsx           # About page
│   │   ├── Advertise.jsx       # Advertising platform with form
│   │   └── Contact.jsx         # Contact form
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # React DOM render
│   └── index.css               # Tailwind + custom styles
├── public/                     # Static assets
├── index.html                  # Main HTML with SEO metadata
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration with custom colors
├── postcss.config.js           # PostCSS config
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm 7.x or higher

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

### Development Server
The dev server runs on `http://localhost:3000` and includes:
- Hot module replacement (HMR)
- Fast refresh for React components
- Automatic browser opening

## 📄 Pages & Features

### Home Page (`/`)
- Hero section with April 2026 edition highlight
- Magazine cover visual
- Featured issues grid showing latest 4 editions
- Newsletter subscription CTA
- Responsive mobile layout

### Archive Page (`/archive`)
- Grid layout of all issue editions
- Issue cards with cover, title, description
- Latest edition badge on April issue
- Subscribe CTA

### Issue Pages (`/issues/:slug`)
Supports:
- `/issues/january-2026` - Embedded flipbook
- `/issues/february-2026` - Embedded flipbook
- `/issues/march-2026` - Embedded flipbook
- `/issues/april-2026` - Native flipbook with PDF viewer

**Embedded Flipbooks** (Jan/Feb/Mar):
```
http://gogreenezine.com/flipbook-january/
http://gogreenezine.com/flipbooks-february/
https://gogreenezine.com/flipbook-march/
```

**April Native Flipbook**:
- Links to Google Drive PDF: https://drive.google.com/file/d/1DXEAvcnEGgcmuQJI6QNs49n2yfnnrVcM/view?usp=drive_web
- Interactive viewing experience
- Responsive iframe container

### Featured Businesses Page (`/featured-businesses`)
- Grid of 8 sustainable businesses
- Logo/emoji, category, description
- "Learn More" buttons
- CTA to advertise page

### About Page (`/about`)
- Mission statement
- What we cover (4 sections)
- Core values (Editorial Integrity, Sustainability First, Modern & Digital)
- Links to contact and advertise pages

### Advertise Page (`/advertise`)
- Value proposition section
- 6 advertising opportunities with pricing
- Contact form with fields:
  - Name, Business, Email, Phone, Message
- Links to featured businesses

### Contact Page (`/contact`)
- Contact information (email, hours, types handled)
- Quick navigation links
- Contact form with fields:
  - Name, Email, Enquiry Type (dropdown), Message
- Social media links
- Newsletter signup

## 🛠 Technology Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Styling**: Tailwind CSS 3.3.6
- **Routing**: React Router DOM 6.x
- **HTTP Client**: Axios
- **PDF Viewer**: react-pdf, pdfjs-dist
- **PostCSS**: For Tailwind processing
- **Linting**: ESLint

## 🎯 Key Features Implemented

✅ **Sticky Navigation**: Always visible with mobile hamburger menu
✅ **Responsive Design**: Mobile-first approach, tested on all breakpoints
✅ **Embedded Flipbooks**: Responsive iframe containers for external flipbooks
✅ **Native PDF Viewer**: April issue with PDF.js integration
✅ **Forms**: Contact, Advertise inquiry, Email signup
✅ **SEO Optimized**: Metadata, Open Graph, Twitter cards, canonical URLs
✅ **Animations**: Fade-in, slide-down, hover effects
✅ **Accessibility**: Semantic HTML, ARIA labels, focus management
✅ **Performance**: Optimized CSS, code splitting via Vite
✅ **Dark Footer**: Premium footer with comprehensive navigation

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first design approach
- Hamburger menu on screens < 768px
- Flexible grids (1 column mobile, 2-4 columns desktop)
- Touch-friendly buttons and links
- Optimized typography scaling
- Responsive flipbook containers

## 🔍 SEO Optimization

- **Meta Tags**: Description, keywords, author, robots
- **Open Graph**: Title, description, image, URL
- **Twitter Cards**: For social media sharing
- **Canonical URL**: Prevents duplicate content
- **Structured HTML**: Semantic tags (nav, main, footer, article)
- **Headings**: Proper hierarchy (H1-H6)
- **Keywords**: Sustainability, Ireland, magazine, eco, business, green

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist/` folder with optimized files.

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
1. Update `vite.config.js` base if needed
2. Build: `npm run build`
3. Deploy `dist` folder to GitHub Pages

### Environment Variables
Create `.env` file for any API keys or environment-specific URLs:
```
VITE_API_URL=https://api.example.com
```

## 📊 Performance Metrics

- **Build Size**: ~234KB JS (gzipped: 68KB)
- **CSS Size**: ~24KB (gzipped: 4.87KB)
- **HTML Size**: ~2.45KB (gzipped: 0.8KB)
- **Load Time**: <2.6s build time

## 🔧 Development Workflow

### Adding New Pages
1. Create new file in `src/pages/`
2. Add route in `App.jsx`
3. Add navigation link in `Navbar.jsx` and `Footer.jsx`
4. Style with Tailwind classes

### Customizing Colors
Edit `tailwind.config.js` color values in the `sage` and `eco` color palettes.

### Adding Images
Place images in `public/` folder and reference with `/filename`.

### Form Handling
Forms use `useState` for local form management. For backend integration, modify form handlers to call APIs with Axios.

## 📚 Component Documentation

### Navbar
- Sticky positioning on desktop and mobile
- Responsive hamburger menu
- Active link highlighting
- Mobile menu animation

### Footer
- Dark background (#1F2937)
- 4-column layout (desktop), 1 column (mobile)
- Brand info, navigation sections, contact
- Social media icons
- Copyright information

### Issue Cards
- Responsive grid (1-4 columns)
- Hover effects (scale, shadow, color)
- Cover area with gradient background
- Title, description, CTA
- Optional "Latest" badge

## 🐛 Troubleshooting

### Dev Server Not Starting
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build Errors
- Check Node.js version: `node --version` (should be 16+)
- Clear Vite cache: `rm -rf .vite`
- Clear dist folder: `rm -rf dist`

### Styling Issues
- Ensure Tailwind config is correct in `tailwind.config.js`
- Run `npm run dev` in separate terminal for hot reload
- Clear browser cache if styles aren't updating

## 📝 Configuration Files

### vite.config.js
- Defines Vite plugins (React)
- Dev server port (3000)
- Auto-open on dev start

### tailwind.config.js
- Custom color system
- Custom animations
- Font families
- Extended configuration

### postcss.config.js
- Tailwind CSS plugin
- Autoprefixer for vendor prefixes

## 🎓 Learning Resources

- [React Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [TypeScript for React](https://www.typescriptlang.org/docs/handbook/react.html)

## 📄 License

© 2026 Greenezine. All rights reserved.

## 👥 Support

For questions, partnerships, or feature requests:
- Email: gogreenzine@icloud.com
- Website: https://greenezine.com
- Contact Form: Available on `/contact` page

---

**Built with ❤️ for Ireland's Sustainability Community**
