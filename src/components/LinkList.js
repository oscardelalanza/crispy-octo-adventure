import styled from 'styled-components'
import { HeaderLinks } from '../utils/constants'
import Container from './Container'

const StyledItem = styled.a`
  margin: auto 10px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
`

const LinkList = ({ className }) => {
  return(
    <Container className={className} width={50}>
      {HeaderLinks.map(link => <StyledItem key={link.title} href={link.path}>{link.title}</StyledItem>)}
    </Container>
  )
}

const StyledLinkList = styled(LinkList)`
  display: flex;
`
export default StyledLinkList
