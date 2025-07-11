# 🎨 Background Changer App

A beautiful and interactive React application that allows users to dynamically change the background color of the entire screen with smooth animations and modern UI design.

## ✨ Features

- **Dynamic Background**: Instantly changes the entire screen background color
- **Smooth Animations**: Elegant transitions with 300ms duration for seamless color changes
- **Modern UI Design**: Glassmorphism-inspired control panel with backdrop blur effect
- **Responsive Layout**: Perfectly centered controls that work on all screen sizes
- **Interactive Buttons**: Hover and click animations for enhanced user experience
- **11 Color Options**: Carefully selected palette including Red, Green, Blue, Olive, Gray, Yellow, Pink, Purple, Lavender, White, and Black
- **Smart Text Contrast**: Automatic text color adjustment for optimal readability

## 🚀 Technologies Used

- **React 18** with Hooks (useState)
- **Tailwind CSS** for styling and animations
- **Modern CSS** with backdrop-blur and glassmorphism effects
- **Vite** for fast development and building

## 🎯 How It Works

The app uses React's `useState` hook to manage the current background color state. When a user clicks any color button:

1. The `setColor` function updates the state with the selected color
2. The background smoothly transitions to the new color using CSS transitions
3. The button provides visual feedback with scale animations on hover and click

## 🎨 Design Highlights

- **Glassmorphism UI**: Semi-transparent control panel with backdrop blur
- **Floating Controls**: Positioned at the bottom center for easy access
- **Micro-interactions**: Subtle hover and active states for better UX
- **Color-Smart Text**: Black text on light colors, white text on dark colors
- **Rounded Design**: Consistent border-radius for modern appearance

## 🛠️ Project Structure

```
src/
├── App.jsx          # Main component with color logic
├── App.css          # Additional styles (if needed)
└── main.jsx         # React app entry point
```

## 💡 Code Quality Features

- **DRY Principle**: Same `<Button/>`component is rendered with the differnet props named `colors , setColors`
- **Semantic Naming**: Clear and descriptive variable names
- **Consistent Styling**: Unified design system throughout
- **Performance Optimized**: Minimal re-renders and efficient state management

## 🎮 Usage

Simply click on any color button to instantly change the background color. The app starts with an olive background and smoothly transitions between colors as you explore different options.

Perfect for:
- Learning React state management
- Understanding CSS transitions and animations
- Exploring modern UI design patterns
- Demonstrating interactive web applications

## 🔧 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/keval06/bgChanger

# Navigate to project directory
cd bgChanger

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📱 Browser Compatibility

Works perfectly on all modern browsers with support for:
- CSS Grid and Flexbox
- CSS Transitions and Transforms
- Backdrop-filter (for glassmorphism effect)

---

*Built with ❤️ using React and Tailwind CSS*