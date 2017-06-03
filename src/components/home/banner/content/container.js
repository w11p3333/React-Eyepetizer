import styled from 'styled-components'
import { mediaQuery } from '@/style'

export default styled.div`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-start;

  ${mediaQuery} {
    justify-content: space-between;
    bottom: 10%;
  }
`
