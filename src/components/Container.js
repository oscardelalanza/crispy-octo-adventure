import styled from 'styled-components'

const Container = styled.div`
  width: ${props => props.width || '100'}%;
  padding: 0;
  display: ${props => props.fluid ? 'inline-block' : 'block'};
`

export default Container
