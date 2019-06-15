import { ReactNode } from 'react'
import styled from 'styled-components'
// @ts-ignore
import { layout, color, flexbox, ColorProps } from 'styled-system'

const BaseBox = styled('div')(layout, flexbox)

const styles = {
  base: {
    display: 'flex',
  },
  // takes full viewport
  full: {
    minHeight: '100vh',
    maxWidth: '100vw',
  },
  // center the objects
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export interface BoxProps {
  children?: ReactNode
  center?: boolean
  full?: boolean
}

type Props = BoxProps & ColorProps

const Box = styled(BaseBox).attrs((props: Props) => {
  const { center, full } = props
  return {
    ...styles.base,
    ...(full && styles.full),
    ...(center && styles.center),
  }
})<Props>`
  ${color}
`

export default Box
