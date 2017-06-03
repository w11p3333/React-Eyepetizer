import styled from 'styled-components'
import { mediaQuery } from '@/style'

const size = 450

export default styled.section`
  background-image: url(${ props => props.cover });
  background-position: 50%;
  background-size: cover;
  color: white;

  &:hover .layer {
    background: transparent;
  }

  cursor: pointer;
  height: ${size}px;
  
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQuery} {
    height: ${size / 2}px;
  }
`
