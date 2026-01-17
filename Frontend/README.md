# Portfolio Frontend - Spiral Animation

A Next.js portfolio featuring a stunning 3D spiral animation built with GSAP and React.

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component system
- **GSAP** - Professional-grade animation library

## 📁 Project Structure

```
Frontend/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   └── spiral-animation.tsx  # Main spiral animation component
│   └── demo.tsx             # Demo component with Enter button
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
└── package.json             # Dependencies
```

## 🎯 Component Overview

### SpiralAnimation Component

Located at [components/ui/spiral-animation.tsx](components/ui/spiral-animation.tsx)

**Features:**
- 5000 animated particles
- 3D perspective projection
- Elastic easing animations
- Spiral expansion effects
- Responsive canvas rendering
- Automatic cleanup on unmount

**Key Classes:**
- `Vector2D` / `Vector3D` - Vector math utilities
- `AnimationController` - Main animation orchestrator
- `Star` - Individual particle system

### Demo Component

Located at [components/demo.tsx](components/demo.tsx)

Showcases the spiral animation with:
- Fullscreen background animation
- Elegant "Enter" button with fade-in
- Hover effects with letter-spacing animation
- Customizable navigation URL

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the animation.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Using the Components

### Basic Usage

```tsx
import { SpiralAnimation } from "@/components/ui/spiral-animation"

export default function Page() {
  return (
    <div className="h-screen w-screen">
      <SpiralAnimation />
    </div>
  )
}
```

### With Custom Button

```tsx
import { SpiralDemo } from "@/components/demo"

export default function Page() {
  return <SpiralDemo />
}
```

### Customization

Edit the demo component's navigation URL:

```tsx
const navigateToPersonalSite = () => {
  window.location.href = "https://your-site.com/"
}
```

Adjust animation parameters in `AnimationController`:

```tsx
private readonly numberOfStars = 5000  // Particle count
private readonly trailLength = 80      // Trail length
private readonly cameraTravelDistance = 3400  // Camera movement
```

## 📦 Dependencies

- `react` ^18.3.1
- `react-dom` ^18.3.1
- `next` ^15.1.0
- `gsap` ^3.12.5 - Animation library
- `tailwindcss` ^3.4.17
- `class-variance-authority` - Component variants
- `clsx` & `tailwind-merge` - Utility helpers

## 🎭 Animation Details

The spiral animation uses:

1. **GSAP Timeline** - Infinite loop with 15s duration
2. **3D Projection** - Converts 3D coordinates to 2D canvas
3. **Particle System** - 5000 stars with individual behaviors
4. **Elastic Easing** - Smooth, bouncy particle dispersal
5. **Camera Movement** - Dynamic perspective shifts

## 🖼️ Why `/components/ui`?

The `/components/ui` directory is the **standard location** for shadcn/ui components:

- ✅ Consistent import paths across the project
- ✅ Easy component discovery and organization
- ✅ Separation of UI primitives from feature components
- ✅ Enables `shadcn add` CLI commands to work seamlessly

## 📝 Notes

- The animation is optimized for performance with canvas rendering
- Uses `devicePixelRatio` for sharp rendering on high-DPI displays
- Automatically handles window resizing
- Animation cleanup prevents memory leaks

## 🚀 Next Steps

- Customize the enter button text and styling
- Adjust animation parameters to your preference
- Add more interactive elements
- Integrate with your portfolio pages

---

Built with ❤️ using Next.js and GSAP
