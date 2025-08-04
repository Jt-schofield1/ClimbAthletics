# C.L.I.M.B. Athletics

A modern, responsive website for C.L.I.M.B. Athletics - Elite Quarterback & Wide Receiver Training.

![C.L.I.M.B. Athletics](https://img.shields.io/badge/Status-Production%20Ready-green)
![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC)

## 🏈 About

C.L.I.M.B. Athletics provides elite quarterback and wide receiver training, developing skilled athletes and strong leaders through expert coaching, mentorship, and personalized training programs.

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Media**: Video player with lightbox functionality
- **Photo Gallery**: Masonry-style gallery with enhanced image positioning
- **SEO Optimized**: Meta tags, Open Graph, and sitemap generation
- **Performance Focused**: Optimized images, lazy loading, and fast load times
- **Booking Integration**: Direct integration with Square booking system
- **Contact Forms**: Formspree integration for contact submissions
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Headless UI](https://headlessui.com/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Forms**: [Formspree](https://formspree.io/)
- **SEO**: [Next SEO](https://github.com/garmeeh/next-seo)
- **Sitemap**: [Next Sitemap](https://github.com/iamvishnusankar/next-sitemap)
- **Maps**: [Google Maps API](https://developers.google.com/maps)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/climb-athletics.git
   cd climb-athletics
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables:
   ```env
   NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
climb-athletics/
├── public/
│   ├── Images/           # Training photos and coach headshots
│   ├── Videos/           # Training session videos
│   └── climb-logo.svg    # Site logo
├── src/
│   ├── app/              # Next.js 14 App Router pages
│   │   ├── about/        # About page
│   │   ├── coaches/      # Coaches page
│   │   ├── contact/      # Contact page
│   │   ├── media/        # Media gallery page
│   │   ├── pricing/      # Pricing page
│   │   ├── programs/     # Training programs
│   │   └── page.tsx      # Home page
│   └── components/       # Reusable React components
│       ├── Header.tsx    # Navigation header
│       ├── Footer.tsx    # Site footer
│       ├── VideoPlayer.tsx    # Custom video player
│       └── PhotoGallery.tsx   # Photo gallery component
├── next-seo.config.ts    # SEO configuration
├── next-sitemap.js       # Sitemap configuration
└── tailwind.config.ts    # Tailwind CSS configuration
```

## 🎨 Key Components

### VideoPlayer
Custom video player with thumbnail generation and lightbox modal functionality.

### PhotoGallery  
Responsive masonry-style gallery with optimized image positioning for better subject framing.

### Header
Responsive navigation with mobile menu and booking CTA.

## 📱 Mobile Optimization

The site is fully optimized for mobile devices with:
- Touch-friendly button sizes (44px+ minimum)
- Responsive typography and spacing
- Mobile-first navigation menu
- Optimized image loading and positioning
- Touch gesture support for galleries and videos

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Configure environment variables in Vercel dashboard**
3. **Deploy automatically on git push**

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Generate sitemap
npm run postbuild
```

## 🔧 Configuration

### SEO Configuration
Edit `next-seo.config.ts` to customize:
- Site title and description
- Open Graph images
- Twitter card settings
- Canonical URLs

### Sitemap Configuration
Edit `next-sitemap.js` to configure:
- Site URL
- Page priorities
- Change frequencies
- Additional pages

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Load JS**: ~144kB average
- **Image Optimization**: Next.js automatic optimization
- **Code Splitting**: Automatic route-based splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

For support, email info@climbathletics.com or create an issue in this repository.

## 🏆 Acknowledgments

- Mike Lowery - Head Coach & Founder
- Tony Lowery - Assistant Coach & Wide Receiver Specialist
- All the athletes who make C.L.I.M.B. Athletics possible

---

Built with ❤️ for elite athletic development