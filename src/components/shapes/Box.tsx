import { ReactNode } from 'react'
import styled from 'styled-components'
import {
  // @ts-ignore
  layout,
  color,
  // @ts-ignore
  flexbox,
  // @ts-ignore,
  FlexboxProps,
  ColorProps,
  space,
  SpaceProps,
} from 'styled-system'

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
  // flex column
  column: {
    flexDirection: 'column',
  },
}

export interface BoxProps {
  children?: ReactNode
  center?: boolean
  full?: boolean
  column?: boolean
}

type Props = BoxProps & ColorProps & SpaceProps & FlexboxProps

const Box = styled(BaseBox).attrs((props: Props) => {
  const { center, full, column } = props
  return {
    ...styles.base,
    ...(full && styles.full),
    ...(center && styles.center),
    ...(column && styles.column),
  }
})<Props>`
  ${color}
  ${space}
`

export default Box
