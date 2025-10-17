import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryProvider } from './providers/QueryProvider'

async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser')
    await worker.start({
      onUnhandledRequest: 'bypass',
    })
    console.log('MSW started successfully')
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryProvider>
        <App />
      </QueryProvider>
    </StrictMode>,
  )
}).catch((error) => {
  console.error('Failed to start MSW:', error)
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryProvider>
        <App />
      </QueryProvider>
    </StrictMode>,
  )
})
