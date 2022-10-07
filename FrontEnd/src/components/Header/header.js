import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import logo from '../../assets/logo.png';
import { MenuDesktop } from './components/MenuDesktop/menuDesktop';
import { MenuMobile } from './components/MenuMobile/menuMobile';
import { useMenuMobile } from '../../hooks/useMenuMobile';
import { Container } from 'react-bootstrap';
import styled from './styles.module.scss';



export function Header() {
  const { setStatusMenu } = useMenuMobile();

  return (
    <Container fluid className={`${styled.nav} px-2`}>
      <Container className={`max-width-1180 h-100 p-4 d-flex justify-content-between align-items-center`}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button className={styled.menu_toggle} onClick={() => setStatusMenu(true)}>
          <FiMenu size={22}/>
        </button>
        <MenuDesktop/>
        <MenuMobile/>
      </Container>
    </Container>
  )
}
