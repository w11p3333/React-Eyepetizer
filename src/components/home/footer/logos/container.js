import styled from 'styled-components'
import { mediaQuery } from '@/style'

export default styled.div`
  width: 428px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQuery} {
    flex-direction: column;
  }
`
