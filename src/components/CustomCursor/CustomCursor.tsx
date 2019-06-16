import React from 'react'
import styled, { keyframes } from 'styled-components'

const blink = keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`

export interface CursorProps {
  color?: string
}

const CursorSpan = styled.span<CursorProps>`
  font-weight: 400;
  color: ${props => props.color || 'black'};
  font-size: 1em;
  padding-left: 2px;
  animation: ${blink} 600ms step-end infinite;
`

const CustomCursor = (props: CursorProps) => (
  <CursorSpan {...props}>|</CursorSpan>
)

export default CustomCursor
