import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Typing from 'react-typing-animation'

import Box from '../../components/shapes/Box'
import CustomCursor from '../../components/CustomCursor'

const HomePage = (props: RouteComponentProps) => {
  return (
    <Box full center column>
      <Typing loop cursor={<CustomCursor color="white" />}>
        <Typing.Delay ms={50} />
        <h1>Work in Progress...</h1>
        <Typing.Backspace count={20} delay={1500} speed={25} />
      </Typing>

      <h3>Coming soon</h3>
    </Box>
  )
}

export default HomePage
