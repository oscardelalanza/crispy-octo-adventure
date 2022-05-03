import styled from 'styled-components'

const Header = ({ className }) => {
  return (
    <header className={className}>Header</header>
  )
}

const StyledHeader = styled(Header)`
  width: 100%;
  padding: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
`

export default StyledHeader
