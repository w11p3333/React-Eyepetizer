import styled from 'styled-components'
import {
  mediaQuery,
  homeCover
} from '@/style'

export default styled.section`
  background-image: url(${ props => props.cover });
  background-position: 50%;
  background-size: cover;
  color: white;

  &:hover .layer {
    background: transparent;
  }

  cursor: pointer;
  height: ${homeCover.height}px;
  width: 100%:
  
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQuery} {
    height: ${homeCover.height / 2}px;
  }
`
