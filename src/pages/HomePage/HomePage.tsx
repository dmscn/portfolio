import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Typing from 'react-typing-animation'

import Box from '../../components/shapes/Box'
import CustomCursor from '../../components/CustomCursor'
import Text from '../../components/Text'

const HomePage = (props: RouteComponentProps) => {
  const techs = ['JavaScript', 'ES8', 'React', 'Angular', 'Vue.js']

  const techsJSX = techs.map(tech => (
    <>
      <Text variant="title" light>
        {tech}
      </Text>
      <Typing.Backspace count={tech.length} delay={1500} speed={25} />
    </>
  ))

  return (
    <Box full center column>
      <Text variant="heading" light>
        hello, i'm Leo
      </Text>
      <Typing loop cursor={<CustomCursor color="white" />}>
        {techsJSX}
      </Typing>
    </Box>
  )
}

export default HomePage
