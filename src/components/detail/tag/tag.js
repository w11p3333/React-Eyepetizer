import styled from 'styled-components'
import { mediaQuery } from '@/style'
export default styled.span`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  font-size: 12px;
  letter-spacing: 3px;
  line-height: 22px;
  margin: 4px;
  padding: 0 6px 0 9px;
  
  ${mediaQuery} {
    letter-spacing: 0;
  }
`
