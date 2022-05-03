import styled from 'styled-components'

const Header = ({ className }) => {
  return (
    <header className={className}>Header</header>
  )
}

const StyledHeader = styled(Header)`
  width: 100%;
`

export default StyledHeader
