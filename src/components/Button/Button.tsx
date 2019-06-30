import styled from 'styled-components'
// @ts-ignore
import { layout, color, space } from 'styled-system'

export interface ButtonProps {
  children: string
  variant: 'primary' | 'link'
}

const BaseButton = styled('div')(layout, color, space)

const styles = {
  primary: {
    bg: 'darkBlue',
    color: 'white',
  },
  link: {
    bg: 'transparent',
    color: 'link',
  },
}

const Button = styled(BaseButton).attrs((props: ButtonProps) => {
  const { variant = 'primary' } = props
  return {
    ...styles[variant],
  }
})<ButtonProps>``

export default Button
