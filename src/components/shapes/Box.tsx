import styled from 'styled-components'
import { space, color, SpaceProps, ColorProps } from 'styled-system'

export type BoxProps = SpaceProps & ColorProps

const Box = styled('div')<BoxProps>(space, color)

export default Box
