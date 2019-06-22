import React from 'react'
import styled from 'styled-components'
// @ts-ignore
import { layout, color, typography } from 'styled-system'

const BaseText = styled('div')(layout, color, typography)

const styles = {
  light: {
    color: 'white',
  },
  heading: {
    fontSize: 64,
    fontWeight: 600,
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 600,
  },
  body: {
    fontSize: 16,
  },
}

export interface TextProps {
  light?: boolean
  variant?: 'body' | 'title' | 'subtitle' | 'heading'
}

const Text = styled(BaseText).attrs((props: TextProps) => {
  const { light, variant = 'body' } = props
  return {
    ...styles[variant],
    ...(light && styles.light),
  }
})<TextProps>``

export default Text
