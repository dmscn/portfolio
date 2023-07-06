import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from '@reach/router'
import Typing from 'react-typing-animation'

import Layout from '../../assets/theme/layout'

import Box from '../../components/shapes/Box'
import CustomCursor from '../../components/CustomCursor'
import Text from '../../components/Text'
import Button from '../../components/Button'

const HomePage: FunctionComponent<RouteComponentProps> = () => {
  const techs = [
    'Web',
    'Mobile',
    'JavaScript',
    'React',
    'React Native',
    'VueJS',
    'ES8 +',
    'UI',
    'Functional Programming',
    'Node.js',
    'Koa2',
    'Express',
    'Python',
    'PHP',
    'Docker',
    'Kubernetes',
    'AWS',
    'Google Cloud',
    'Analytics',
  ]

  const techsJSX = techs.map(tech => (
    <React.Fragment key={tech}>
      <Text variant="title" light>
        {tech}
      </Text>
      <Typing.Backspace count={tech.length} delay={1500} speed={25} />
    </React.Fragment>
  ))

  return (
    <Box full column>
      <Box flex={4} center column>
        <Text variant="heading" light>
          hello, i'm Leo
        </Text>
        <Box mt={Layout.margin.small}>
          <Typing loop cursor={<CustomCursor color="white" />}>
            {techsJSX}
          </Typing>
        </Box>
      </Box>
      <Box center flex={1}>
        <Button
          variant="link"
          href="./resume.pdf"
          target="_blank"
          download
        >
          Download my resumé
        </Button>
      </Box>
      <Box flex={1} center>
        <Button variant="link" href="https://github.com/dmscn" target="_blank">
          github
        </Button>
        <Button
          variant="link"
          href="https://twitter.com/devel_guy"
          target="_blank"
        >
          twitter
        </Button>
        <Button
          variant="link"
          href="https://www.linkedin.com/in/ldmscn/"
          target="_blank"
        >
          linkedin
        </Button>
      </Box>
    </Box>
  )
}

export default HomePage
