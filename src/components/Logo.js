import logo from '../assets/img/logo.jpg'
import styled from 'styled-components'

const Thumb = styled.div`
  width: 100%;
  height: 50px;
`

const Image = styled.img`
  border-radius: 5px;
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
`

const Logo = () => {
  return (
    <Thumb>
      <Image src={logo} />
    </Thumb>
  )
}

export default Logo
