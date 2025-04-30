# Professional Portfolio Website

A responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This website showcases professional expertise in technical support, software engineering, and graphic design.

## Features

- Modern, responsive design
- TypeScript for type safety
- Tailwind CSS for styling
- Optimized for all devices
- SEO-friendly structure
- Contact form with validation
- Project showcase section
- About page with skills and experience

## Pages

- **Home**: Landing page with hero section, skills overview, featured projects, and call-to-action
- **About**: Detailed information about the professional background, skills, experience, and education
- **Projects**: Showcase of various projects with filtering by category
- **Contact**: Contact form and additional contact information

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- React
- Geist fonts

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd portfolio/client
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/client
  /public             # Static assets
  /src
    /app              # Next.js app directory
      /pages          # Route groups for different pages
      globals.css     # Global styles
      layout.tsx      # Root layout
      page.tsx        # Home page
    /components       # Reusable components
    /lib              # Libraries and client-side utilities
    /styles           # Style-related files
    /utils            # Utility functions
```

## Customization

- Update personal information in the page files
- Replace project details in the projects page
- Modify colors and styling in globals.css and theme.ts
- Add your own images in the public directory

## Deployment

This project can be easily deployed to various platforms:

- **Vercel**: The easiest option for Next.js applications
- **Netlify**: Another great option with easy configuration
- **GitHub Pages**: For static exports
- **Self-hosted**: For complete control

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vercel for the deployment platform
