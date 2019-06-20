import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { Router, navigate } from '@reach/router'

import theme from './assets/theme'
import WorkInProgressPage from './pages/WorkInProgressPage'

const ThreeCDN =
  'https://cdn.jsdelivr.net/gh/tengbao/vanta/vendor/three.r92.min.js'

const VantaNetCDN =
  'https://cdn.jsdelivr.net/gh/tengbao/vanta/dist/vanta.net.min.js'

function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    script.addEventListener('load', () => {
      resolve()
    })
    script.addEventListener('error', e => {
      reject(e)
    })
    document.body.appendChild(script)
  })
}

const App: React.FC = () => {
  useEffect(() => {
    let backgroundAnimation: any

    const setupAnimateBackground = async () => {
      await loadScript(ThreeCDN)
      await loadScript(VantaNetCDN)

      // @ts-ignore
      backgroundAnimation = window.VANTA.NET({
        el: '#background',
        color: 0xffffff,
        backgroundColor: 0x011c27,
      })
    }

    setupAnimateBackground()

    return () => {
      backgroundAnimation.effect && backgroundAnimation.effect.destroy()
    }
  }, [])

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      navigate('/workinprogress')
    }
    navigate('/workinprogress')
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div id="background">
        <Router>
          <WorkInProgressPage path="/workinprogress" />
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
