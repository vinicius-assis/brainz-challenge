# Brainz - Challenge

A React application challenge featuring a study platform interface with navigation, data loading, and responsive design. Built with modern web technologies and comprehensive testing coverage.

## 🚀 Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **TanStack Query** for data fetching
- **MSW** for API mocking
- **Vitest** for unit and integration testing
- **Playwright** for end-to-end testing

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Application pages
├── api/                # API queries and mutations
├── mocks/              # Mock data and handlers
└── tests/
    ├── integration/    # Integration tests (Vitest)
    └── e2e/           # End-to-end tests (Playwright)
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/vinicius-assis/brainz-challenge.git
cd brainz-challenge

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 🧪 Testing

This project includes comprehensive testing at multiple levels:

### Unit & Integration Tests (Vitest)

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Run only integration tests
npm test -- src/tests/integration
```

### End-to-End Tests (Playwright)

```bash
# Run E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Run E2E tests in debug mode
npm run test:e2e:debug

# Run E2E tests with visible browser
npm run test:e2e:headed
```

## 📊 Test Coverage

- **Integration Tests**: 21 tests covering API integration, error handling, and loading states
- **E2E Tests**: 10 tests covering user navigation, mobile experience, and complete user flows

## 🏗️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm test             # Run unit/integration tests
npm run test:e2e     # Run E2E tests
npm run test:ui      # Run tests with UI

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

## 🎯 Features

- **Study Materials**: Access to various subjects and topics
- **Practice Exams**: Simulated ENEM exams with progress tracking
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Updates**: Live data fetching with React Query
- **Error Handling**: Comprehensive error states and retry mechanisms
- **Loading States**: Smooth loading experiences with spinners and skeletons

## 🔧 Development

### Code Quality

This project uses:
- **ESLint** for code linting
- **Husky** for git hooks
- **lint-staged** for pre-commit checks

### API Mocking

The project uses MSW (Mock Service Worker) for API mocking during development and testing. Mock handlers are located in `src/mocks/`.

## 📝 License

This project is licensed under the MIT License.
