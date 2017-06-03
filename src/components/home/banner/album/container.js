import styled from 'styled-components'
import { mediaQuery } from '@/style'
const size = 100

export default styled.div`
  height: ${size}%;
  width: ${size}%;
  z-index: -1;
  position: absolute;
  display: none;

  ${mediaQuery} {
    display: block;
  }

`
