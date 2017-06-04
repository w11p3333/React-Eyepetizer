import styled from 'styled-components'
import { mediaQuery } from '@/style'

export default styled.div`
  left: 0;
  right: 0;
  top: 5%;
  bottom: 20%;
  margin: auto;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${mediaQuery} {
    bottom: 10%;
  }
`
