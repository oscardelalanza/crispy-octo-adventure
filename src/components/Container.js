import styled from 'styled-components'

const Container = styled.div`
  width: ${props => props.width || '100'}%;
  padding: 0;
  margin-right: ${props => props.mr || 0}px;
  margin-left: ${props => props.ml || 0}px;
`

export default Container
