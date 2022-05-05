import styled from 'styled-components'
import Container from './Container'
import Logo from './Logo'
import LinkList from './LinkList'

const Header = ({ className }) => {
  return (
    <header className={className}>
      <Container width='10' mr={10}>
        <Logo />
      </Container>
      <LinkList />
    </header>
  )
}

const StyledHeader = styled(Header)`
  width: 100%;
  padding: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  display: flex;
`

export default StyledHeader
