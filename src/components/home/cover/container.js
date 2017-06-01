import styled from 'styled-components'

export default styled.section`
  background-image: url(${ props => props.cover });
  background-position: 50%;
  background-size: cover;
  color: white;

  &:hover .layer {
    background: transparent;
  }

  cursor: pointer;
  height: 450px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`
