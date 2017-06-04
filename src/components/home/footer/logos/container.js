import styled from 'styled-components'
import { mediaQuery } from '@/style'

export default styled.div`
  margin: 0 auto;
  width: 400px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQuery} {
    flex-direction: column;
    width: 160px;
  }
`
