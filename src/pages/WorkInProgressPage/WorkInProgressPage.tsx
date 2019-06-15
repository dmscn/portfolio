import React from 'react'
// @ts-ignore
import Typing from 'react-typing-animation'

import Box from '../../components/shapes/Box'

export default function WorkInProgressPage() {
  return (
    <Box center full>
      <Typing loop>
        <h1>Work in Progress...</h1>
        <Typing.Reset count={1} delay={2000} />
      </Typing>
    </Box>
  )
}
