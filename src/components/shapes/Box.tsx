import styled from 'styled-components'
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  // @ts-ignore
  layout,
  // @ts-ignore
  LayoutProps,
  flex,
  FlexProps,
} from 'styled-system'

export type BoxProps = SpaceProps & LayoutProps & ColorProps & FlexProps

const Box = styled('div')<BoxProps>(space, color, layout, flex)

export default Box
