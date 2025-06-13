# Chat Application Frontend

A modern chat application frontend built with TanStack Start, React, and Radix UI.

## Features

- **Animated Sidebar**: Beautiful sidebar with contact list using Radix UI components
- **AI Chat Integration**: Built-in Gemini AI chat functionality
- **Modern UI**: Clean, responsive design with dark/light theme support
- **TypeScript**: Full type safety throughout the application

## Key Components

- **RadixSidebarDemo**: Animated sidebar component that serves as the contact list
- **ChatUi**: AI chat interface with Gemini integration
- **Theme System**: Complete dark/light mode support

## Development

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun build

# Start production server
bun start
```

## Environment Variables

Create a `.env` file with:

```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

## Project Structure

- `src/components/` - React components
  - `Sidebar-Demo.tsx` - Main sidebar with contacts
  - `ChatUi.tsx` - AI chat interface
  - `ui/` - Base UI components
  - `animate-ui/` - Animated UI components
- `src/routes/` - Application routes
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions
