import styled, { keyframes } from 'styled-components'

const play = keyframes`
  0% {
    transform: translateZ(0);
  }
  100% {
    transform: translate3d(-5%, -2%, 0);
  }
`

export default styled.img`
  overflow: hidden;
  width: 120%;
  opacity: 1;
  transition: all 1.25s;
  position: absolute;
  animation: ${play} 8s ease infinite alternate;
`
