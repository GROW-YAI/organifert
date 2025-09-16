# 🌱 Organifert - Evans Okyere Farms

A modern, responsive web application showcasing organic liquid fertilizers and agricultural solutions by Evans Okyere Farms. Built with React and focused on promoting sustainable farming practices.

## 🎯 Overview

Organifert is a comprehensive agricultural platform that provides:
- **Organic Fertilizer Products**: Showcase of various organic fertilizers including banana, moringa, citrus-based, and animal manure composts
- **Crop Information**: Detailed crop guidance and growing information
- **Farmer Tools**: Essential farming tools and resources
- **Safety Guidelines**: Agricultural safety practices and protocols

## ✨ Features

### 🏠 Core Functionality
- **Product Catalog**: Browse and explore organic fertilizer products with detailed information
- **Product Details**: Individual product pages with nutrients, descriptions, and related products
- **Crop Information**: Comprehensive crop growing guides and information
- **Farmer Toolbox**: Collection of essential farming tools and resources
- **Safety Section**: Important safety guidelines for agricultural practices
- **Responsive Design**: Mobile-first, fully responsive user interface

### 🧭 Navigation & UX
- **React Router**: Client-side routing with smooth page transitions
- **Breadcrumb Navigation**: Easy navigation with breadcrumb trails
- **Scroll to Top**: Automatic smooth scroll to top on route changes
- **Error Handling**: Custom 404 error page for undefined routes

## 🛠 Tech Stack

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and functional components
- **React Router DOM 7.0.1** - Client-side routing
- **Vite 6.0.1** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.15** - Utility-first CSS framework
- **Styled Components 6.1.13** - CSS-in-JS styling
- **Lucide React 0.474.0** - Modern icon library
- **React Icons 5.4.0** - Popular icon library

### Development Tools
- **ESLint 9.15.0** - Code linting with React-specific rules
- **PostCSS 8.4.49** - CSS processing
- **Autoprefixer 10.4.20** - CSS vendor prefixing

## 📁 Project Structure

```
organifert/
├── public/
│   ├── _redirects          # Deployment redirects
│   └── vite.svg           # Vite logo
├── src/
│   ├── assets/            # Images and media files
│   │   ├── icons/         # Icon files
│   │   ├── logo/          # Logo files
│   │   └── *.png          # Product and crop images
│   ├── components/        # Reusable components
│   │   ├── constants/     # Application constants
│   │   │   └── index.js   # Product data and constants
│   │   ├── AboutUs.jsx    # About us component
│   │   ├── Breadcrumb.jsx # Navigation breadcrumbs
│   │   ├── CropInfomation.jsx # Crop information display
│   │   ├── FarmerToolBox.jsx  # Farmer tools section
│   │   ├── Footer.jsx     # Site footer
│   │   ├── Header.jsx     # Site header and navigation
│   │   ├── ProductSection.jsx # Product showcase
│   │   ├── Safety.jsx     # Safety information
│   │   └── ScrollToTopButton.jsx # Scroll utility
│   ├── pages/             # Page components
│   │   ├── CropDetails.jsx    # Individual crop pages
│   │   ├── Error.jsx          # 404 error page
│   │   ├── Home.jsx           # Homepage
│   │   └── ProductDetails.jsx # Individual product pages
│   ├── App.jsx            # Main app component with routing
│   ├── main.jsx           # React app entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── eslint.config.js       # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd organifert
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint code linting
- `npm run preview` - Preview production build locally

## 🌐 Routes & Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Main landing page with all sections |
| `/about-us` | AboutUs | Company information and mission |
| `/fertilisers` | ProductSection | All fertilizer products |
| `/product/:id` | ProductDetails | Individual product details |
| `/crop-info` | CropInfomation | Crop growing information |
| `/crop/:id` | CropDetails | Individual crop details |
| `/safety` | Safety | Agricultural safety guidelines |
| `/toolbox` | FarmerToolBox | Farming tools and resources |
| `/*` | Error | 404 error page |

## 📦 Product Data

The application showcases four main organic fertilizer products:

1. **Organic Banana Fertilizer** - Rich in potassium and nitrogen
2. **Moringa Leaf Compost** - Nutrient-dense organic compost
3. **Citrus-Based Organic Fertilizer** - Made from orange peels and citrus residues
4. **Animal Manure Compost** - Traditional slow-release organic fertilizer

Each product includes:
- Detailed descriptions
- Nutrient information (NPK values)
- High-quality product images
- Related product recommendations

## 🎨 Design & Styling

- **Mobile-First Design**: Responsive layouts that work on all devices
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Styled Components**: Component-scoped CSS-in-JS styling
- **Modern Icons**: Lucide React and React Icons for consistent iconography
- **Smooth Interactions**: Animated scrolling and transitions

## 🔧 Configuration

### Vite Configuration
- React plugin for Fast Refresh
- ES modules support
- Optimized build output

### Tailwind Configuration
- Custom content paths for optimal bundle size
- Configured for React JSX files

### ESLint Configuration
- React-specific rules and best practices
- Modern JavaScript standards (ES2020+)
- React Hooks linting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of Evans Okyere Farms' digital presence for promoting organic farming solutions.

## 🌟 About Evans Okyere Farms

Evans Okyere Farms specializes in producing high-quality organic liquid fertilizers that promote sustainable farming practices. Our mission is to provide farmers with natural, effective fertilizers that improve soil health and crop yields while protecting the environment.

---

**Built with ❤️ for sustainable agriculture**