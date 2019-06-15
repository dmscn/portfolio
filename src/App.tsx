import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme'
import WorkInProgressPage from './pages/WorkInProgressPage'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <WorkInProgressPage />
    </ThemeProvider>
  )
}

export default App
