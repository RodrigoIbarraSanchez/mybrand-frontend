# MyBrand Website

Realizado como prueba tecnica para IDEEO por Rodrigo Ibarra.

## Project Components

### Public Components
- **Hero**: Main landing component with the company's value proposition
- **About (Nosotros)**: Company description and philosophy
- **Services**: Showcases the company's main services
- **SuccessCases**: Portfolio of successful projects
- **Contact**: Contact form for potential clients
- **Footer**: Contains contact information and social media links

### Admin Components
- **Login**: Authentication portal for administrators
- **ContactFormDashboard**: Admin dashboard to manage contact form submissions

## Authentication

The project implements JWT (JSON Web Token) authentication for the admin section. The token is stored in Local Storage for persistent sessions.

### Admin Credentials
- Email: admin@gmail.com
- Password: 123456

## Technical Notes

- The project uses Vue 3's Composition API with `<script setup>` syntax
- Built with Vite for optimal development experience
- JWT implementation for secure authentication
- Local Storage is used exclusively for JWT token storage

## Design Status

The current version has some pending design enhancements due to time constraints. While the core functionality is complete, some aesthetic details and animations are planned for future updates.

## ToDo List

1. **Testing**
   - Implement unit tests
   - Add integration tests
   - Set up end-to-end testing

2. **Animations and Transitions**
   - Add page transition animations
   - Implement scroll animations
   - Enhance component mounting animations
   - Add hover effects and micro-interactions

3. **Design Enhancements**
   - Refine responsive design
   - Add loading states
   - Enhance form feedback
   - Improve overall visual consistency

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
