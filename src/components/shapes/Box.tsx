import React, { ReactNode } from 'react'
import styled from 'styled-components'
// @ts-ignore
import { layout } from 'styled-system'
export interface BoxProps {
  children?: ReactNode
}

// preparando BaseBox para receber style props
const BaseBox = styled('div')(layout)

// style props ordenadas por variants
const variants = {
  // takes full viewport
  full: {
    display: 'flex',
    minHeight: '100vh',
    maxWidth: '100vw',
  },
}

// componente com variant dinamica e outras props
const Box = styled(BaseBox).attrs(variants.full)<BoxProps>``

export default Box
