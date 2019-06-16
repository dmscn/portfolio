import React from 'react'
// @ts-ignore
import Typing from 'react-typing-animation'

import Box from '../../components/shapes/Box'

export default function WorkInProgressPage() {
  return (
    <Box center full>
      <Typing loop>
        <Typing.Delay ms={50} />
        <h1>Work in Progress...</h1>
        <Typing.Backspace count={20} delay={1500} speed={25} />
      </Typing>
    </Box>
  )
}
