import styled from 'styled-components'
// @ts-ignore
import { layout, color, space, border, typography } from 'styled-system'

export interface ButtonProps {
  children: string
  variant: 'link'
  as?: 'a' | 'button'
  href?: string
}

const BaseButton = styled('a')(layout, color, space, border, typography)

const styles = {
  base: {
    border: 0,
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 2.5,
    p: 25,
  },
  link: {
    bg: 'transparent',
    color: 'white',
  },
}

const Button = styled(BaseButton).attrs((props: ButtonProps) => {
  const { variant = 'link' } = props
  return {
    ...styles.base,
    ...styles[variant],
  }
})<ButtonProps>`
  cursor: pointer;
`

export default Button
