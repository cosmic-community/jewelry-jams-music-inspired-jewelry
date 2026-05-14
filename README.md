# Jewelry Jams - Music Inspired Jewelry

![App Preview](https://imgix.cosmicjs.com/878e6f00-4f51-11f1-ab10-3919932f165c-autopilot-photo-1514228742587-6b1558fcca3d-1778734701032.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern Next.js e-commerce storefront for Jewelry Jams - music-inspired jewelry. Built with Next.js 16, TypeScript, Tailwind CSS, and Cosmic CMS.

## Features

- 🏠 Beautiful homepage with featured products and categories
- 🛍️ Complete product catalog with detailed product pages
- 🏷️ Browse products by category
- 🎨 Product variants with pricing and stock info
- ⭐ Customer reviews with star ratings
- 📱 Fully responsive design
- ⚡ Server-side rendering for fast performance
- 🎯 SEO optimized

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=6a05560ad6f68316d874aed2&clone_repository=6a05573ad6f68316d874af13)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for an online store with products (including images, pricing, description, and inventory status), product categories, and customer reviews.
>
> User instructions: An e-commerce store with products, categories, variants, and customer reviews"

### Code Generation Prompt

> Build a Next.js application for an online business called "Jewelry Jams - Music inspired jewelry". The content is managed in Cosmic CMS with the following object types: categories, variants, products, reviews. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: An e-commerce store with products, categories, variants, and customer reviews

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless content management
- **@cosmicjs/sdk** - Official Cosmic SDK

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with bucket configured

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up environment variables (automatically configured in dashboard)
4. Run the development server:
   ```bash
   bun run dev
   ```

## Cosmic SDK Examples

```typescript
// Fetch all products with depth
const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single product by slug
const { object: product } = await cosmic.objects
  .findOne({ type: 'products', slug })
  .depth(1)
```

## Cosmic CMS Integration

This app integrates with the following Cosmic object types:

- **Products** - Main jewelry items with images, pricing, and variants
- **Categories** - Product organization
- **Variants** - Size/material/color variations of products
- **Reviews** - Customer feedback with star ratings

## Deployment Options

- **Vercel** - Recommended for Next.js apps
- **Netlify** - Alternative deployment platform

Set environment variables in your hosting platform:
- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`
<!-- README_END -->