import styled from 'styled-components'
import Container from './Container'

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Container width='30' fluid>
        Logo
      </Container>
      <Container width='50' fluid>
        Links
      </Container>
    </header>
  )
}

const StyledHeader = styled(Header)`
  width: 100%;
  padding: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
`

export default StyledHeader
