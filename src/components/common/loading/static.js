import styled from 'styled-components'
import {
  loading
} from '@/style'

export default styled.figure`
  background-image: url(${loading.staticImg});
  background-size: cover;
  height: ${loading.height}px;
  width: ${loading.width}px;
  display: flex;
  align-items: center;
  justify-content: center;
`
