import React, { ReactNode } from 'react'
import Box from '../../components/shapes/Box'

export default function WorkInProgressPage() {
  return (
    <Box
      flex={1}
      maxWidth="100vw"
      minHeight="100vh"
      bg="darkBlue"
      color="magenta"
    >
      <Title>Work In Progress</Title>
    </Box>
  )
}

const Title = (props: { children: ReactNode }) => <h1>{props.children}</h1>
